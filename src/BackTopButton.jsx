import { useState, useEffect } from 'react';

const BackTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;
      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

      setScrollPercent(totalScrollPercent);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <button
      data-back-top-btn
      className={scrollPercent > 5 ? 'back-top-btn show' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {scrollPercent.toFixed(0)}%
    </button>
</>
    
  );
};

export default BackTopButton;
