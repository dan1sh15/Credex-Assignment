const points = [
    { title: "Fast Payments", icon: "⚡", desc: "Receive funds within 24 hours." },
    { title: "Fair Valuation", icon: "📈", desc: "Get the best value for your license." },
    { title: "Secure Process", icon: "🔒", desc: "Your data is protected and safe." },
  ];
  const WhyChooseUs = ({ darkMode }) => (
    <section className={`py-16 text-center ${darkMode && 'bg-gray-900 text-white'}`}>
      <h2 className="text-3xl font-bold mb-8 max-md:text-2xl">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:gap-7 max-sm:gap-5 w-full mx-auto">
        {points.map((p, idx) => (
          <div key={idx} className={`p-6 h-60 rounded shadow w-64 flex flex-col justify-around ${darkMode && 'bg-gray-800'} hover:scale-[1.04] transition-all duration-300 ease-in-out`}>
            <div className="text-4xl mb-2">{p.icon}</div>
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  export default WhyChooseUs;
  