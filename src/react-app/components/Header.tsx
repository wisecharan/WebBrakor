import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const navItems = [
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Plans & Pricing' },
    { to: '/reviews', label: 'Success Stories' },
    { to: '/waitlist', label: 'Waitlist' },
    { to: '/contact', label: 'Contact' },
  ];

  const fullNavItems = navItems;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 relative">
        <div className="flex-shrink-0">
          <Link to="/" onClick={handleLinkClick} className="text-xl font-bold text-gray-900">
            Webrakor
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {fullNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex ml-auto">
          <Link to="/contact" onClick={handleLinkClick}>
            <button className="bg-black text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
              Go Live
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden ml-auto w-10 h-8 p-1 flex items-center justify-center bg-black rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu with right-side animation */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'bg-black/50' : 'bg-transparent pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={handleLinkClick}>
              <h1 className="text-xl font-bold text-gray-900">Webrakor</h1>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleLinkClick}
                className={`block text-gray-800 hover:text-gray-900 font-medium transition-colors p-3 rounded-lg ${
                  location.pathname === item.to ? 'bg-gray-100' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}