import BookingCard from "@/components/BookingCard";
import Image from "next/image";
import { FaCarSide, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const CarsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/details/${id}`, {
    cache: "no-store",
  });

  const car = await res.json();

  const {
    imageUrl,
    carName,
    dailyRentPrice,
    availability,
    description,
    carType,
    seatCapacity,
    pickupLocation,
  } = car;

  return (
    <section className="bg-[#f8f7f4] min-h-screen py-14 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Image Card */}

          <div className="bg-white rounded-[35px] shadow-xl border p-6">
            <div className="overflow-hidden rounded-[25px]">
              <Image
                src={imageUrl}
                alt={carName}
                width={800}
                height={700}
                priority
                className="w-full h-[500px] object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Details Card */}

          <div className="bg-white rounded-[35px] shadow-xl border p-8">
            <p className="uppercase text-xs tracking-[5px] text-gray-400 font-semibold">
              {carType}
            </p>

            <h1 className="text-5xl font-black text-gray-900 mt-3">{carName}</h1>

            <div className="mt-5 flex items-end gap-2">
              <h2 className="text-5xl font-extrabold text-black">${dailyRentPrice}</h2>

              <span className="text-lg text-gray-500 mb-2">/ day</span>
            </div>

            <p className="text-gray-500 leading-8 mt-6">{description}</p>

            {/* Information */}

            <div className="space-y-4 mt-10">
              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700">
                  <FaCarSide />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Car Type</p>
                  <h3 className="font-semibold">{carType}</h3>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Seat Capacity</p>
                  <h3 className="font-semibold">{seatCapacity} Seats</h3>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Pickup Location</p>
                  <h3 className="font-semibold">{pickupLocation}</h3>
                </div>
              </div>
            </div>

            {/* Status */}

            <div className="mt-10 bg-black rounded-2xl p-6">
              <p className="uppercase text-xs tracking-[4px] text-gray-400">Status</p>

              <div className="flex items-center gap-3 mt-3">
                <h2
                  className={`text-3xl font-bold ${
                    availability === "Available" ? "text-white" : "text-red-600"
                  }`}
                >
                  {availability}
                </h2>
              </div>
            </div>

            {/* Button */}
            <div className="">
              <BookingCard car={car} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsDetailsPage;
