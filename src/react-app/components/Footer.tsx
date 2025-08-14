import { Link } from 'react-router';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Waitlist', href: '/waitlist' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'LinkedIn', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Youtube', href: '#' },
      { name: 'Github', href: '#' },
    ]
  };

  return (
    <footer className="bg-black text-white pt-10 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto">

        {/* Top Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Company */}
          <div>
            <h3 className="text-[#c6f678] text-sm sm:text-base font-semibold tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#c6f678] transition-colors flex items-center">
                    <span className="mr-1 text-[#c6f678]">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#c6f678] text-sm sm:text-base font-semibold tracking-wider uppercase mb-4">Social</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#c6f678] transition-colors flex items-center">
                    <span className="mr-1 text-[#c6f678]">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Community */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">Executive Insights</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="executive@company.com"
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c6f678] text-xs sm:text-sm"
              />
              <button className="bg-[#c6f678] text-black px-4 py-2 rounded-full font-medium hover:bg-[#b5e46d] transition-colors text-xs sm:text-sm">
                Subscribe
              </button>
            </div>

            <div className="mt-5 flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`}
                    alt={`Community member ${i}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="text-white font-medium">Trusted by</p>
                <p className="text-white font-medium">500+ Enterprises</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4 sm:gap-6">

            {/* Logo */}
            <h2 className="text-4xl sm:text-5xl font-bold text-[#c6f678] tracking-tight mb-4 sm:mb-0">
              WebRakor.
            </h2>

            {/* Links & Copyright */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-end text-center sm:text-right">
              <a href="#privacy" className="hover:text-[#c6f678] transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#c6f678] transition-colors">Terms</a>
              <span className="whitespace-nowrap">
                © 2025 WebRakor. All rights reserved.
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
