import { GOOGLE_PLACE_ID, GOOGLE_RATING_FALLBACK } from '../src/data/clinicStats';

// Server-side only. Called from getStaticProps, never in the browser.
export async function getGoogleRating() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return GOOGLE_RATING_FALLBACK;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount'
      }
    });
    if (!res.ok) return GOOGLE_RATING_FALLBACK;

    const data = await res.json();
    if (typeof data.rating !== 'number') return GOOGLE_RATING_FALLBACK;

    return {
      rating: data.rating,
      count: data.userRatingCount ?? GOOGLE_RATING_FALLBACK.count,
      checkedAt: new Date().toISOString().slice(0, 10)
    };
  } catch {
    return GOOGLE_RATING_FALLBACK;
  }
}