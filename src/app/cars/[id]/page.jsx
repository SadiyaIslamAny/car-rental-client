import Image from 'next/image';
import React from 'react';

const carsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const res = fetch(`http://localhost:5000/car/${id}`)
    const car = await (await res).json()
    // console.log(car)
    const { imageUrl, carName, dailyRentPrice, availability, description } = car;
    return (

        <div className="max-w-3xl mx-auto space-y-8 border mt-8 rounded-2xl">
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

                <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Description:
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default carsDetailsPage;