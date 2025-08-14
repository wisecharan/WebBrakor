export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      highlight: '+',
      title: 'Websites Delivered',
      subtitle:
        'From startups to student projects, Webrakor has delivered high-quality websites with speed and precision.',
    },
    {
      number: '200+',
      highlight: '+',
      title: 'Satisfied Clients',
      subtitle:
        'Businesses, solopreneurs, and non-profits trust Webrakor for AI-powered web solutions tailored to their needs.',
    },
    {
      number: '1K+',
      highlight: '+',
      title: 'Projects Assisted',
      subtitle:
        'We’ve helped countless projects with design, development, and branding! combining AI efficiency with human creativity.',
    },
  ];

  return (
    <section className="pt-0 pb-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-grey leading-snug sm:leading-tight">
            Focus on your ideas while we build your website.
            <br />
            <span className="font-normal text-[10px] sm:text-base leading-tight sm:leading-normal">
              AI-powered speed, human-crafted quality! Webrakor makes it simple.
            </span>
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2 sm:px-4">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-1 sm:mb-3">
                {stat.number.replace(stat.highlight, '')}
                <span className="text-[#a3e635]">{stat.highlight}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">
                {stat.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-relaxed">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
