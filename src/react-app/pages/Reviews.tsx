import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      title: "CEO, TechNova Solutions",
      content: "Webrakor helped streamline our workflow and boosted our revenue by 45% in just 3 months. Their AI tools are a game-changer!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Ananya Singh",
      title: "CTO, Innovatech Labs",
      content: "The platform's predictive analytics allowed us to anticipate market trends efficiently. Truly indispensable for growing businesses.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Vikram Patel",
      title: "Operations Head, ScaleUp India",
      content: "With Webrakor, our operational efficiency improved significantly. The AI-powered automation is seamless and easy to integrate.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      name: "Priya Nair",
      title: "Product Manager, SmartTech Pvt Ltd",
      content: "Webrakor's platform enabled our team to make data-driven decisions faster. The dashboards and insights are top-notch.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Arjun Mehta",
      title: "Founder, NextGen Solutions",
      content: "Investing in Webrakor accelerated our digital transformation. The ROI was visible within the first quarter itself.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      name: "Sanya Kapoor",
      title: "Head of Marketing, Visionary Tech",
      content: "From analytics to automation, Webrakor has completely transformed how we operate. Highly recommended for SMEs and startups.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page header */}
        <div className="pt-24 sm:pt-32 pb-0 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 break-words">
              Reviews
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed px-2 sm:px-0">
              See what our clients across India are saying about Webrakor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base sm:text-xl font-medium text-center sm:text-left">
                4.9/5 from 200+ Indian clients
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <section className="bg-gray-50 pt-4 pb-12 sm:pt-6 sm:pb-20 lg:py-0">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover max-w-full h-auto"
                    />
                    <div>
                      <h3 className="font-bold text-black text-base sm:text-lg">{review.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 tracking-wider">{review.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">"{review.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-0 sm:mt-12 bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 rounded-3xl text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 break-words">
              Join 1,000+ Indian Businesses Growing with Webrakor
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 px-2 sm:px-0">
              Accelerate your growth with smarter workflows, AI insights, and automation tailored for Indian SMEs and startups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-center"
              >
                Explore Pricing Plans
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors text-center"
              >
                Talk to Our Experts
              </a>
            </div>
            <p className="text-gray-500 mt-6 text-xs sm:text-sm">
              Trusted by startups, SMEs, and enterprises across India.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
