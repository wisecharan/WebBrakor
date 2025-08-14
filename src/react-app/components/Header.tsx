import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add proper type for menuRef
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Plans & Pricing' },
    { to: '/reviews', label: 'Success Stories' },
    { to: '/waitlist', label: 'Early Access' },
    { to: '/contact', label: 'Get in Touch' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Type event properly
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center h-16">
        {/* Logo Left */}
        <div className="flex-shrink-0 text-left">
          <Link to="/" onClick={handleLinkClick}>
            <span className="text-xl font-bold text-gray-900">WebRakor</span>
          </Link>
        </div>

        {/* Desktop Nav Center */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navItems.map((item) => (
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

        {/* Desktop CTA Right */}
        <div className="hidden md:flex items-center ml-auto">
          <Link to="/contact" onClick={handleLinkClick}>
            <button className="bg-black text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
              Go Live
            </button>
          </Link>
        </div>

        {/* Hamburger Right (Mobile) */}
        <button
          className="md:hidden ml-auto flex flex-col justify-between w-5 h-5 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black rounded transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Minimal Menu Box */}
      <div
        className={`absolute top-16 right-4 z-40 bg-white shadow-md rounded-md transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
        ref={menuRef}
        style={{ minWidth: '200px', maxWidth: '220px' }}
      >
        <nav className="flex flex-col p-3 space-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact" onClick={handleLinkClick}>
            <button className="mt-2 w-full bg-black text-white py-1 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
              Go Live
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
