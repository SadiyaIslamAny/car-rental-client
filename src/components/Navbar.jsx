"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const user = null;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />

            <div className="leading-[0.85]">
              <span className="block text-lg sm:text-xl md:text-lg lg:text-2xl font-extrabold text-gray-900">
                Car
              </span>

              <span className="block text-lg sm:text-xl md:text-lg lg:text-2xl font-medium text-[#FF4C31]">
                Rental
              </span>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 font-medium">

            <Link
              href="/"
              className="text-sm lg:text-base hover:text-[#FF4C31] duration-300"
            >
              Home
            </Link>

            <Link
              href="/cars"
              className="text-sm lg:text-base hover:text-[#FF4C31] duration-300"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="text-sm lg:text-base hover:text-[#FF4C31] duration-300"
            >
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              className="text-sm lg:text-base hover:text-[#FF4C31] duration-300"
            >
              My Bookings
            </Link>

          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center">

            {!user ? (
              <div className="flex items-center gap-2 lg:gap-3">

                <Link
                  href="/login"
                  className="text-sm lg:text-base font-semibold px-3 lg:px-5 py-2 hover:text-[#FF4C31]"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-[#FF4C31] text-white text-sm lg:text-base font-semibold px-5 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-[#e6432b] transition"
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
                  <Image
                    src="/avatar.png"
                    alt="Profile"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />

                  <ChevronDown size={18} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-14 w-56 rounded-lg bg-white shadow-lg border py-2">

                    <Link
                      href="/add-car"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Add Car
                    </Link>

                    <Link
                      href="/my-bookings"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/my-cars"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Added Cars
                    </Link>

                    <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
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

            <Link href="/cars">
              Explore Cars
            </Link>

            <Link href="/add-car">
              Add Car
            </Link>

            <Link href="/my-bookings">
              My Bookings
            </Link>

            {!user ? (
              <div className="flex flex-col gap-3 mt-2">

                <Link
                  href="/login"
                  className="border border-[#FF4C31] text-[#FF4C31] text-center py-2 rounded-lg font-semibold"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-[#FF4C31] text-white text-center py-2 rounded-lg font-semibold"
                >
                  Register
                </Link>

              </div>
            ) : (
              <>

                <Link href="/add-car">
                  Add Car
                </Link>

                <Link href="/my-bookings">
                  My Bookings
                </Link>

                <Link href="/my-cars">
                  My Added Cars
                </Link>

                <button className="text-left text-red-500">
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

