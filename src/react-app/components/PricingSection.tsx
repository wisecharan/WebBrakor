import { useState, useEffect, useRef, ReactNode } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

// Animation utility function
const animateOnScroll = (element: HTMLElement, delay = 0) => {
  element.style.transition = `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`;
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};

// Component wrapper with animation
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            animateOnScroll(entry.target, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

// Main Pricing Section Component
export default function PricingSection() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const exchangeRate = 83; // Placeholder

  const formatPrice = (usd: number | string) => {
    if (usd === 'Quote') return 'Custom Quote';
    const price = typeof usd === 'string' ? parseFloat(usd) : usd;
    return currency === 'USD' ? `$${price}` : `₹${(price * exchangeRate).toFixed(0)}`;
  };

  const plans = [
    {
      name: 'Starter Package',
      price: 1500,
      description: 'Ideal for informational websites, portfolios, or landing pages with a clean, professional design.',
      features: [
        { name: '1-3 Page Website', included: true },
        { name: 'Responsive Design (Mobile-First)', included: true },
        { name: 'Custom User Interface (UI) Design', included: true },
        { name: 'Frontend Development (HTML, CSS, JS)', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Full-stack Development', included: false },
        { name: 'Advanced Features', included: false },
        { name: 'Post-launch Maintenance Plan', included: false },
        { name: 'Content Management System (CMS)', included: false },
      ],
      cta: 'Request a Quote',
      popular: false,
    },
    {
      name: 'Business Package',
      price: 3500,
      description: 'A comprehensive solution for businesses needing a robust website with dynamic content and advanced features.',
      features: [
        { name: 'Up to 10 Page Website', included: true },
        { name: 'Responsive Design (Mobile-First)', included: true },
        { name: 'Custom UI/UX Design', included: true },
        { name: 'Frontend Development (HTML, CSS, JS)', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'Advanced SEO Implementation', included: true },
        { name: 'Full-stack Development', included: true },
        { name: 'Integrated CMS (WordPress, Sanity, etc.)', included: true },
        { name: 'Custom Contact Forms & Lead Generation', included: true },
        { name: 'Basic E-commerce Functionality', included: true },
        { name: 'Post-launch Maintenance Plan', included: false },
      ],
      cta: 'Request a Quote',
      popular: true,
    },
    {
      name: 'Enterprise Package',
      price: 5000,
      description: 'Tailored solutions for large-scale projects, web applications, or unique business needs that require a custom approach.',
      features: [
        { name: 'Unlimited Pages & Features', included: true },
        { name: 'Fully Custom UI/UX Design', included: true },
        { name: 'Advanced Frontend Development', included: true },
        { name: 'Performance & Security Audits', included: true },
        { name: 'End-to-end Full-stack Development', included: true },
        { name: 'Advanced E-commerce Integration', included: true },
        { name: 'Comprehensive Maintenance & Support', included: true },
        { name: 'Dedicated Project Manager', included: true },
        { name: 'Custom API Integrations', included: true },
        { name: 'Scalable Database Architecture', included: true },
      ],
      cta: 'Contact for a Quote',
      popular: false,
    },
  ];

  const faqQuestions = [
    {
      question: 'What is a "one-time, project-based fee"?',
      answer: 'This means you pay a single fee for the development of your website. There are no recurring charges for the development work itself. Any additional services like hosting or ongoing maintenance would be separate.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary greatly depending on the complexity and scope. A starter package might take a few weeks, while a business or enterprise project could take a few months. We will provide a detailed timeline in your custom project proposal.',
    },
    {
      question: 'What is the difference between frontend and full-stack development?',
      answer: 'Frontend development is what the user sees and interacts with (the design, buttons, and layout). Full-stack development includes the frontend plus the backend, which is the server, database, and application logic that runs behind the scenes.',
    },
    {
      question: 'How does the payment process work?',
      answer: 'We typically work on a milestone-based payment schedule. This means you will make an initial deposit to begin the project, with subsequent payments due upon the completion of agreed-upon project milestones. This ensures you are always in control of your budget.',
    },
    {
      question: 'What happens after the website is launched?',
      answer: 'Once your website is live, we provide a period of support to ensure everything is running smoothly. We also offer optional maintenance and support plans for ongoing updates, security, and feature enhancements, which can be arranged separately.',
    },
  ];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-xs sm:max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16">
            <AnimatedSection delay={100}>
              <div className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3 sm:mb-4">
                Custom Packages
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-6">
                Find the Perfect <br />Package to Grow.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-sm sm:text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
                Choose a development package that fits your business needs and start building your custom website today.
              </p>
            </AnimatedSection>

            {/* Currency Selector */}
            <AnimatedSection delay={400}>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm sm:text-base text-gray-500">Currency</span>
                <select
                  className="px-2 sm:px-3 py-0.5 sm:py-1 border rounded-md bg-white text-gray-900 text-sm"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as 'USD' | 'INR')}
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 transition-all ${
                  plan.popular
                    ? 'border-[#c6f678] bg-black text-[#c6f678] transform scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#c6f678] text-black px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6 sm:mb-8">
                  <h3
                    className={`text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 ${
                      plan.popular ? 'text-[#c6f678]' : 'text-gray-500'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-bold">{formatPrice(plan.price)}</span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${plan.popular ? 'text-[#c6f678]' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check
                            className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${
                              plan.popular ? 'text-[#c6f678]' : 'text-[#a3e635]'
                            }`}
                          />
                        ) : (
                          <X
                            className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${
                              plan.popular ? 'text-gray-500' : 'text-gray-400'
                            }`}
                          />
                        )}
                        <span
                          className={`text-xs sm:text-sm ${
                            feature.included
                              ? plan.popular
                                ? 'text-[#c6f678]'
                                : 'text-gray-900'
                              : plan.popular
                              ? 'text-gray-500'
                              : 'text-gray-400'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-2 sm:py-4 rounded-full font-semibold transition-colors text-xs sm:text-base ${
                    plan.popular ? 'bg-[#c6f678] text-black hover:bg-[#b8f566]' : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ Section */}
        <AnimatedSection>
          <div className="mt-12 sm:mt-20 max-w-4xl mx-auto px-2 sm:px-0">
            <AnimatedSection delay={100}>
              <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-4 sm:space-y-6">
              {faqQuestions.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div
                    className="border rounded-lg p-4 sm:p-6 cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm sm:text-base font-semibold">{faq.question}</h3>
                      {faqOpen === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                    {faqOpen === index && (
                      <p className="mt-2 text-xs sm:text-sm text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
