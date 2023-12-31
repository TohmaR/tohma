import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  useEffect(() => {
    // Si la propriété scrollRestoration est disponible
    
        // Désactiver la restauration du scroll
        window.history.scrollRestoration = 'manual';

        // S'assurer que la page est bien en haut
        window.scrollTo(0, 0);
  
        // Pour les navigateurs qui ne supportent pas scrollRestoration
        window.addEventListener('load', () => {
            window.scrollTo(0, 0);
        });
   
  }, []);

  return null;
}