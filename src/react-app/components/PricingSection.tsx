import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const exchangeRate = 87;
  const formatPrice = (usd: number) =>
    currency === 'USD' ? `$${usd}` : `₹${usd * exchangeRate}`;

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 9, yearly: 90 },
      description: 'The perfect plan for individuals and small teams to get started with AI.',
      features: [
        { name: 'AI Website Builder', included: true },
        { name: 'Core Design Features', included: true },
        { name: 'Standard Analytics', included: true },
        { name: 'Email Support', included: true },
        { name: 'AI Content Generation', included: true },
        { name: 'Integrated Hosting', included: true },
        { name: 'Advanced Reporting', included: false },
        { name: 'Dedicated Account Manager', included: false },
        { name: 'Full Marketing Automation', included: false },
        { name: 'Predictive Growth Insights', included: false },
        { name: '24/7 Priority Support', included: false },
        { name: 'Custom AI Workflows', included: false }
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      price: { monthly: 29, yearly: 290 },
      description: 'Unlock advanced tools to scale your business and automate your online presence.',
      features: [
        { name: 'AI Website Builder', included: true },
        { name: 'Advanced Design Features', included: true },
        { name: 'In-depth Analytics', included: true },
        { name: 'Priority Support', included: true },
        { name: 'AI Content Generation', included: true },
        { name: 'Integrated Hosting', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Email, Chat & Phone Support', included: true },
        { name: 'AI SEO & Marketing Tools', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Full Marketing Automation', included: true },
        { name: 'Predictive Growth Insights', included: true },
        { name: '24/7 Priority Support', included: false },
        { name: 'Custom AI Workflows', included: false }
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 79, yearly: 790 },
      description: 'Comprehensive, end-to-end solutions for enterprises with complex needs.',
      features: [
        { name: 'AI Website Builder', included: true },
        { name: 'Custom Design & Branding', included: true },
        { name: 'In-depth Analytics', included: true },
        { name: '24/7 Priority Support', included: true },
        { name: 'AI Content Generation', included: true },
        { name: 'Integrated Hosting', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Email, Chat & Phone Support', included: true },
        { name: 'AI SEO & Marketing Tools', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Full Marketing Automation', included: true },
        { name: 'Predictive Growth Insights', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom AI Workflows', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqQuestions = [
    {
      question: 'What makes a WebRakor site "AI-powered"?',
      answer:
        'Our platform uses artificial intelligence to assist with every step of the process, from generating initial design concepts to writing engaging content and optimizing your site for search engines. This ensures a fast, high-quality, and data-driven result.'
    },
    {
      question: 'Can I switch or cancel my plan at any time?',
      answer:
        'Yes, you can easily upgrade, downgrade, or cancel your plan at any time from your dashboard. There are no long-term contracts or hidden fees. We believe in providing flexibility to match your business needs.'
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, all of our plans include a free trial. You can explore our platform and experience the power of our AI tools before committing to a subscription.'
    },
    {
      question: 'What kind of support is included?',
      answer:
        'Our Starter plan includes email support. The Growth and Enterprise plans come with priority support via email, chat, and phone, giving you faster access to our expert team whenever you need it.'
    },
    {
      question: 'Is WebRakor suitable for large enterprises?',
      answer:
        'Absolutely. Our Enterprise plan is designed for large organizations, offering advanced features like dedicated support, custom integrations, and scalable solutions tailored to meet complex business requirements.'
    }
  ];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8" id="pricing">
      {/* Changed max-w-sm to max-w-xs for mobile */}
      <div className="max-w-xs sm:max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3 sm:mb-4">
            AFFORDABLE PLANS
          </div>
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-6">
            Find the Perfect <br />Plan to Grow.
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Choose a plan that fits your business needs and start building your AI-powered website today.
          </p>

          {/* Pricing & Currency Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <span
              className={`${
                !isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'
              } text-sm sm:text-base`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-5 sm:h-6 w-10 sm:w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition ${
                  isYearly ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`${
                isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'
              } text-sm sm:text-base`}
            >
              Yearly
            </span>

            {/* Currency Selector */}
            <select
              className="px-2 sm:px-3 py-0.5 sm:py-1 border rounded-md bg-white text-gray-900 text-sm"
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value as 'USD' | 'INR')
              }
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Save up to 50% by paying yearly
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
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
                  <span className="text-3xl sm:text-4xl font-bold">
                    {formatPrice(
                      isYearly ? plan.price.yearly : plan.price.monthly
                    )}
                  </span>
                  <span
                    className={`ml-1 sm:ml-2 text-xs sm:text-base ${
                      plan.popular ? 'text-[#c6f678]' : 'text-gray-500'
                    }`}
                  >
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    plan.popular
                      ? 'text-[#c6f678]'
                      : 'text-gray-600'
                  }`}
                >
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
                            plan.popular
                              ? 'text-[#c6f678]'
                              : 'text-[#a3e635]'
                          }`}
                        />
                      ) : (
                        <X
                          className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${
                            plan.popular
                              ? 'text-gray-500'
                              : 'text-gray-400'
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

              {/* CTA Button - Added mobile-specific styling */}
              <button
                className={`w-full py-2 sm:py-4 rounded-full font-semibold transition-colors text-xs sm:text-base ${
                  plan.popular
                    ? 'bg-[#c6f678] text-black hover:bg-[#b8f566]'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-20 max-w-4xl mx-auto px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-base sm:text-lg font-medium text-gray-900"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {faqOpen === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
                {faqOpen === index && (
                  <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}