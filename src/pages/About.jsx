const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to our furniture haven! At <strong>COMFY</strong>, we redefine
        home living with an exquisite range of meticulously crafted furniture.
        Elevate your space with our curated collection, blending style and
        functionality seamlessly. From timeless classics to modern marvels, each
        piece is a testament to quality and design. Dive into a world where
        comfort meets aesthetics, and every item tells a story. Our
        user-friendly platform ensures a hassle-free shopping experience, while
        our commitment to sustainability ensures you not only beautify your home
        but also contribute to a greener world. Discover the art of living well
        with <strong>COMFY</strong> where furniture dreams come to life.
      </p>
    </>
  );
};

export default About;
