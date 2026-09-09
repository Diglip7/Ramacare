import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import ModernBlogEditor from '../../../components/Modernblogeditor';
import axios from 'axios';
import {
  PlusCircle, Search, Heart, MessageCircle, Bookmark, Edit3, Trash2,
  Eye, Clock, User, Hash, Sparkles, Flame, BarChart3, ExternalLink,
  X, Link as LinkIcon, RefreshCw, TrendingUp, ChevronLeft, ChevronRight,
  FileText, Calendar, Layers, Share2, MoreVertical, Copy, Star
} from 'lucide-react';

// Helper function to clean blog content by removing editor UI elements
const cleanBlogContent = (htmlContent) => {
  if (!htmlContent || typeof document === 'undefined') return htmlContent;
  
  // Create a temporary DOM element to parse and clean HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // Remove all remove buttons (buttons with data-remove-media attribute)
  const removeButtons = tempDiv.querySelectorAll('button[data-remove-media="true"]');
  removeButtons.forEach(btn => btn.remove());
  
  // Remove ALL buttons inside image and video containers
  const mediaContainers = tempDiv.querySelectorAll('.image-container, .video-container');
  mediaContainers.forEach(container => {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => btn.remove());
  });
  
  // Remove any remaining buttons with absolute positioning (catch-all)
  const allButtons = tempDiv.querySelectorAll('button');
  allButtons.forEach(btn => {
    const styleAttr = btn.getAttribute('style') || '';
    if (styleAttr.includes('position') && 
        (styleAttr.includes('absolute') || styleAttr.includes('position:absolute'))) {
      btn.remove();
    }
  });
  
  return tempDiv.innerHTML;
};

// Add CSS for animations
const ToastStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out forwards;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = ToastStyles;
  document.head.appendChild(style);
}

