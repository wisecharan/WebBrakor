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
      name: 'Basic',
      price: { monthly: 9, yearly: 90 },
      description: 'Perfect for small businesses starting with AI tools.',
      features: [
        { name: 'API Access', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Email Support', included: true },
        { name: 'Data Integration', included: true },
        { name: 'Real-Time Sync', included: true },
        { name: 'Centralized Dashboard', included: true },
        { name: 'Advanced Reporting', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Campaign Automation (Full)', included: false },
        { name: 'Predictive Analytics', included: false },
        { name: 'Premium Support', included: false },
        { name: 'Customizable Workflows', included: false }
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'For growing teams needing advanced features.',
      features: [
        { name: 'API Access', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Data Integration', included: true },
        { name: 'Real-Time Sync', included: true },
        { name: 'Centralized Dashboard', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Email, Chat & Phone Support', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Campaign Automation (Full)', included: true },
        { name: 'Predictive Analytics', included: true },
        { name: 'Premium Support', included: false },
        { name: 'Customizable Workflows', included: false }
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 79, yearly: 790 },
      description: 'For enterprises needing full AI solutions.',
      features: [
        { name: 'API Access', included: true },
        { name: 'Enterprise Analytics', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Data Integration', included: true },
        { name: 'Real-Time Sync', included: true },
        { name: 'Centralized Dashboard', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Email, Chat & Phone Support', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Campaign Automation (Full)', included: true },
        { name: 'Predictive Analytics', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Customizable Workflows', included: true }
      ],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  const faqQuestions = [
    {
      question: 'What’s included in each plan?',
      answer:
        'Every plan includes core AI features. Higher tiers unlock more tools and support.'
    },
    {
      question: 'Can I switch billing anytime?',
      answer:
        'Yes. Switching is easy. Yearly plans offer up to 50% savings.'
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes. All plans include a free trial to explore features.'
    },
    {
      question: 'How does support work?',
      answer:
        'Basic gets email support. Pro & Enterprise include chat, phone, and priority help.'
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes. Cancel anytime without extra fees.'
    }
  ];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-sm sm:max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3 sm:mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Plans for Every Stage
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose the right plan and start using our AI tools today.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all ${
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
                  <span className="text-3xl sm:text-5xl font-bold">
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
                              : 'text-[#c6f678]'
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

              {/* CTA Button */}
              <button
                className={`w-full py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base ${
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
          <div className="space-y-4 sm:space-y-6">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6">
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
