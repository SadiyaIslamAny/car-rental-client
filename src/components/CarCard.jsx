import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCarSide, FaUsers } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const CarCard = ({ car }) => {
    const { _id, imageUrl, carName, dailyRentPrice, carType, seatCapacity, pickupLocation, availability, } = car;
    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={carName}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>


            <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">
                            {carName}
                        </h2>

                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <FaCarSide />
                            <span>{carType}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#FF4C31]">
                        ${dailyRentPrice}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaUsers />
                    <span>{seatCapacity} Seats</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <LuMapPin />
                    <span className="truncate">{pickupLocation}</span>
                </div>

                <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${availability === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                >
                    {availability}
                </span>

                <div>
                    <Link href={`/cars/${_id}`} className="w-full">
                        <Button className="w-full bg-[#FF4C31] text-white">
                           view details
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CarCard;