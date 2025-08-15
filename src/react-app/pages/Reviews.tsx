import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      title: "CEO, TechNova Solutions",
      content: "Webrakor helped streamline our workflow and boosted our revenue by 45% in just 3 months. Their AI tools are a game-changer!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      industry: "SaaS"
    },
    {
      name: "Ananya Singh",
      title: "CTO, Innovatech Labs",
      content: "The platform's predictive analytics allowed us to anticipate market trends efficiently. Truly indispensable for growing businesses.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      industry: "Healthcare Tech"
    },
    {
      name: "Vikram Patel",
      title: "Operations Head, ScaleUp India",
      content: "With Webrakor, our operational efficiency improved significantly. The AI-powered automation is seamless and easy to integrate.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      industry: "E-commerce"
    },
    {
      name: "Priya Nair",
      title: "Product Manager, SmartTech Pvt Ltd",
      content: "Webrakor's platform enabled our team to make data-driven decisions faster. The dashboards and insights are top-notch.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      industry: "FinTech"
    },
    {
      name: "Arjun Mehta",
      title: "Founder, NextGen Solutions",
      content: "Investing in Webrakor accelerated our digital transformation. The ROI was visible within the first quarter itself.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      industry: "EdTech"
    },
    {
      name: "Sanya Kapoor",
      title: "Head of Marketing, Visionary Tech",
      content: "From analytics to automation, Webrakor has completely transformed how we operate. Highly recommended for SMEs and startups.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      industry: "Marketing"
    }
  ];

  const featuredTestimonials = [
    {
      quote: "Webrakor has been a game-changer. The process is so simple and quick that I can use it anytime, anywhere, and it's immediately effective for our business needs.",
      name: "Sarah Wilson",
      title: "CEO of Hummingbird",
      rating: 5
    },
    {
      quote: "Within weeks of implementation, we saw measurable improvements in our operational metrics. The customer support is exceptional.",
      name: "Rahul Desai",
      title: "Director, OmniLogistics",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-36 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Trusted by over <span className='text-[#c6f678]'>1000+</span><br /> Indian businesses and counting
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Join businesses transforming their operations with<br /> Webrakor's AI-powered platform
            </p>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-sm">
                <div className="flex items-center space-x-1 mr-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c6f678] text-[#c6f678]" />
                  ))}
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  4.9/5 from 200+ verified reviews
                </span>
              </div>

              <div className="flex -space-x-2">
                {reviews.slice(0, 5).map((review, i) => (
                  <img
                    key={i}
                    src={review.image}
                    alt={review.name}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
                  +195
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Featured Testimonials */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 mb-10 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <Quote className="text-[#c6f678] w-7 h-7 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c6f678] text-[#c6f678]" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Testimonials */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Success Across Industries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Webrakor helps businesses of all types achieve their goals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-sm transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{review.title}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">
                        {review.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i <= review.rating ? 'fill-[#c6f678] text-[#c6f678]' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{review.content}"</p>

                  <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Joined {Math.floor(Math.random() * 12) + 1} months ago
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Modern CTA Section - Brand Colors */}
<section className="relative bg-gray-50 py-20 sm:py-28 overflow-hidden">
  {/* Decorative Diagonals */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#c6f678] rotate-12 rounded-2xl opacity-30"></div>
    <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#a3e635] -rotate-12 rounded-2xl opacity-30"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
    {/* Left Content */}
    <div className="lg:col-span-6 text-center lg:text-left z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
        Elevate Your Business Effortlessly
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8">
        Discover why thousands of Indian businesses trust Webrakor to grow smarter and faster.
      </p>
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
        <a
          href="#pricing"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all text-sm sm:text-base shadow-md"
        >
          See Pricing
        </a>
        <a
          href="#demo"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#c6f678] text-gray-900 font-semibold rounded-full hover:bg-[#a3e635] transition-all text-sm sm:text-base shadow-md"
        >
          Request Demo
        </a>
      </div>
    </div>

    {/* Right Content: Testimonial Card */}
    <div className="lg:col-span-6 relative z-10 mt-10 lg:mt-0">
      <div className="relative max-w-md mx-auto lg:ml-auto">
        {/* Layered background */}
        <div className="absolute top-3 left-3 w-full h-full bg-[#c6f678] rounded-2xl shadow-lg transform rotate-1 sm:top-4 sm:left-4"></div>
        {/* Foreground Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl border border-gray-200 relative z-20">
          <div className="flex items-center mb-2 sm:mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#c6f678] text-[#c6f678]" />
            ))}
          </div>
          <blockquote className="text-sm sm:text-base italic text-gray-700 mb-3 sm:mb-4 leading-relaxed">
            "Switching to Webrakor transformed our workflow and skyrocketed our growth."
          </blockquote>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Customer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-white"
            />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Rohan Mehta</p>
              <p className="text-gray-500 text-xs sm:text-sm">CEO, TechSolutions India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      </main>
      <Footer />
    </div>
  );
}
