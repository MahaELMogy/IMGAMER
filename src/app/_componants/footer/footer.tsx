"use client";
import React from "react";
import Link from "next/link";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#272121] text-[#F6E9E9] py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Description */}
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
            <p className="text-gray-400 mt-4 text-sm max-w-sm">
              Discover, play and win in the best free-to-play games online.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E16428]">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "MMORPG",
                "Shooter",
                "Sailing",
                "Permadeath",
                "Superhero",
                "Pixel",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="hover:text-[#E16428]"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E16428]">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@gamer.com"
                  className="hover:text-[#E16428]"
                >
                  contact@gamer.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E16428]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E16428]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-[#272121] pt-6 text-center text-sm text-gray-500">
          © 2025 IM Gamer. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
