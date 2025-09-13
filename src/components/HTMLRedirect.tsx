import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HTMLRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if the current path ends with .html
    if (currentPath.endsWith('.html')) {
      // Remove the .html extension
      const newPath = currentPath.replace(/\.html$/, '');
      
      // Preserve query parameters and hash
      const search = location.search;
      const hash = location.hash;
      
      // Navigate to the clean URL
      navigate(newPath + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null; // This component doesn't render anything
};

export default HTMLRedirect;
