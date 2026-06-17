import Image from "next/image";
import Link from "next/link";
import {FaFacebookF,FaInstagram,FaTwitter,FaPhoneAlt,} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container mx-auto px-6 lg:px-12 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="w-14 h-14 object-contain"
              />
               <div className="leading-[0.85]">
              <span className="block text-lg sm:text-xl md:text-lg lg:text-2xl font-extrabold text-white">
                Car
              </span>

              <span className="block text-lg sm:text-xl md:text-lg lg:text-2xl font-medium text-[#FF4C31]">
                Rental
              </span>
            </div>
            </Link>
            <p className="text-sm text-gray-400">
              Luxury & comfort car rental service in Bangladesh.
            </p>

           
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Contact Information
            </h2>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MdEmail /> support@carrentalofficial.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +880 134567973
              </p>

              <p className="flex items-center gap-2">
                <MdLocationOn /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/*  Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Useful Links
            </h2>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-white transition">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social link */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h2>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Stay connected with us on social media.
            </p>
          </div>
        </div>

        {/* */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Car Rental. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;