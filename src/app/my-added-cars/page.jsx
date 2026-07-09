import MyAddedCarsClient from "@/components/MyAddedCarsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const MyAddedCars = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

   const user = session?.user;
    const userId = user?.id;
  
  return (
   <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5 my-8">
    <div>
        <h1 className="text-4xl lg:text-5xl font-black">
            My Listings
        </h1>

        <p className="text-gray-500 mt-2">
            Manage all your listed cars in one place.
        </p>
    </div>

    <Link href="/add-car">
        <button className="btn rounded-full px-8 bg-[#FF4C31] hover:bg-[#FF4C31] border-0 text-white font-semibold shadow-lg">
            + Add Car
        </button>
    </Link>

      
</div>
  );
};

export default MyAddedCars;

