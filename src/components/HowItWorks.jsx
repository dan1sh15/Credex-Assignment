const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];
const HowItWorks = ({ darkMode }) => (
  <section className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} text-center w-full flex flex-col gap-y-2 mx-auto`}>
    <h2 className="text-3xl font-bold mb-8 max-md:text-2xl">How It Works</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:gap-7 max-sm:gap-5 w-full mx-auto">
      {steps.map((step, idx) => (
        <div key={idx} className={` ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg w-64 hover:scale-[1.05] transition-all duration-300 ease-in-out`}>
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
);
export default HowItWorks;
