import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Main Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-gray-900 mb-0 break-words">
            Behind the Code
          </h1>

          {/* About Hero Section */}
          <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-12 sm:py-16 text-center">
            {/* Profile Images */}
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile 1" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile 2" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
                <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Profile 3" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug max-w-4xl mx-auto break-words">
              We craft modern, high-performance websites that elevate brands, engage audiences, and drive growth.
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-sm sm:text-base text-gray-500 px-2 sm:px-0">
              Join a passionate community of AI-driven creators dedicated to pushing the boundaries of innovation.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Key Tenets</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving and evolving to offer the latest and most effective tools for businesses. We believe that innovation isn't just about what's new! it's about making sure our users get the best and most effective solutions to their challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Simplicity</h3>
                <p className="text-gray-600">
                  We eliminate the friction that comes with adopting new technologies. Our goal is to strip away unnecessary complexity so our users can focus on what really matters: growing their business and connecting with customers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Customer-Centricity</h3>
                <p className="text-gray-600">
                  Always putting our customers first and providing tools that help them succeed. We succeed when our customers succeed, and that's why we listen carefully to their needs. We prioritize building features and offering support that genuinely help.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">The Rakor's Adventure</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed px-2 sm:px-0">
              From our first brainstorm sessions as students to becoming a trusted name in digital innovation,
              our journey has been fueled by passion, persistence, and purpose. Here's how it all unfolded.
            </p>

            <div className="max-w-3xl mx-auto">
              {[
                { year: '2019', title: 'Where It All Began', text: 'As university students passionate about technology, we started experimenting with small web projects. Between late-night coding sessions and endless coffee runs, we discovered our shared vision for creating something bigger.' },
                { year: '2020', title: 'First Steps into the Market', text: 'We began taking freelance projects, refining our skills, and learning the ropes of client collaboration. These early challenges taught us the importance of user experience, scalability, and building trust with customers.' },
                { year: '2021', title: 'The Spark of an Idea', text: 'Every great innovation starts with a simple idea. In 2021, SaaSleek was born from the vision of creating a smarter, AI-powered CRM solution. We identified the need for a platform that could help businesses automate mundane tasks while delivering powerful insights.' },
                { year: '2022', title: 'Building the Foundation', text: 'We assembled a small but mighty team, built our first prototype, and started onboarding early adopters. This was the year we transformed our idea into a tangible product.' },
                { year: '2024', title: 'Where We Are Now', text: 'Today, SaaSleek powers businesses across industries with cutting-edge digital solutions. Our focus remains the same: delivering tools that make growth faster, smarter, and more human.' }
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6 sm:pl-8 pb-8 relative">
                  <div className="absolute w-4 h-4 bg-[#c3f376] rounded-full -left-2 top-0"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-5">Powered by people who give a damn</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed px-2 sm:px-0">
              No smoke and mirrors here — just a team of talented, dedicated pros making magic happen behind the scenes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {[
                { name: 'Zephyr Callahan', role: 'Owner, CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
                { name: 'Soren Whitlock', role: 'Director of Data Science', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
                { name: 'Thane Vesper', role: 'Lead UX/UI Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
                { name: 'Leander Frost', role: 'Marketing Strategist', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' }
              ].map((member, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 overflow-hidden rounded-full bg-gray-200">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover max-w-full h-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <a href="#" className="text-[#c3f376] hover:text-[#a8d85f] inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    Connect
                  </a>
                </div>
              ))}
            </div>

            {/* Join Our Team Button */}
            <div className="text-center">
              <button className="bg-[#c3f376] hover:bg-[#a8d85f] text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
