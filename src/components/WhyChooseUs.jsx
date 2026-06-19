const WhyChooseUs = () => {
  const features = [
    {
      title: "Wide Range of Cars",
      desc: "We offer all types of cars including economy, luxury, and SUVs.",
      icon: "🚗",
    },
    {
      title: "Affordable Pricing",
      desc: "We ensure the best service at the most reasonable prices.",
      icon: "💰",
    },
    {
      title: "Secure Booking",
      desc: "Our booking system is fully secure and protected with authentication.",
      icon: "🔒",
    },
    {
      title: "Fast Approval",
      desc: "Get quick confirmation and instant booking approval.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16 bg-gray-30 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;