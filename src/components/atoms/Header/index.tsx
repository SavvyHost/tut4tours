import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Heart, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useWishlist } from "@/contexts/wishlist-context";
import { useRouter } from "next/router";
import Image from "next/image";
import Tut4tours from "../../../../public/assets/Tut4tours.jpg";
export const Header = ({ header, className }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const router = useRouter();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (!isDesktop) return;

    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, isDesktop]);

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  const handleWishlistClick = () => {
    router.push("/wishlist");
  };

  // Add dropdown links for "Tours"
  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/top-excursions",
      label: "Tours",
      subLinks: [
        { href: "/destinations/4", label: "Luxor Tours" },
        { href: "/destinations/7", label: "Hurghada Tours" },
        { href: "/destinations/5", label: "Aswan Tours" },
        { href: "/destinations/8", label: "Marsa Alam Tours" },
        { href: "/destinations/1", label: "Tours To Cairo" },
      ],
    },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 px-4 sm:px-16 bg-white shadow-md transition-transform duration-300 ${
          isDesktop && !visible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between py-4">
          {/* Logo aligned to the left */}
          <div className="flex-shrink-0 lg:w-1/3">
            <Link href="/">
              <Image
                src={Tut4tours}
                alt=""
                className="lg:w-32 lg:h-16 w-16 h-8"
              />
            </Link>
          </div>

          {/* Center - Desktop Menu (links centered only on desktop) */}
          <div className="hidden lg:flex lg:w-1/3 justify-center">
            <DesktopMenu navLinks={navLinks} />
          </div>

          {/* Right side - Social Icons, Language Change, and Book Tour Button */}
          <div className="flex items-center lg:w-1/3 justify-end space-x-4">
            <button
              className="hidden lg:block focus:outline-none"
              onClick={handleLanguageChange}
              title="Change Language"
            >
              <Globe className="w-6 h-6 text-[#132f4e]" />
            </button>

            <button
              onClick={handleWishlistClick}
              className="relative text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={`View wishlist containing ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-accent-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <Link
              href="/inquire"
              className="bg-primary-light text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-accent-yellow"
            >
              Tailor Made{" "}
            </Link>
          </div>

          {/* Mobile Menu Toggle (visible on small screens) */}
          <button
            className="lg:hidden text-[#191e61] focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
};
