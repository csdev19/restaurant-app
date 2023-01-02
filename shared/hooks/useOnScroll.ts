import { useEffect, useState } from 'react';

const useOnScroll = (): number => {
  const [percentage, setPercentage] = useState(0);

  const listener = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    setPercentage(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return percentage;
};

export default useOnScroll;
