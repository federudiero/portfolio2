import React, { useState, useEffect } from 'react';

const withScrollEffect = (WrappedComponent) => {
  const WithScrollEffect = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return <WrappedComponent isVisible={isVisible} {...props} />;
  };

  return WithScrollEffect;
};

export default withScrollEffect;