const AdminBlogPost = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('feed');
  const [showEditor, setShowEditor] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editDraftId, setEditDraftId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Use "adminToken" since we are in admin panel
  const tokenKey = "adminToken";
  
  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchPosts();
    fetchDrafts();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem(tokenKey);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const handleAuthError = (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      router.push("/admin/login");
      return true;
    }
    return false;
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/blog/published', getAuthHeaders());
      if (res.data.success) {
        setPosts(res.data.blogs);
      }
    } catch (error) {
      if (handleAuthError(error)) return;
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDrafts = async () => {
    try {
      const res = await axios.get('/api/blog/draft', getAuthHeaders());
      if (res.data.success) {
        setDrafts(res.data.drafts);
      }
    } catch (error) {
      if (handleAuthError(error)) return;
      console.error("Error fetching drafts:", error);
    }
  };

  const handleDelete = async (id, isDraft = false) => {
    const title = isDraft ? "Delete Draft" : "Delete Blog Post";
    const message = isDraft 
      ? "Are you sure you want to permanently delete this draft? This action cannot be undone and all content will be lost."
      : "Are you sure you want to permanently delete this blog post? This action cannot be undone and the post will be removed from your website.";
    
    const performDelete = async () => {
      try {
        const endpoint = isDraft 
          ? `/api/blog/draft?id=${id}` 
          : `/api/blog/published?id=${id}`;
          
        await axios.delete(endpoint, getAuthHeaders());
        fetchPosts();
        fetchDrafts();
        
        const successMessage = isDraft 
          ? "Draft deleted successfully!" 
          : "Blog post deleted successfully!";
          
        showToast(successMessage, "success");
      } catch (error) {
        console.error("Error deleting blog:", error);
        const errorMessage = isDraft 
          ? "Failed to delete draft" 
          : "Failed to delete blog post";
          
        showToast(errorMessage, "error");
      }
    };
    
    showConfirm(title, message, performDelete, 'danger');
  };

  const handleEdit = (id, isDraft = false) => {
    if (isDraft) {
      setEditDraftId(id);
      setEditBlogId(null);
    } else {
      setEditBlogId(id);
      setEditDraftId(null);
    }
    setShowEditor(true);
  };

  const handleCreateNew = () => {
    setEditBlogId(null);
    setEditDraftId(null);
    setShowEditor(true);
  };

  const handleSaveComplete = (message = "Blog post saved successfully!") => {
    setShowEditor(false);
    fetchPosts();
    fetchDrafts();
    const finalMsg = typeof message === 'string' && message.trim() 
      ? message 
      : "Blog post saved successfully!";
    showToast(finalMsg, "success");
  };

  const handleCopyLink = (paramlink) => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/blog/${paramlink}`;
    navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard!', 'success');
  };
  
  const [showFullPost, setShowFullPost] = useState(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  
  // Toast notification system
  const [toasts, setToasts] = useState([]);
  
  // Custom confirmation modal state
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState({
    title: '',
    message: '',
    onConfirm: null,
    type: 'danger' // 'danger' or 'warning'
  });
  
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const textMessage = typeof message === 'string' && message.trim()
      ? message
      : (typeof message === 'boolean' || !message ? 'Blog post saved successfully!' : String(message));
    const newToast = { id, message: textMessage, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };
  
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  // Custom confirmation functions
  const showConfirm = (title, message, onConfirm, type = 'danger') => {
    setConfirmConfig({ title, message, onConfirm, type });
    setShowConfirmModal(true);
  };
  
  const handleConfirmAction = () => {
    if (confirmConfig.onConfirm) {
      confirmConfig.onConfirm();
    }
    setShowConfirmModal(false);
  };
  
  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };
  
  const openFullPost = async (post) => {
    setIsPreviewLoading(true);
    try {
      // If we have a post ID, fetch the full post data to ensure we have the latest content
      if (post._id) {
        const endpoint = post.status === 'draft' 
          ? `/api/blog/draft?id=${post._id}`
          : `/api/blog/published?id=${post._id}`;
        
        const res = await axios.get(endpoint, getAuthHeaders());
        if (res.data.success) {
          const fullPostData = post.status === 'draft' ? res.data.draft : res.data.blog;
          const fullPost = {
            ...fullPostData,
            postedBy: fullPostData.postedBy || { name: 'Unknown' },
            viewsCount: fullPostData.viewsCount || 0,
            likesCount: fullPostData.likesCount || 0,
            content: fullPostData.content || '',
            status: post.status || 'published'
          };
          setShowFullPost(fullPost);
        } else {
          // Fallback to the provided post data
          const fullPost = {
            ...post,
            postedBy: post.postedBy || { name: 'Unknown' },
            viewsCount: post.viewsCount || 0,
            likesCount: post.likesCount || 0,
            content: post.content || '',
            status: post.status || 'published'
          };
          setShowFullPost(fullPost);
        }
      } else {
        // Fallback to the provided post data
        const fullPost = {
          ...post,
          postedBy: post.postedBy || { name: 'Unknown' },
          viewsCount: post.viewsCount || 0,
          likesCount: post.likesCount || 0,
          content: post.content || '',
          status: post.status || 'published'
        };
        setShowFullPost(fullPost);
      }
    } catch (error) {
      console.error("Error loading full post:", error);
      // Fallback to the provided post data
      const fullPost = {
        ...post,
        postedBy: post.postedBy || { name: 'Unknown' },
        viewsCount: post.viewsCount || 0,
        likesCount: post.likesCount || 0,
        content: post.content || '',
        status: post.status || 'published'
      };
      setShowFullPost(fullPost);
    } finally {
      setIsPreviewLoading(false);
    }
  };
  
  const closeFullPost = () => {
    setShowFullPost(null);
  };

  // Filter posts based on search query
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredDrafts = drafts.filter(draft => 
    draft.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const extractFirstImageSrc = (html) => {
    if (!html || typeof html !== 'string') return null;
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : null;
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text) return '';
    // First decode HTML entities, then strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    return decodedText.length > maxLength 
      ? decodedText.substring(0, maxLength) + '...' 
      : decodedText;
  };

  // Generate random engagement stats for demo purposes
  const generateEngagementStats = (postId) => {
    const seed = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return {
      views: Math.floor((seed % 5000) + 100),
      likes: Math.floor((seed % 500) + 10),
      comments: Math.floor((seed % 100) + 2),
    };
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-teal-50/50 via-emerald-50/30 to-green-50/20">
        {/* Toast Notifications */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-fade-in-up ${
                toast.type === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border border-green-600' 
                  : 'bg-gradient-to-r from-red-500 to-rose-600 text-white border border-red-600'
              }`}
            >
              <div className={`flex-shrink-0 w-2 h-2 rounded-full ${
                toast.type === 'success' ? 'bg-white' : 'bg-white'
              }`}></div>
              <span className="font-medium text-sm">{toast.message}</span>
              <button 
                onClick={() => removeToast(toast.id)}
                className="ml-auto text-white hover:text-gray-200 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 ${
                confirmConfig.type === 'danger' 
                  ? 'bg-gradient-to-r from-red-500 to-rose-600' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-500'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    confirmConfig.type === 'danger' 
                      ? 'bg-white/20' 
                      : 'bg-white/20'
                  }`}>
                    <Trash2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{confirmConfig.title}</h3>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{confirmConfig.message}</p>
                
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={closeConfirmModal}
                    className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmAction}
                    className={`flex-1 px-4 py-3 font-semibold text-white rounded-lg transition-colors ${
                      confirmConfig.type === 'danger' 
                        ? 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                    }`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showEditor ? (
          <ModernBlogEditor
            tokenKey={tokenKey}
            onClose={() => setShowEditor(false)}
            editBlogId={editBlogId}
            editDraftId={editDraftId}
            onSave={handleSaveComplete}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 sm:mb-6">
                <div className="w-full lg:w-auto">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200/50">
                      <Layers className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent truncate">
                        Blog Management
                      </h1>
                      <p className="text-gray-600 text-xs sm:text-sm mt-0.5 truncate">Create, edit, and publish your blog content</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCreateNew}
                  className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-0.5 w-full lg:w-auto text-sm sm:text-base"
                >
                  <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-300 flex-shrink-0" />
                  <span className="font-semibold">Create New Post</span>
                </button>
              </div>

              {/* Stats Cards - Responsive Grid */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {/* Published Posts Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-teal-100 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 group overflow-hidden">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">Published Posts</p>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 mt-0.5 sm:mt-1">{posts.length}</p>
                      <p className="text-xs text-teal-500 mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                        <TrendingUp size={10} className="sm:w-3 sm:h-3 flex-shrink-0" />
                        <span className="truncate">Live content</span>
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <TrendingUp className="text-teal-600" size={16} />
                    </div>
                  </div>
                </div>

                {/* Drafts Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 group overflow-hidden">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">Drafts</p>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-600 mt-0.5 sm:mt-1">{drafts.length}</p>
                      <p className="text-xs text-amber-500 mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                        <Edit3 size={10} className="sm:w-3 sm:h-3 flex-shrink-0" />
                        <span className="truncate">In progress</span>
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Edit3 className="text-amber-600" size={16} />
                    </div>
                  </div>
                </div>

                {/* Total Views Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group overflow-hidden">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">Total Views</p>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mt-0.5 sm:mt-1 truncate">
                        {posts.reduce((acc, post) => acc + (post.viewsCount || 0), 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-blue-500 mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                        <Eye size={10} className="sm:w-3 sm:h-3 flex-shrink-0" />
                        <span className="truncate">All time</span>
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Eye className="text-blue-600" size={16} />
                    </div>
                  </div>
                </div>

                {/* Total Likes Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-rose-100 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all duration-300 group overflow-hidden">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">Total Likes</p>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-600 mt-0.5 sm:mt-1 truncate">
                        {posts.reduce((acc, post) => acc + (post.likesCount || 0), 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-rose-500 mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                        <Heart size={10} className="sm:w-3 sm:h-3 flex-shrink-0" />
                        <span className="truncate">Engagement</span>
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Heart className="text-rose-600" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-gray-200 bg-gradient-to-r from-teal-50/50 to-emerald-50/30">
                <div className="flex overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('feed')}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      activeTab === 'feed'
                        ? 'text-teal-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <TrendingUp size={16} className="flex-shrink-0" />
                    <span>Published</span>
                    <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'feed' 
                        ? 'bg-teal-100 text-teal-700' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {posts.length}
                    </span>
                    {activeTab === 'feed' && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-t"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('drafts')}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      activeTab === 'drafts'
                        ? 'text-teal-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Edit3 size={16} className="flex-shrink-0" />
                    <span>Drafts</span>
                    <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'drafts' 
                        ? 'bg-teal-100 text-teal-700' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {drafts.length}
                    </span>
                    {activeTab === 'drafts' && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-t"></div>
                    )}
                  </button>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-0 border-t sm:border-t-0 border-gray-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 sm:p-2 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-teal-100 text-teal-600'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                    title="Grid View"
                  >
                    <Layers size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 sm:p-2 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-teal-100 text-teal-600'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                    title="List View"
                  >
                    <BarChart3 size={16} />
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-50/50 to-emerald-50/30 border-b border-gray-200">
                <div className="relative w-full">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-teal-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search your posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 shadow-sm"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-6 bg-white">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-12 sm:py-20">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-teal-200"></div>
                      <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-teal-600 border-t-transparent absolute top-0 left-0"></div>
                    </div>
                    <p className="text-gray-600 mt-4 font-medium text-sm sm:text-base">Loading your content...</p>
                  </div>
                ) : activeTab === 'feed' ? (
                  <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-3 sm:space-y-4"}>
                    {filteredPosts.map((post) => {
                      const imageSrc = extractFirstImageSrc(post.content || '');
                      const stats = generateEngagementStats(post._id);
                      if (viewMode === 'list') {
                        return (
                          <div 
                            key={post._id} 
                            className="group bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4"
                          >
                            {/* Image */}
                            <div className="flex-shrink-0 w-full sm:w-24 lg:w-32 h-40 sm:h-24 lg:h-32 overflow-hidden rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50">
                              {imageSrc ? (
                                <img
                                  src={imageSrc}
                                  alt={post.title || 'Post image'}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <FileText className="text-teal-300" size={32} />
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 flex flex-col">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                                    {post.title}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                                    {truncateText(post.content)}
                                  </p>
                                </div>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 flex-shrink-0 self-start">
                                  Published
                                </span>
                              </div>

                              {/* Meta & Stats */}
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 sm:mt-3 gap-2">
                                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar size={12} className="text-gray-400 flex-shrink-0" />
                                    <span className="truncate">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                  </span>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs">
                                  <span className="flex items-center gap-1 text-blue-600">
                                    <Eye size={12} className="flex-shrink-0" />
                                    <span>{(post.viewsCount || 0).toLocaleString()}</span>
                                  </span>
                                  <span className="flex items-center gap-1 text-rose-600">
                                    <Heart size={12} className="flex-shrink-0" />
                                    <span>{post.likesCount || 0}</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex sm:flex-col gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                              <button 
                                onClick={() => handleEdit(post._id)}
                                className="p-1.5 sm:p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                                title="Edit"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button 
                                onClick={() => handleCopyLink(post.paramlink)}
                                className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                title="Copy Link">
                                <Copy size={14} />
                              </button>
                              <button 
                                onClick={() => handleDelete(post._id)}
                                className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                title="Delete">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div 
                          key={post._id} 
                          className="group bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
                        >
                          {/* Image Container */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100">
                            {imageSrc ? (
                              <img
                                src={imageSrc}
                                alt={post.title || 'Post image'}
                                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-40 sm:h-48 flex items-center justify-center">
                                <FileText className="text-teal-300" size={40} />
                              </div>
                            )}
                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-teal-600 text-white shadow-lg backdrop-blur-sm">
                                <Sparkles size={10} className="mr-1 flex-shrink-0" />
                                Published
                              </span>
                            </div>
                            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-2">
                              <button 
                                onClick={() => handleCopyLink(post.paramlink)}
                                className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-teal-600 rounded-lg shadow-lg hover:scale-110 transition-all"
                                title="Copy Link"
                              >
                                <Copy size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-1">
                              {truncateText(post.content)}
                            </p>

                            <div className="flex flex-wrap items-center text-xs gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-gray-100">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} className="text-gray-400 flex-shrink-0" />
                                <span className="truncate">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                              </span>
                            </div>
                          </div>

                          {/* Engagement Stats Bar */}
                          <div className="px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-gradient-to-r from-gray-50 to-slate-50 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-2">
                              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                                <span className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer" title="Views">
                                  <Eye size={14} className="flex-shrink-0" />
                                  <span className="font-semibold">{(post.viewsCount || 0).toLocaleString()}</span>
                                </span>
                                <span className="flex items-center gap-1 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer" title="Likes">
                                  <Heart size={14} className="flex-shrink-0" />
                                  <span className="font-semibold">{post.likesCount || 0}</span>
                                </span>
                              </div>
                              <div className="flex gap-1.5 sm:gap-2">
                                <button 
                                  onClick={() => handleEdit(post._id)}
                                  className="p-1 sm:p-1.5 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                                  title="Edit"
                                >
                                  <Edit3 size={14} />
                                </button>
                                <button 
                                  onClick={() => openFullPost(post)}
                                  className="p-1 sm:p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                  title="View Full Post"
                                >
                                  <ExternalLink size={14} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(post._id)}
                                  className="p-1 sm:p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Footer Actions - View Full Post */}
                          <div className="px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-teal-50 border-t border-teal-100">
                            <button 
                              onClick={() => openFullPost(post)}
                              className="w-full text-teal-700 hover:text-teal-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 group/btn"
                            >
                              <span>View Full Post</span>
                              <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {filteredPosts.length === 0 && (
                      <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-20">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
                          <FileText className="text-teal-400" size={28} />
                        </div>
                        <p className="text-gray-600 font-medium text-base sm:text-lg">No published posts found</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Start by creating your first post!</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-3 sm:space-y-4"}>
                    {filteredDrafts.map((draft) => {
                      const imageSrc = extractFirstImageSrc(draft.content || '');
                      
                      if (viewMode === 'list') {
                        return (
                          <div 
                            key={draft._id} 
                            className="group bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4"
                          >
                            {/* Image */}
                            <div className="flex-shrink-0 w-full sm:w-24 lg:w-32 h-40 sm:h-24 lg:h-32 overflow-hidden rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50">
                              {imageSrc ? (
                                <img
                                  src={imageSrc}
                                  alt={draft.title || 'Draft image'}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Edit3 className="text-amber-300" size={32} />
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 flex flex-col">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                                    {draft.title || 'Untitled Draft'}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                                    {truncateText(draft.content)}
                                  </p>
                                </div>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 flex-shrink-0 self-start">
                                  Draft
                                </span>
                              </div>

                              {/* Meta */}
                              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} className="text-gray-400 flex-shrink-0" />
                                  <span className="truncate">{new Date(draft.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                </span>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex sm:flex-col gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                              <button 
                                onClick={() => handleEdit(draft._id, true)}
                                className="p-1.5 sm:p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
                                title="Edit"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button 
                                onClick={() => handleDelete(draft._id, true)}
                                className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div 
                          key={draft._id} 
                          className="group bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
                        >
                          {/* Image Container */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100">
                            {imageSrc ? (
                              <img
                                src={imageSrc}
                                alt={draft.title || 'Draft image'}
                                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-40 sm:h-48 flex items-center justify-center">
                                <Edit3 className="text-amber-300" size={40} />
                              </div>
                            )}
                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-lg backdrop-blur-sm">
                                <Edit3 size={10} className="mr-1 flex-shrink-0" />
                                Draft
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                              {draft.title || 'Untitled Draft'}
                            </h3>
                            
                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-1">
                              {truncateText(draft.content)}
                            </p>

                            <div className="flex flex-wrap items-center text-xs gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-gray-100">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} className="text-gray-400 flex-shrink-0" />
                                <span className="truncate">{new Date(draft.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                              </span>
                            </div>
                          </div>
      
                          {/* Footer Actions */}
                          <div className="px-3 sm:px-4 lg:px-5 py-3 sm:py-4 bg-amber-50 border-t border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between items-stretch gap-2">
                            <button 
                              onClick={() => handleEdit(draft._id, true)}
                              className="text-amber-700 hover:text-amber-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 group/link" >
                              <span>Continue Editing</span>
                              <Edit3 size={12} className="group-hover/link:rotate-12 transition-transform flex-shrink-0" />
                            </button>
                            <button 
                              onClick={() => handleDelete(draft._id, true)}
                              className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all flex-shrink-0 self-end sm:self-auto"
                              title="Delete" >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {filteredDrafts.length === 0 && (
                      <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-20">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mb-4">
                          <Edit3 className="text-amber-500" size={28} />
                        </div>
                        <p className="text-gray-600 font-medium text-base sm:text-lg">No drafts found</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">All your work in progress will appear here</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full Post Preview Modal */}
      {(showFullPost || isPreviewLoading) && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-4" onClick={closeFullPost}>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-emerald-50 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0 pr-8 sm:pr-0">
                {isPreviewLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-teal-600 border-t-transparent"></div>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Loading...</span>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">{showFullPost?.title || 'Untitled'}</h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
                      
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="truncate">
                          {showFullPost?.createdAt 
                            ? new Date(showFullPost.createdAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })
                            : 'Unknown date'
                          }
                        </span>
                      </span>
                    </div>
                  </>
                )}
              </div>
              <button 
                onClick={closeFullPost}
                className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>
  
            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)] sm:max-h-[calc(90vh-180px)]">
              {isPreviewLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-200"></div>
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent absolute top-0 left-0"></div>
                  </div>
                  <p className="text-gray-600 mt-4 font-medium">Loading post content...</p>
                </div>
              ) : (
                <div className="blog-content text-gray-900 leading-relaxed prose prose-sm sm:prose-lg max-w-none">
                  {showFullPost?.content ? (
                    <div dangerouslySetInnerHTML={{ __html: cleanBlogContent(showFullPost.content) }} />
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="mx-auto text-gray-300" size={48} />
                      <p className="text-gray-500 mt-2">No content available</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {!isPreviewLoading && showFullPost && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 sm:p-6 border-t border-gray-200 bg-gray-50 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Eye size={14} className="flex-shrink-0" />
                    <span>{showFullPost.viewsCount || 0} views</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="flex-shrink-0" />
                    <span>{showFullPost.likesCount || 0} likes</span>
                  </span>
                </div>
                <button 
                  onClick={() => handleCopyLink(showFullPost.paramlink)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Copy size={14} className="flex-shrink-0" />
                  <span>Copy Link</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminBlogPost;