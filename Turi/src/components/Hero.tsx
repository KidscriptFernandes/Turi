function Hero() {
  return (
    <section className="relative h-full bg-red-500 flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
          Welcome to Tuuri
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Hero ou seja parte central.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}   
export default Hero;