// Single source of truth for the clinic's Google rating.
// The physio page reads the live value (lib/googleRating.js); this is the fallback for every page.
export const GOOGLE_PLACE_ID = 'ChIJsWfdCf4hXqURpNEiFGY1jDs'; // verify once in Google's Place ID Finder
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?cid=4290863257518002596';

export const GOOGLE_RATING_FALLBACK = {
  rating: 4.8,
  count: 217,
  checkedAt: '2026-10-11'
};