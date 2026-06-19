"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
  const { data: session } = authClient.useSession();

  // 👉 real user from session
  const user = session?.user || null;
  console.log(user)

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Top */}
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority
              className="w-14 h-14 object-contain"
            />

            <div className="leading-[0.85]">
              <span className="block text-xl font-extrabold text-gray-900">
                Car
              </span>
              <span className="block text-xl font-medium text-[#FF4C31]">
                Rental
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-[#FF4C31]">Home</Link>
            <Link href="/cars" className="hover:text-[#FF4C31]">Explore Cars</Link>
            <Link href="/add-car" className="hover:text-[#FF4C31]">Add Car</Link>
            <Link href="/my-bookings" className="hover:text-[#FF4C31]">My Bookings</Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center">

            {!user ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="font-semibold hover:text-[#FF4C31]">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-[#FF4C31] text-white px-5 py-2 rounded-lg hover:bg-[#e6432b]"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >

                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                    <Image
                      src={user?.image || "/avatar.png"}
                      alt="Profile"
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown size={25} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-12 w-56 bg-white shadow-lg border rounded-lg py-2">

                    <Link href="/add-car" className="block px-4 py-2 hover:bg-gray-100">
                      Add Car
                    </Link>

                    <Link href="/my-bookings" className="block px-4 py-2 hover:bg-gray-100">
                      My Bookings
                    </Link>

                    <Link href="/my-cars" className="block px-4 py-2 hover:bg-gray-100">
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t py-5 flex flex-col gap-4">

            <Link href="/">Home</Link>
            <Link href="/cars">Explore Cars</Link>
            <Link href="/add-car">Add Car</Link>
            <Link href="/my-bookings">My Bookings</Link>

            {!user ? (
              <div className="flex flex-col gap-3 mt-2">
                <Link
                  href="/login"
                  className="border border-[#FF4C31] text-[#FF4C31] text-center py-2 rounded-lg"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-[#FF4C31] text-white text-center py-2 rounded-lg"
                >
                  Register
                </Link>
              </div>
            ) : (
              <>
                <Link href="/my-cars">My Added Cars</Link>

                <button onClick={handleLogout} className="text-left text-red-500">
                  Logout
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

