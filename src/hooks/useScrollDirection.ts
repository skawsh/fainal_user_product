import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when:
      // 1. Scrolling up
      // 2. At the top of the page (within 10px)
      // 3. Just started scrolling (within first 50px)
      if (currentScrollY < lastScrollY || currentScrollY < 10 || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isVisible;
}