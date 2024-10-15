import { useEffect } from 'react';

export const UseScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elementsToAnimate = document.querySelectorAll('.my_animation');

      elementsToAnimate.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight && !element.classList.contains('fadeIn')) {
          element.classList.add('fadeIn');  
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};


