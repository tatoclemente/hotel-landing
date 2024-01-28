import { useEffect, useState } from "react";


export const useScrollColor = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');


  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 347;

    if (scrollY > threshold) {
      setNavbarBackground('#0e0d0d');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento del scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return { navbarBackground }
}
