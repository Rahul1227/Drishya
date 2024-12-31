export const NETFLIX_BG='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg'

export const NETFLIX_TEXT='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const NETFLIX_USER_ICON='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};


export const TMDB_CDN='https://image.tmdb.org/t/p/w500/'


export const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const HINDI_MOVIES_2024 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2024&with_original_language=hi`;

export const HINDI_MOVIES_2023 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`;

export const HINDI_MOVIES_2022 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi`;

