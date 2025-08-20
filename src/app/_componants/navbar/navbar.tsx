"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 w-[75%] bg-[#272121] text-[#F6E9E9] hover:shadow-[#E16428]/30 font-bold rounded-2xl z-50 p-4 shadow-lg transition-all duration-300 ${
        isScrolled ? "top-0" : "top-10"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div>
            <h2 className="text-3xl font-bold flex items-center">
              <span
                className="text-stroke text-transparent text-[36px]"
                style={{
                  WebkitTextStroke: "1.5px #E16428",
                  textShadow: "0 0 6px #E16428",
                }}
              >
                IM
              </span>
              <span className="text-[#F6E9E9] text-[36px] uppercase px-1">
                GAMER
              </span>
            </h2>
          </div>
        </Link>

        {/* Hamburger menu (mobile only) */}
        <div
          className="border-2 border-[#FF7F11] w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-md cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-[#FF7F11] block"></span>
          <span className="w-6 h-[2px] bg-[#FF7F11] block"></span>
          <span className="w-6 h-[2px] bg-[#FF7F11] block"></span>
        </div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex gap-4 text-[#F1F1F1] uppercase text-sm">
          {[
            ["/", "mmorpg"],
            ["/shooter", "shooter"],
            ["/sailing", "sailing"],
            ["/permadeath", "permadeath"],
            ["/superhero", "superhero"],
            ["/pixel", "pixel"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#FF7F11] transition ${
                  pathname === href ? "text-[#FF7F11]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-3 mt-4 text-[#F1F1F1] uppercase md:hidden">
          {[
            ["/", "mmorpg"],
            ["/shooter", "shooter"],
            ["/sailing", "sailing"],
            ["/permadeath", "permadeath"],
            ["/superhero", "superhero"],
            ["/pixel", "pixel"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#FF7F11] transition ${
                  pathname === href ? "text-[#FF7F11]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
