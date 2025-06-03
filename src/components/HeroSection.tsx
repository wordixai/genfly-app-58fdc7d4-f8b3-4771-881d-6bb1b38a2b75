const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2560&q=80"
          alt="Close-up of lips"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20" />
      </div>
      
      {/* Hero Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="hero-text text-white text-center">
          Op e n
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;