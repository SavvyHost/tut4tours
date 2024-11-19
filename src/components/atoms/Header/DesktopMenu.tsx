import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopMenu = ({ navLinks }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setDropdownOpen(label); // Open dropdown for the hovered item
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null); // Close dropdown when mouse leaves
  };

  const handleClick = () => {
    setDropdownOpen(null); // Close the dropdown when a link is clicked
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-6">
        {navLinks.map(({ href, label, subLinks }) => (
          <li
            key={href}
            className="relative group"
            onMouseEnter={() => subLinks && handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={href}
              className={`font-semibold text-sm ${
                router.pathname === href
                  ? "text-yellow-800"
                  : "text-[#6095e4] hover:text-[#71a0dd] transition-colors duration-300"
              }`}
            >
              {label}
            </Link>

            {/* Dropdown for items with subLinks */}
            {subLinks && (
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform transition-all duration-300 ease-in-out ${
                  dropdownOpen === label
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <ul className="py-2">
                  {subLinks.map((subLink) => (
                    <li key={subLink.href} className="hover:bg-gray-100">
                      <Link
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                        onClick={handleClick} // Close the dropdown when a link is clicked
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
