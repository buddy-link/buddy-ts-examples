import { useState, useEffect } from 'react';

type MediaQuery = '(min-width: 640px)' | '(min-width: 768px)' | '(min-width: 1024px)' | '(min-width: 1280px)';

export const useMediaQuery = (query: MediaQuery) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};
