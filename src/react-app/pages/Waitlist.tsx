import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function Waitlist() {
  const benefits = [
    "Priority access to all premium features before general release",
    "Dedicated success manager and personalized onboarding",
    "Influence product roadmap with direct feedback",
    "Exclusive early adopter pricing and offers",
    "Direct collaboration with Webrakor’s engineering and AI experts"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero */}
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-gray-200 shadow-sm mb-6 sm:mb-8">
              <span className="text-[#c6f678] font-bold mr-2">●</span>
              Exclusive Early Access Program
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4 sm:mb-6 break-words">
              Get Early Access to Webrakor Enterprise AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Join top Indian enterprises in experiencing our next-gen AI automation platform before public release. Limited spots available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            
            {/* Benefits */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-5 text-center sm:text-left">
                Why Join the Waitlist?
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c6f678] mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-xs sm:text-sm leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Social Proof */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mt-8 sm:mt-10 border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex -space-x-2 mb-3 sm:mb-0 sm:mr-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img
                        key={i}
                        src={`https://xsgames.co/randomusers/avatar.php?g=male&ref=indian${i}`}
                        alt={`Member ${i}`}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">
                      500+ Indian enterprise leaders
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      already on the waitlist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                Secure Your Spot
              </h3>
              
              <form className="space-y-5 sm:space-y-6">
                {[
                  { label: "Full Name", type: "text", placeholder: "Rahul Sharma" },
                  { label: "Email Address", type: "email", placeholder: "rahul@company.com" },
                  { label: "Company", type: "text", placeholder: "Your Company" }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c6f678] focus:ring-2 focus:ring-[#c6f678]/20 transition-all text-sm sm:text-base"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c6f678] focus:ring-2 focus:ring-[#c6f678]/20 transition-all text-sm sm:text-base">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-[#c6f678] py-3 sm:py-4 rounded-full font-semibold hover:scale-[1.02] transition-transform text-sm sm:text-base"
                >
                  Join the Waitlist
                </button>
              </form>
              
              <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3 sm:mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
