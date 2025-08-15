import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Mail, Phone, Instagram, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is ready to provide exceptional support and guidance for your financial journey.
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-xl overflow-hidden border border-gray-100">
            {/* On mobile: flex-col-reverse so form is first */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">

              {/* Contact Info Side */}
              <div className="bg-gradient-to-br from-gray-50 to-[#f7fcf0] p-6 sm:p-10 md:p-12">
                <div className="mb-6 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Contact Information</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Reach out through any channel below</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { icon: Mail, title: "Email Us", detail: "support@webrakor.com" },
                    { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567" },
                    { icon: MapPin, title: "Visit Us", detail: "123 Financial District, San Francisco" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-white p-2.5 sm:p-3 rounded-xl shadow-sm border border-gray-100">
                        <item.icon className="text-[#c1f174] w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="bg-white p-2.5 sm:p-3 rounded-full shadow-sm border border-gray-200 hover:border-[#c1f174] transition-colors">
                        <Icon className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-6 sm:p-10 md:p-12 bg-white">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Send us a message</h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">We'll get back to you within 24 hours</p>

                <form className="space-y-5 sm:space-y-6">
                  {[
                    { id: "name", label: "Full Name", type: "text" },
                    { id: "email", label: "Email Address", type: "email" },
                    { id: "phone", label: "Phone Number", type: "tel" }
                  ].map((field, i) => (
                    <div className="relative" key={i}>
                      <input
                        type={field.type}
                        id={field.id}
                        className="peer h-10 sm:h-12 w-full border-b-2 border-gray-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#c1f174]"
                        placeholder=" "
                      />
                      <label
                        htmlFor={field.id}
                        className="absolute left-0 -top-3.5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c1f174]"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}

                  <div className="relative pt-3">
                    <textarea
                      id="message"
                      rows={3}
                      className="peer w-full border-b-2 border-gray-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#c1f174] resize-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c1f174]"
                    >
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c1f174] text-gray-900 font-medium py-2.5 sm:py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {
              [
                {
                  question: "How quickly can I get my website live?",
                  answer: "WebRakor provides production-ready websites, so you can have a fully functional site live within days, depending on customization needs."
                },
                {
                  question: "Can I customize the website after it’s delivered?",
                  answer: "Yes! You can easily update content, images, and design elements, or request additional customizations from our team."
                },
                {
                  question: "Are the websites mobile-friendly and responsive?",
                  answer: "Absolutely. All WebRakor websites are optimized for desktop, tablet, and mobile devices out of the box."
                },
                {
                  question: "Do you provide SEO optimization?",
                  answer: "Yes. Every website is built with SEO best practices, ensuring your business is discoverable on search engines."
                },
                {
                  question: "What kind of support do I get after my website is live?",
                  answer: "We offer ongoing support, including updates, bug fixes, and guidance to help you maintain and grow your site."
                },
                {
                  question: "Can I integrate e-commerce features into my website?",
                  answer: "Definitely! We can set up online stores, payment gateways, and product management systems tailored to your business needs."
                }
              ]
                .map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer py-4 text-gray-900 font-medium text-base sm:text-lg">
                      {faq.question}
                      <svg
                        className="ml-2 w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="pb-4 text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                  </details>
                ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
