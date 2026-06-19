
import { FiArrowUpRight } from 'react-icons/fi';
const categories = [
  {
    id: 1,
    title: "Sport Car",
    image:
     "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/luxury-collection-img-1.jpg",
  },
  {
    id: 2,
    title: "Convertible Car",
    image:
       "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/luxury-collection-img-2.jpg",
  },
  {
    id: 3,
    title: "Sedan Car",
    image:
      "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/luxury-collection-img-3.jpg",
  },
  {
    id: 4,
    title: "Luxury Car",
    image:
    "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/luxury-collection-img-4.jpg",
  },
];

const CarCategoryPage = () => {
    return (
        <div>
            <div className=" mx-auto py-16 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {categories.map((item) => (
      <div
        key={item.id}
        className="relative overflow-hidden rounded-[32px] h-[380px] md:h-[500px] lg:h-[580px] group cursor-pointer"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>

        {/* Title */}
        <h2 className="absolute top-8 left-8 text-white text-3xl md:text-4xl font-bold">
          {item.title}
        </h2>

        {/* Button */}
        <button
          className="
            absolute
            bottom-8
            right-8
            w-16
            h-16
            md:w-20
            md:h-20
            rounded-full
            bg-[#FF4C1E]
            flex
            items-center
            justify-center
            text-white
            text-3xl
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:scale-110
          "
        >
          <FiArrowUpRight />
        </button>
      </div>
    ))}
  </div>
</div>
        </div>
    );
};

export default CarCategoryPage;