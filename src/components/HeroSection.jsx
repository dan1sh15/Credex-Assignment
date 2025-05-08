const HeroSection = () => (
    <section className="text-center py-20 bg-gradient-to-b from-blue-400 to-indigo-700 text-white h-[50vh] flex flex-col items-center justify-center max-md:text-sm">
        <h1 className="text-4xl font-bold mb-4 max-md:text-3xl">Sell Your Unused Software Licenses with SoftSell</h1>
        <p className="mb-6 text-lg max-md:text-sm">Get instant valuation and quick payment for your unused licenses.</p>
        <button onClick={() => {
            window.alert("Functionality will be updated soon.");
        }} className="bg-white text-indigo-600 px-6 max-md:px-5 max-md:py-1 py-2 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">Sell My Licenses</button>
    </section>
);
export default HeroSection;