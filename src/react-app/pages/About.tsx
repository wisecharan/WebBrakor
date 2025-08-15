import { Linkedin, Twitter } from 'lucide-react';
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
                    <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center">
                        {/* Profile Images */}
                        <div className="flex justify-center mb-4">
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
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Our Guiding Principles</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">AI-Powered Innovation</h3>
                                <p className="text-gray-600">
                                    We continuously push the boundaries of what AI can achieve in web creation. Our platform is a testament to our commitment to innovation, delivering smarter, more effective solutions that keep you ahead of the curve.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Effortless Experience</h3>
                                <p className="text-gray-600">
                                    Building a professional website shouldn't be complicated. We eliminate the complexity and friction of traditional development, providing an intuitive platform that allows you to launch your site in days, not months.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your Success, Our Focus</h3>
                                <p className="text-gray-600">
                                    Your business goals are our mission. By providing the tools, insights, and dedicated support you need to succeed, we ensure that our platform is a powerful engine for your growth. We succeed when our clients succeed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">The WebRakor Adventure</h2>
                        <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
                            From a small team of students to a leading innovator in AI web development, our journey has been fueled by a commitment to quality, speed, and client success.
                        </p>

                        <div className="max-w-3xl mx-auto">
                            {[
                                { year: '2021', title: 'The Vision is Born', text: 'Fueled by our frustration with slow, expensive web development, we started sketching out a new kind of platform. The vision was simple: a website builder powered by AI that could deliver high-quality results in a fraction of the time.' },
                                { year: '2022', title: 'First AI-Powered Prototype', text: 'After months of development, we built our first functional AI prototype. The initial tests proved our concept was viable, and we began refining our AI models to generate professional, modern designs automatically.' },
                                { year: '2023', title: 'Founding WebRakor', text: 'With a clear product vision and a growing team of engineers and designers, we officially founded WebRakor. This marked the beginning of our mission to make web creation accessible and efficient for everyone.' },
                                { year: '2024', title: 'Launch & Early Success', text: 'We launched our platform to a select group of early adopters. Their feedback was instrumental in our success, helping us fine-tune the user experience and prove that AI could be a game-changer for businesses.' },
                                { year: '2025', title: 'The WebRakor Standard', text: 'Today, WebRakor is a trusted partner for businesses worldwide. Our AI-powered platform continues to evolve, setting a new standard for website development that is fast, beautiful, and intelligently built for growth.' }
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
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute bg-[#c3f376] rounded-full py-1 px-3 -top-3 left-1/2 -translate-x-1/2 shadow-md"></div>
                            <p className="text-sm font-semibold text-gray-900">We're Hiring!</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Let's Meet Our Team</h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                                Join a team where creativity meets collaboration. We value growth, innovation, and making an impact together.
                            </p>

                            <div className="mt-6">
                                <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-full mr-4 border border-gray-300">About Us</button>
                                <button className="bg-[#c3f376] text-gray-900 font-semibold py-2 px-6 rounded-full">Job Openings</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center mt-10">
                            {[
                                {
                                    name: 'Azuynan U. Wu',
                                    role: 'Founder & CEO',
                                    description: 'Used to work at IBM but quit because of robotz.',
                                    img: 'https://randomuser.me/api/portraits/men/7.jpg',
                                    social: { x: '#', linkedin: '#' }
                                },
                                {
                                    name: 'Silverstone Gray',
                                    role: 'Lead Design',
                                    description: 'Hello, I like not doing anything at all. Let us Connect',
                                    img: 'https://randomuser.me/api/portraits/women/11.jpg',
                                    social: { x: '#', linkedin: '#' }
                                },
                                {
                                    name: 'Alan D. Watts',
                                    role: 'Lead Engineering',
                                    description: 'Prodigy with record-breaking 176 IQ and many awards.',
                                    img: 'https://randomuser.me/api/portraits/men/31.jpg',
                                    social: { x: '#', linkedin: '#' }
                                },
                                {
                                    name: 'Oarack Babama',
                                    role: 'Lead Finance',
                                    description: 'Hello, I like money. It is the only purpose of in my life.',
                                    img: 'https://randomuser.me/api/portraits/men/57.jpg',
                                    social: { x: '#', linkedin: '#' }
                                },
                            ].map((member, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100">
                                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                                    <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href={member.social.x} aria-label="X" className="text-gray-400 hover:text-gray-500">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={member.social.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-gray-500">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}