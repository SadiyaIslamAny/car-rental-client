"use client";

import { useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingCard = ({ car }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const modalRef = useRef(null);

  const [bookingDate, setBookingDate] = useState("");
  const [driverNeeded, setDriverNeeded] = useState("Yes");
  const [specialNote, setSpecialNote] = useState("");

  const handleBooking = async () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    if (!bookingDate) {
      alert("Please select booking date.");
      return;
    }

    const bookingData = {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,

      carId: car._id,
      carName: car.carName,
      imageUrl: car.imageUrl,
      dailyRentPrice: car.dailyRentPrice,
      pickupLocation: car.pickupLocation,
      bookingDate,
      driverNeeded,
      specialNote,
    };

    // console.log(bookingData);

    const { data: tokenData } = await authClient.token();
    //   console.log(tokenData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    toast.success("You Booked Successfully!");
    router.push("/my-bookings");
  };

  return (
    <div>
      {/* Book Button */}

      <button
        disabled={car.availability !== "Available"}
        onClick={() => modalRef.current.showModal()}
        className={`mt-7 w-full h-14 rounded-xl text-lg font-bold transition-all duration-300 ${
          car.availability === "Available"
            ? "bg-[#FF4C31] hover:bg-[#FF4C31] text-white"
            : "bg-gray-400 cursor-not-allowed text-white"
        }`}
      >
        Book Now
      </button>

      {/* Modal */}

      <div className="mt-30">
        <dialog ref={modalRef} className="modal">
          <div className="modal-box w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="uppercase tracking-[3px] text-xs text-gray-500 font-semibold">
                  Booking Form
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">{car.carName}</h2>
              </div>

              <button onClick={() => modalRef.current.close()} className="btn btn-circle btn-sm">
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="space-y-5 mt-6">
              {/* Date */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Booking Date</label>

                <input
                  type="date"
                  className="input input-bordered w-full mt-2"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
              </div>

              {/* Driver */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Driver Needed</label>

                <select
                  className="select select-bordered w-full mt-2"
                  value={driverNeeded}
                  onChange={(e) => setDriverNeeded(e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Note */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Special Note</label>

                <textarea
                  rows={4}
                  placeholder="Write your special note..."
                  className="textarea textarea-bordered w-full mt-2 resize-none"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => modalRef.current.close()} className="btn flex-1">
                Cancel
              </button>

              <button
                onClick={handleBooking}
                className="btn flex-1 bg-[#FF4C31] hover:bg-[#e63f26] border-0 text-white font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookingCard;
