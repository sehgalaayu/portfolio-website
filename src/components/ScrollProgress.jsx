import React, { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          
          // Get the total scrollable height
          const totalHeight = document.documentElement.scrollHeight;
          const viewportHeight = window.innerHeight;
          const scrollableHeight = totalHeight - viewportHeight;
          
          // Calculate progress (0 to 1)
          let progress = 0;
          if (scrollableHeight > 0) {
            progress = Math.min(scrollTop / scrollableHeight, 1);
          }
          
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
  );
};
