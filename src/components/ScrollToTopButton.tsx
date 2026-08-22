import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-2xl bg-[#0B1F3A] border border-[#C9A227]/30 text-[#C9A227] shadow-lg shadow-[#0B1F3A]/20 backdrop-blur-sm transition-all duration-500 hover:bg-[#C9A227] hover:text-[#0B1F3A] hover:-translate-y-2 hover:shadow-xl hover:border-[#C9A227] cursor-pointer group ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
};

export default ScrollToTopButton;
