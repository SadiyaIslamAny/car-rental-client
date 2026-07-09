import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center text-[#FF4C31]">404</h1>
         <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          Oops! The page you are looking for could not be found.
        </p>

      <Link href="/" className="btn bg-[#FF4C31] text-white mt-5">
        Back to Home
      </Link>
    </div>
  );
}