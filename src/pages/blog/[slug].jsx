import React, { useEffect, useState, useMemo, useCallback } from "react";
import Head from "next/head";
import Layout from "../../../components/Layout";
import dbConnect from "../../../lib/database";
import Blog from "../../../models/blog";
import axios from "axios";
import Link from "next/link";

// Client-only component for dangerouslySetInnerHTML to prevent hydration mismatch
function BlogContent({ html }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Only render on client to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="blog-content-placeholder min-h-[400px] bg-gray-50 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-400 text-lg">Loading content...</div>
      </div>
    );
  }
  
  return (
    <div 
      className="blog-content main-content text-gray-900 leading-relaxed prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html || "" }} 
    />
  );
}

// Clean blog content by removing editor-specific elements
function cleanBlogContent(html) {
  if (!html || typeof html !== "string") return html;
    
  try {
    // Remove remove buttons
    let cleaned = html.replace(/<button[^>]*data-remove-media="true"[^>]*>.*?<\/button>/gi, '');
      
    // Remove buttons with absolute positioning (editor remove buttons)
    cleaned = cleaned.replace(/<button[^>]*style[^>]*position:\s*absolute[^>]*>.*?<\/button>/gi, '');
      
    // Remove any remaining editor-specific attributes
    cleaned = cleaned.replace(/data-remove-media="true"/gi, '');
      
    // Remove hidden topic markers (but extract topics if needed)
    cleaned = cleaned.replace(/<p[^>]*style="display:\s*none[^"']*"[^>]*>.*?<\/p>/gi, '');
      
    // Ensure proper HTML structure
    cleaned = cleaned.replace(/<div[^>]*class="image-container"[^>]*>|<div[^>]*class="video-container"[^>]*>/gi, '');
    cleaned = cleaned.replace(/<\/div>/gi, '');
      
    // Clean up any empty paragraphs
    cleaned = cleaned.replace(/<p><\/p>/gi, '');
    cleaned = cleaned.replace(/<p><br><\/p>/gi, '');
      
    return cleaned;
  } catch (e) {
    console.error('Error cleaning blog content:', e);
    return html;
  }
}

// Extract first image source from HTML
function extractFirstImageSrc(html) {
  if (!html || typeof html !== "string") return null;
  
  try {
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : null;
  } catch (e) {
    console.error('Error extracting first image source:', e);
    return null;
  }
}

// Check if cover image exists in content
function coverImageExistsInContent(html, coverImageUrl) {
  if (!html || !coverImageUrl || typeof html !== "string") return false;
  
  // Escape special regex characters in the URL
  const escapeRegExp = (string) => {
    if (!string) return '';
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  
  const escapedCoverUrl = escapeRegExp(coverImageUrl);
  
  // Check if the cover image URL exists in the content (case insensitive, global)
  try {
    const imgRegex = new RegExp(`<img[^>]*src\\s*=\\s*["']${escapedCoverUrl}["']`, 'gi');
    return imgRegex.test(html);
  } catch (e) {
    console.error('Error checking cover image existence:', e);
    return false;
  }
}

// Extract topics from content (hidden topic markers)
function extractTopics(html) {
  if (!html || typeof html !== "string") return [];
  try {
    // Look for hidden paragraphs containing hashtags
    const topicRegex = /<p[^>]*style="display:\s*none[^"']*"[^>]*>(.*?)<\/p>/gi;
    const matches = html.matchAll(topicRegex);
    const topics = [];
    for (const match of matches) {
      const content = match[1];
      // Extract hashtags from the content
      const hashtagMatches = content.match(/#(\w+)/g);
      if (hashtagMatches) {
        const extractedTopics = hashtagMatches.map(tag => tag.substring(1)); // Remove # symbol
        topics.push(...extractedTopics);
      }
    }
    // Remove duplicates and return
    return [...new Set(topics)];
  } catch (e) {
    console.error('Error extracting topics:', e);
    return [];
  }
}

export default function BlogDetailPage({ blog }) {
  if (!blog) {
    return (
      <Layout>
        <div className="force-light max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <p className="mt-2 text-gray-600">The requested blog post does not exist.</p>
        </div>
      </Layout>
    );
  }
  
  // Client-only state - initialize with server values to prevent hydration mismatch
  const [likes, setLikes] = useState(blog.likesCount || 0);
  const [dislikes, setDislikes] = useState(blog.dislikesCount || 0);
  const [views, setViews] = useState(blog.viewsCount || 0);
  const [reaction, setReaction] = useState(null);
  const [visitorId, setVisitorId] = useState("");
  const [userTag, setUserTag] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize client-only state after mount
  useEffect(() => {
    setIsMounted(true);
    
    // Initialize visitor ID and reaction state
    let id = localStorage.getItem("visitorId");
    if (!id) {
      // Generate consistent ID based on blog ID - deterministic for same visitor
      const timestamp = Math.floor(Date.now() / 1000).toString(36); // Use seconds for consistency
      id = `visitor-${blog._id.slice(-8)}-${timestamp}`;
      localStorage.setItem("visitorId", id);
    }
    setVisitorId(id);
    setUserTag(`User-${id.slice(0,6)}`);
    
    // Set initial reaction based on localStorage
    if (Array.isArray(blog.likes) && blog.likes.includes(id)) {
      setReaction('like');
    } else if (Array.isArray(blog.dislikes) && blog.dislikes.includes(id)) {
      setReaction('dislike');
    }
    
    // Track view when component mounts (after hydration)
    const trackView = async () => {
      try {
        await axios.patch(`/api/blog/published?action=view&paramlink=${blog.paramlink}`, { 
          visitorId: id 
        });
      } catch (err) {
        console.error('Failed to track view:', err);
      }
    };
    
    // Only track view if it's a new visitor (not a refresh/re-hydration)
    const hasTrackedView = localStorage.getItem(`viewed_${blog._id}`);
    if (!hasTrackedView) {
      trackView();
      localStorage.setItem(`viewed_${blog._id}`, 'true');
    }
  }, [blog._id, blog.likes, blog.dislikes, blog.paramlink]);
  
  // Sync likes/dislikes from server periodically (but don't change on initial render)
  useEffect(() => {
    if (!isMounted) return;
    
    const syncReactions = async () => {
      try {
        const res = await axios.get(`/api/blog/published?paramlink=${blog.paramlink}`);
        const serverBlog = res.data?.blog;
        if (serverBlog) {
          setLikes(serverBlog.likesCount || 0);
          setDislikes(serverBlog.dislikesCount || 0);
          setViews(serverBlog.viewsCount || 0);
        }
      } catch (err) {
        console.error('Failed to sync reactions:', err);
      }
    };
    
    // Sync after a short delay to avoid blocking initial render
    const timer = setTimeout(syncReactions, 1000);
    return () => clearTimeout(timer);
  }, [isMounted, blog.paramlink]);
  
  // Functions to get current reaction and counts
  const getCurrentReaction = useCallback(() => reaction, [reaction]);
  const getCurrentLikes = useCallback(() => likes, [likes]);
  const getCurrentDislikes = useCallback(() => dislikes, [dislikes]);
  const getCurrentViews = useCallback(() => views, [views]);

  // Memoized values - use blog props directly to ensure SSR/client consistency
  const topics = blog.topics || [];
  const words = blog.wordCount || 0;
  const readingTime = blog.readingTime || 1;
  const coverImageUrl = blog.coverImageUrl || null;
  const coverExistsInContent = blog.coverImageExistsInContent || false;
  const date = blog.formattedDate || "";

  // Comment functionality temporarily disabled
  // const postComment = async (payload) => {
  //   try {
  //     const res = await axios.patch(`/api/blog/published?action=comment&paramlink=${blog.paramlink}`, payload);
  //     if (res.data?.success) {
  //       setComments((prev) => [...prev, res.data.comment]);
  //       setNewComment({ userName: "", content: "" });
  //       setReplyFor(null);
  //     }
  //   } catch {}
  // };
  //
  // const submitNewComment = () => {
  //   if (!newComment.content?.trim()) return;
  //   postComment({ content: newComment.content, userName: userTag });
  // };
  //
  // const submitReply = (parentId, content) => {
  //   if (!content?.trim()) return;
  //   postComment({ content, parentId, userName: userTag });
  // };
  //
  // const thread = (() => {
  //   const byParent = {};
  //   comments.forEach(c => {
  //     const key = c.parentId ? String(c.parentId) : "root";
  //     if (!byParent[key]) byParent[key] = [];
  //     byParent[key].push(c);
  //   });
  //   return byParent;
  // })();
  //
  // const getLatestInThread = (rootId) => {
  //   const children = thread[String(rootId)] || [];
  //   if (!children.length) return rootId;
  //   return getLatestInThread(children[children.length - 1]._id);
  // };
  // const renderNode = (c, latestId, depth = 0) => {
  //   const id = String(c._id);
  //   return (
  //     <div key={id} className={`mb-3 ${depth > 0 ? "ml-3 border-l border-gray-200 pl-3" : ""}`}>
  //       <div className="text-sm text-gray-900">{c.content}</div>
  //       <div className="mt-2">
  //         {replyFor === id ? (
  //           <div className="space-y-2">
  //             <textarea
  //               placeholder="Write a reply..."
  //               className="w-full border rounded-md px-3 py-2 text-sm"
  //               onChange={(e) => setNewComment({ userName: "", content: e.target.value })}
  //             />
  //             <div className="flex gap-2">
  //               <button
  //                 className="px-3 py-1.5 bg-teal-600 text-white rounded-md text-sm"
  //                 onClick={() => submitReply(c._id, newComment.content)}
  //               >
  //                 Reply
  //               </button>
  //               <button
  //                 className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md text-sm"
  //                 onClick={() => setReplyFor(null)}
  //               >
  //                 Cancel
  //               </button>
  //             </div>
  //           </div>
  //         ) : (
  //           String(id) === String(latestId) && (
  //             <button
  //               className="text-xs text-teal-700 hover:text-teal-800"
  //               onClick={() => { setReplyFor(id); setNewComment({ userName: "", content: "" }); }}
  //             >
  //               Reply
  //             </button>
  //           )
  //         )}
  //       </div>
  //       {(thread[id] || []).map(child => renderNode(child, latestId, depth + 1))}
  //     </div>
  //   );
  // };
  
  const toggleLike = useCallback(async () => {
    if (!isMounted || !visitorId) return;
    
    try {
      const currentReaction = getCurrentReaction();
      let action;
      let newState;
      
      if (currentReaction === 'like') {
        action = 'removeLike';
        newState = null;
      } else {
        action = 'like';
        newState = 'like';
      }
      
      const res = await axios.patch(`/api/blog/published?action=${action}&paramlink=${blog.paramlink}`, { 
        visitorId: visitorId
      });
      
      if (res.data?.success) {
        setReaction(newState);
        if (action === 'like') {
          setLikes(prev => prev + 1);
          if (currentReaction === 'dislike') {
            setDislikes(prev => Math.max(0, prev - 1));
          }
        } else {
          setLikes(prev => Math.max(0, prev - 1));
        }
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  }, [isMounted, visitorId, blog.paramlink, getCurrentReaction]);
  
  const toggleDislike = useCallback(async () => {
    if (!isMounted || !visitorId) return;
    
    try {
      const currentReaction = getCurrentReaction();
      let action;
      let newState;
      
      if (currentReaction === 'dislike') {
        action = 'removeDislike';
        newState = null;
      } else {
        action = 'dislike';
        newState = 'dislike';
      }
      
      const res = await axios.patch(`/api/blog/published?action=${action}&paramlink=${blog.paramlink}`, { 
        visitorId: visitorId
      });
      
      if (res.data?.success) {
        setReaction(newState);
        if (action === 'dislike') {
          setDislikes(prev => prev + 1);
          if (currentReaction === 'like') {
            setLikes(prev => Math.max(0, prev - 1));
          }
        } else {
          setDislikes(prev => Math.max(0, prev - 1));
        }
      }
    } catch (err) {
      console.error('Error toggling dislike:', err);
    }
  }, [isMounted, visitorId, blog.paramlink, getCurrentReaction]);
  
  return (
    <Layout>
      <Head>
        <title key="title">{blog.metaTitle || `${blog.title} | RamaCare Polyclinic Blog`}</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt || blog.title} key="description" />
        <link rel="canonical" href={`https://ramacarepolyclinic.ae/blog/${blog.paramlink}/`} key="canonical" />
        <meta property="og:title" content={blog.title} key="og:title" />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt || blog.title} key="og:description" />
        <meta property="og:url" content={`https://ramacarepolyclinic.ae/blog/${blog.paramlink}/`} key="og:url" />
      </Head>
      <div className="force-light">
        <div className="bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{blog.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-600 flex-wrap">
              {/* <span>{blog.postedBy?.name || "Admin"}</span> */}
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readingTime} min read</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {getCurrentViews()} views
              </span>
            </div>
          </div>
          {/* Show featured image only if it doesn't exist in content */}
          {!coverExistsInContent && coverImageUrl ? (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <img
                src={coverImageUrl}
                alt={blog.title || ""}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-sm"
              />
            </div>
          ) : null}
        </div>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Use client-only component for HTML content to prevent hydration mismatch */}
          <div className="mb-8">
            <BlogContent html={blog.content} />
          </div>
          
          {/* Display topics/hashtags */}
          {topics && topics.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <Link 
                    key={topic}
                    href={`/blog?topic=${encodeURIComponent(topic)}`}
                    className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium hover:bg-teal-200 transition-colors">
                    #{topic}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-10 border-t pt-6">
            <div className="flex items-center gap-4">
              {/* Like button - always render with consistent structure */}
              <button
                onClick={isMounted ? toggleLike : undefined}
                disabled={!isMounted}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  getCurrentReaction() === 'like' 
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${!isMounted ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {getCurrentReaction() === 'like' 
                  ? `♥ Like (${getCurrentLikes()})` 
                  : `♡ Like (${getCurrentLikes()})`
                }
              </button>
              
              {/* Dislike button - always render with consistent structure */}
              <button
                onClick={isMounted ? toggleDislike : undefined}
                disabled={!isMounted}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  getCurrentReaction() === 'dislike' 
                    ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${!isMounted ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {getCurrentReaction() === 'dislike' 
                  ? `♦ Dislike (${getCurrentDislikes()})` 
                  : `♢ Dislike (${getCurrentDislikes()})`
                }
              </button>
              {/* Comment functionality temporarily disabled */}
              {/* <span className="text-sm text-gray-600">
                Comments ({comments.length})
              </span> */}
            </div>
            {/* Comment functionality temporarily disabled */}
            {/* <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <textarea
                  placeholder="Write a comment..."
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                />
                <button
                  className="px-4 py-2 bg-teal-600 text-white rounded-md text-sm"
                  onClick={submitNewComment}
                >
                  Post Comment
                </button>
              </div>
              <div className="mt-6">
                {(thread["root"] || []).map((root) => {
                  const latestId = getLatestInThread(root._id);
                  return renderNode(root, latestId, 0);
                })}
              </div>
            </div> */}
          </div>
        </article>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params || {};
  await dbConnect();
  const doc = await Blog.findOne({ paramlink: slug, status: "published" })
    .populate("postedBy", "name username")
    .lean();
  if (!doc) {
    return { props: { blog: null } };
  }
  
  // Process the content on server side to ensure consistency
  const processedDoc = JSON.parse(JSON.stringify(doc));
  
  // Ensure arrays are always arrays
  if (!Array.isArray(processedDoc.comments)) {
    processedDoc.comments = [];
  }
  if (!Array.isArray(processedDoc.likes)) {
    processedDoc.likes = [];
  }
  if (!Array.isArray(processedDoc.dislikes)) {
    processedDoc.dislikes = [];
  }
  
  // Process content on server side - this ensures SSR and client render the same HTML
  if (processedDoc.content && typeof processedDoc.content === 'string') {
    // Clean the content once on the server
    processedDoc.content = cleanBlogContent(processedDoc.content);
    
    // Pre-calculate all derived values on server
    const coverImageUrl = extractFirstImageSrc(processedDoc.content);
    processedDoc.coverImageExistsInContent = coverImageUrl && coverImageExistsInContent(processedDoc.content, coverImageUrl);
    processedDoc.coverImageUrl = coverImageUrl;
    processedDoc.topics = extractTopics(processedDoc.content);
    
    // Pre-format date consistently
    try {
      processedDoc.formattedDate = new Date(processedDoc.createdAt).toLocaleDateString('en-US', { 
        year: "numeric", 
        month: "short", 
        day: "numeric" 
      });
    } catch {
      processedDoc.formattedDate = "";
    }
    
    // Calculate word count and reading time
    const plainText = (processedDoc.content || "").replace(/<[^>]*>/g, " ");
    const wordCount = plainText.trim().split(/\s+/).filter(word => word.length > 0).length;
    processedDoc.wordCount = wordCount;
    processedDoc.readingTime = Math.max(1, Math.round(wordCount / 200));
  } else {
    // Set default values for missing content
    processedDoc.coverImageExistsInContent = false;
    processedDoc.coverImageUrl = null;
    processedDoc.topics = [];
    processedDoc.formattedDate = "";
    processedDoc.wordCount = 0;
    processedDoc.readingTime = 1;
  }
  
  // Ensure likesCount and dislikesCount are numbers
  processedDoc.likesCount = typeof processedDoc.likesCount === 'number' ? processedDoc.likesCount : processedDoc.likes.length;
  processedDoc.dislikesCount = typeof processedDoc.dislikesCount === 'number' ? processedDoc.dislikesCount : processedDoc.dislikes.length;
  
  return {
    props: {
      blog: processedDoc,
    },
  };
}
