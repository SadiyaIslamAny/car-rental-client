import Image from "next/image";
import Link from "next/link";

const  Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-gray-700 font-medium text-sm md:text-base mb-4">
             Luxury & Performance in One Place
            </span>

            <h1 className="font-extrabold leading-tight text-gray-900">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Save
                <span className="text-[#FF4C31] hover:text-black"> Big </span>
                on Your 
              </span>

              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                Car Rental
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Discover premium cars designed for comfort, power, and style. Your next ride is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <Link
                href="/cars"
                className="bg-[#FF4C31] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
              >
                Explore Cars
              </Link>

              <Link
                href="/"
                className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

            <Image
              src="/assests/banner.png" 
              alt="Rental Car"
              width={1400}
              height={900}
              priority
              className="relative z-10 w-full max-w-[750px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;