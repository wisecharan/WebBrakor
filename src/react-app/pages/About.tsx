import { Linkedin, Mail } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import React, { useEffect, useRef, ReactNode } from 'react';

export default function About() {
  // Animation utility
  const animateOnScroll = (element: HTMLElement | null, delay: number = 0): void => {
    if (element) {
      element.style.transition = `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  };

  interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
  }

  const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateOnScroll(entry.target as HTMLElement, delay);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [delay]);

    return (
      <div
        ref={ref}
        style={{
          opacity: 0,
          transform: 'translateY(30px)',
          willChange: 'opacity, transform'
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Page Title */}
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-gray-900 mb-0 break-words">
              Behind the Code
            </h1>
          </AnimatedSection>

          {/* About Hero Section */}
          <AnimatedSection delay={100}>
            <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center">
              {/* Profile Images */}
              <AnimatedSection delay={200}>
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile 1" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile 2" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
                    <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Profile 3" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover max-w-full h-auto" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug max-w-4xl mx-auto break-words">
                  We craft modern, high-performance websites that elevate brands, engage audiences, and drive growth.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <p className="mt-4 text-sm sm:text-base text-gray-500 px-2 sm:px-0">
                  Join a passionate community of AI-driven creators dedicated to pushing the boundaries of innovation.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Values Section */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <AnimatedSection delay={300}>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Our Guiding Principles</h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
                {[
                  {
                    title: "AI-Powered Innovation",
                    content: "We continuously push the boundaries of what AI can achieve in web creation. Our platform is a testament to our commitment to innovation, delivering smarter, more effective solutions that keep you ahead of the curve."
                  },
                  {
                    title: "Effortless Experience",
                    content: "Building a professional website shouldn't be complicated. We eliminate the complexity and friction of traditional development, providing an intuitive platform that allows you to launch your site in days, not months."
                  },
                  {
                    title: "Your Success, Our Focus",
                    content: "Your business goals are our mission. By providing the tools, insights, and dedicated support you need to succeed, we ensure that our platform is a powerful engine for your growth. We succeed when our clients succeed."
                  }
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={400 + (index * 100)}>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline Section */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <AnimatedSection delay={400}>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">The WebRakor Adventure</h2>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
                  From a small team of students to a leading innovator in AI web development, our journey has been fueled by a commitment to quality, speed, and client success.
                </p>
              </AnimatedSection>

              <div className="max-w-3xl mx-auto">
                {[
                  { year: '2021', title: 'The Vision is Born', text: 'Fueled by our frustration with slow, expensive web development, we started sketching out a new kind of platform. The vision was simple: a website builder powered by AI that could deliver high-quality results in a fraction of the time.' },
                  { year: '2022', title: 'First AI-Powered Prototype', text: 'After months of development, we built our first functional AI prototype. The initial tests proved our concept was viable, and we began refining our AI models to generate professional, modern designs automatically.' },
                  { year: '2023', title: 'Founding WebRakor', text: 'With a clear product vision and a growing team of engineers and designers, we officially founded WebRakor. This marked the beginning of our mission to make web creation accessible and efficient for everyone.' },
                  { year: '2024', title: 'Launch & Early Success', text: 'We launched our platform to a select group of early adopters. Their feedback was instrumental in our success, helping us fine-tune the user experience and prove that AI could be a game-changer for businesses.' },
                  { year: '2025', title: 'The WebRakor Standard', text: 'Today, WebRakor is a trusted partner for businesses worldwide. Our AI-powered platform continues to evolve, setting a new standard for website development that is fast, beautiful, and intelligently built for growth.' }
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={600 + (index * 100)}>
                    <div className="border-l-2 border-gray-200 pl-6 sm:pl-8 pb-8 relative">
                      <div className="absolute w-4 h-4 bg-[#c3f376] rounded-full -left-2 top-0"></div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Team Section */}
          <AnimatedSection delay={400}>
            <div className="mb-16">
              <div className="text-center mb-8 relative">
                <AnimatedSection delay={700}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Let's Meet Our Team</h2>
                </AnimatedSection>
                <AnimatedSection delay={800}>
                  <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                    We are a team of creators, innovators, and problem-solvers united by a passion for building exceptional digital experiences.
                  </p>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center mt-10">
                {[
                  {
                    name: 'Sai Charan Puduthala',
                    role: 'Founder & CEO',
                    description: 'Built WebRakor to deliver top-notch websites for businesses.',
                    img: 'https://media.licdn.com/dms/image/v2/D4D03AQF702Z9DrxliQ/profile-displayphoto-shrink_400_400/B4DZaMjmAgHQAg-/0/1746114869141?e=1758153600&v=beta&t=QtUJnB_7u8RauVTqFBmD2DkYsm9a-9mc_KJG41sQZaY',
                    social: { email: 'mailto:charans.workspace@gmail.com', linkedin: 'https://www.linkedin.com/in/wisecharan/' }
                  },
                  {
                    name: 'Omkar Sai Kshitij',
                    role: 'Co-Founder',
                    description: 'Co-creating WebRakor’s magic, one site at a time',
                    img: 'https://media.licdn.com/dms/image/v2/D5603AQGcOH9j6dV82Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714571541794?e=1758153600&v=beta&t=y1r6GkZ_ARje1VaVWr2f8SCoeToDudC91kF5s4i5Eks',
                    social: { email: 'mailto:', linkedin: 'https://www.linkedin.com/in/kshitijomkar/' }
                  },
                  {
                    name: 'Rama Manikanth',
                    role: 'Chief Data Analyst',
                    description: 'Creating impactful web solutions and empowering tech communities.',
                    img: 'https://media.licdn.com/dms/image/v2/D5603AQG0t2EJOna3Sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728107387117?e=1758153600&v=beta&t=Gn3pPbT38DjtMVG6ZjevNVFQ7nxMSWhsfSWwBaly4Dg',
                    social: { email: 'mailto:', linkedin: 'https://www.linkedin.com/in/rmkp888/' }
                  },
                  {
                    name: 'Rohith Kandula',
                    role: 'Chief Financial Officer.',
                    description: 'Co-Founder and CFO driving strategy, finance, and growth.',
                    img: 'https://media.licdn.com/dms/image/v2/D5603AQFgsD-HFjjSRw/profile-displayphoto-shrink_400_400/B56Zb4s1p_HwAo-/0/1747929227438?e=1758153600&v=beta&t=7U6HSJPuwYDA64r2oahAhdZHMF5eyicJ3WDhZ-BezU0',
                    social: { email: 'mailto:', linkedin: 'https://www.linkedin.com/in/ksgl-rohith/' }
                  },
                ].map((member, idx) => (
                  <AnimatedSection key={idx} delay={1000 + (idx * 100)}>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-gray-200">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-6">{member.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a href={member.social.email} aria-label="Email" className="text-gray-500 hover:text-gray-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={member.social.linkedin} aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}