import { Link } from "react-router-dom";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero3.webp";
import Hero4 from "../assets/hero4.webp";

//TODO get responsive carousel;

const Hero = () => {
  const carouselImages = [Hero1, Hero2, Hero3, Hero4];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="hidden  h-[28rem]  lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="w-80 h-full object-cover"
                alt="some random furniture"
              ></img>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">Style Unleashed, Comfort Embraced!</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Transform your living spaces with our exquisite furniture collection.
          Discover a symphony of style and comfort that transcends ordinary
          living. Immerse yourself in a world of timeless designs, quality
          craftsmanship, and affordable luxury. From sleek modern aesthetics to
          classic charm, our curated selection caters to diverse tastes.
          Redefine your home’s personality with pieces that speak volumes.
          Elevate your lifestyle; shop now for a home that reflects you.
        </p>
        <div className="mt-10">
        <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Hero;
