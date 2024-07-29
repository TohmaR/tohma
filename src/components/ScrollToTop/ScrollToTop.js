import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom"; 
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Fonction pour réinitialiser le scroll
    const resetScroll = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    };

    // Ajouter un écouteur pour l'événement 'load'
    window.addEventListener('load', resetScroll);

    // Utiliser un délai pour s'assurer que le DOM est complètement rendu
   
      resetScroll();
 
    // Nettoyage des écouteurs et du délai
    return () => {
      window.removeEventListener('load', resetScroll);
     
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [location.pathname]);

  return null;
}