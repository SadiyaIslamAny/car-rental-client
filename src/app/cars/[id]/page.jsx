import Delete from '@/components/Delete';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import React from 'react';
import { FaCarSide, FaUsers } from 'react-icons/fa';

const carsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const res = await fetch(`http://localhost:5000/cars/${id}`)
    const car = await res.json()
    console.log(car)
    const { imageUrl, carName, dailyRentPrice, availability, description, carType, seatCapacity, } = car;
    return (
        <div className='max-w-xl mx-auto mt-4'>
            <div className=" border mt-8 rounded-2xl space-y-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={imageUrl}
                        alt={carName}
                        width={800}
                        height={400}
                        className=" object-cover mx-auto"
                    />
                </div>

                <div className="space-y-2 px-4 mb-5">


                    <span
                        className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${availability === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                            }`}
                    >
                        {availability}
                    </span>
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            {carName}
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF4C31]">
                            ${dailyRentPrice}{" "}
                        </h2>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <FaCarSide />
                        <span>{carType}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUsers />
                        <span>{seatCapacity} Seats</span>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Description:
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            disabled={availability !== "Available"}
                            className={`px-6 py-2 rounded-lg w-full text-white transition ${availability === "Available"
                                ? "bg-[#FF4C31] hover:bg-red-600"
                                : "bg-[#FF4C31] cursor-not-allowed"
                                }`}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default carsDetailsPage;