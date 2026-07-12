import { Button } from "@heroui/react";
import Link from "next/link";
import CarCard from "./CarCard";

const AvailableCarsSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`);
  const cars = await res.json();

  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <div>
        <h1 className="text-3xl font-bold">Available Cars Section</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCarsSection;
