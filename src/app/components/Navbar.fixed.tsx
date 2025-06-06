"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .navbar-font {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }

        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #7757ee;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #7757ee;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.rotate {
          transform: rotate(180deg);
        }

        .dropdown-item {
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          padding-left: 24px;
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 navbar-font">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Assets/logo.svg"
                alt="M2 Logo"
                width={180}
                height={60}
                className="cursor-pointer"
              />
            </Link>

            {/* Navigation Menu */}
            <div className="flex items-center gap-12">
              <ul className="flex items-center gap-10 text-[15px] font-medium text-gray-700">
                {/* Solutions Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="nav-link flex items-center gap-2 py-2">
                    Solutions
                    <svg
                      className={`dropdown-arrow w-4 h-4 ${
                        isDropdownOpen ? "rotate" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`dropdown-menu ${
                      isDropdownOpen ? "open" : ""
                    } absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2`}
                  >
                    <Link
                      href="/solutions"
                      className="dropdown-item block px-6 py-3 text-sm font-medium text-gray-700 hover:text-indigo-500"
                    >
                      Explore our Solutions
                    </Link>
                    <Link
                      href="/activation"
                      className="dropdown-item block px-6 py-3 text-sm font-medium text-gray-700 hover:text-indigo-500"
                    >
                      Activation & Experience
                    </Link>
                    <Link
                      href="/data-technology"
                      className="dropdown-item block px-6 py-3 text-sm font-medium text-gray-700 hover:text-indigo-500"
                    >
                      Data & Technology
                    </Link>
                  </div>
                </li>

                {/* Case Studies */}
                <li>
                  <Link href="/case-studies" className="nav-link py-2">
                    Case Studies
                  </Link>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/get-in-touch"
                className="bg-white border-2 border-indigo-500 text-indigo-500 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:shadow-md"
                style={{ borderColor: "#7757EE", color: "#7757EE" }}
                onMouseEnter={(e) => {
  const target = e.target as HTMLButtonElement;
  target.style.backgroundColor = "#7757EE";
                  target.style.color = "white";
                }}
                onMouseLeave={(e) => {
  const target = e.target as HTMLButtonElement;
  target.style.backgroundColor = "";
                  target.style.color = "white";
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
