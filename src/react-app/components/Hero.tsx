import { Star } from 'lucide-react';
import { Settings, Target, Lightbulb, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Announcement Banner */}
        <div className="flex justify-center mb-4 sm:mb-6 mt-6">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border">
            <span className="text-[#c6f678] font-semibold mr-2">●</span>
            Trusted by 500+ businesses worldwide
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-snug mb-4 sm:mb-6">
          A High-Performance Website.<br />
          Built for Your Success.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
          Launch a stunning website faster<br />
          than you ever imagined.
        </p>

        {/* CTA Button */}
        <button className="bg-black text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 shadow-md transition-colors mb-6">
          Get Started for free
        </button>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-500 mb-6 sm:mb-8">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-[#c6f678] text-[#c6f678]" />
            ))}
            <div className="relative w-4 h-4">
              <Star className="w-4 h-4 text-[#c6f678] absolute" />
              <Star
                className="w-4 h-4 fill-[#c6f678] text-[#c6f678] absolute"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
            </div>
          </div>
          <span className="text-xs sm:text-sm">Over 500+ Five Star Reviews</span>
        </div>

        {/* YouTube Video Embed */}
        <div className="w-full max-w-xs sm:max-w-5xl mx-auto aspect-video sm:aspect-video rounded-lg overflow-hidden shadow-2xl shadow-gray-900/50 mb-12 sm:mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CNsvts6pVzo?si=VQ9_NVYDTt3kuubC"
            title="No-Code Website Building"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Performance Logos Section */}
        <div className="mt-8 sm:mt-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            When quality matters, they <br />choose <span className="text-[#a3e635]">Webrakor.</span>
          </h2>


          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            <span className="flex-shrink text-center text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Print<span className="text-[#a3e635]">Smart</span>
            </span>
            <span className="flex-shrink text-center text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Ori<span className="underline decoration-[#a3e635] underline-offset-4">gin</span>
            </span>
            <span className="flex-shrink text-center text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Au<span className="text-[#a3e635] font-regular">nine</span>
            </span>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-10 sm:py-12 relative">
          <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="bg-black rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              {/* Background grid effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              {/* Tag */}
              <div className="relative text-center mb-4">
                <span className="bg-[#a3e635] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full uppercase">
                  Innovation in Action
                </span>
              </div>

              {/* Heading */}
              <h2 className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Redefining Web Development with AI.
              </h2>

              {/* Subtitle */}
              <p className="relative text-center text-sm sm:text-base text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
                Our AI-powered platform automates and optimizes every step of the web creation process, from design to deployment, ensuring a superior result every time.
              </p>

              {/* Cards */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Benefits content */}
                {[
                  {
                    icon: Settings,
                    title: "Effortless Customization",
                    text: "Your website is built exactly to your specifications with our AI's intuitive and flexible design capabilities."
                  },
                  {
                    icon: Lightbulb,
                    title: "AI-Driven Design",
                    text: "Our AI generates a stunning, modern design in minutes, reflecting your brand’s unique identity and style."
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance & SEO",
                    text: "Websites are built with speed and search engine optimization in mind from the start, giving you a competitive edge."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Enterprise-Grade Security",
                    text: "We prioritize your data with advanced security protocols and robust, reliable infrastructure."
                  },
                  {
                    icon: Users,
                    title: "Scalable Solutions",
                    text: "Whether you're a startup or a large enterprise, our platform scales with your business needs."
                  },
                  {
                    icon: Target,
                    title: "Ongoing Support",
                    text: "Our team is here to provide dedicated support and maintenance to keep your site running smoothly."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl p-4 sm:p-5 text-center border border-white/10 relative z-10"
                  >
                    <div className="mb-2 sm:mb-3 flex justify-center">
                      <item.icon className="w-6 h-6 text-[#a3e635]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-[2px] sm:w-16 bg-gray-300 rounded-full"></div>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#a3e635] uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
              Build, Brand, and Grow,<br /> All with AI.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Webrakor provides a comprehensive suite of AI-driven solutions to create, manage, and scale your online presence, freeing you to focus on your business goals.
            </p>

            {/* Feature Card */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              <div className="bg-gray-50 rounded-3xl p-4 sm:p-6 text-left shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Unified AI-Powered Platform</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  From intuitive design to automated content generation and strategic SEO, every tool you need is integrated into one seamless workflow.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["AI-Driven Design", "No-Code Development", "Content & SEO", "Ongoing Maintenance"].map((tag, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-white border rounded-full text-xs sm:text-sm font-medium text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                  alt="Webrakor Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}