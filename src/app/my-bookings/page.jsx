import { BookingCancelAlert } from "@/components/BookingCancleAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        My Bookings
      </h1>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white rounded-3xl shadow-lg border border-gray-300 p-5"
          >
            {/* Left Side */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 flex-1">
              <Image
                src={booking.imageUrl}
                alt={booking.carName}
                width={150}
                height={100}
                className="rounded-2xl object-cover w-full sm:w-[180px] h-[200px] sm:h-[120px] lg:w-[150px] lg:h-[100px]"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl md:text-2xl font-bold">
                  {booking.carName}
                </h2>

                {/* Location */}
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <IoLocationOutline className="text-gray-600" />
                  <p className="text-sm text-gray-700">
                    {booking.pickupLocation}
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <SlCalender size={14} className="text-gray-600" />
                  <p className="text-sm text-gray-700">
                    {new Date(booking.bookingDate).toLocaleString()}
                  </p>
                </div>

                <div className="mt-4 flex justify-center sm:justify-start">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-[#FF4C31] text-white px-6 py-3 rounded-xl font-bold text-lg w-full sm:w-auto text-center">
                ${booking.dailyRentPrice}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;