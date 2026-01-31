import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        dir="rtl"
        className="fixed w-full z-20 top-0 start-0  bg-[#0f3d2e]/90 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2 ">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/Images/Logo.webp"
              className="h-14"
              alt="شعار مبادرة حياة كريمة"
              loading="lazy"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex  text-[#318160] items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:bg-neutral-primary">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  الرئسية
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  عن مبادرة حياة كريمة
                </NavLink>
              </li>

              <li className="relative group">
                {/* Link الأساسي + السهم */}
                <NavLink
                  to="/axes"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 py-2 px-3 text-white bg-brand rounded
               md:bg-transparent md:text-fg-brand md:p-0"
                >
                  المحاور
                  {/* Arrow */}
                  <svg
                    className=" hidden md:block w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </NavLink>

                {/* Dropdown */}
                <ul
                  className="
      absolute right-0 top-full mt-2 w-56
      bg-[#0f3d2e] rounded-lg shadow-lg
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
      hidden md:block
      z-30
    "
                >
                  <li>
                    <NavLink
                      to="/axes/infrastructure"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      البنية التحتية
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/axes/health"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      الصحة
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/axes/education"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      التعليم
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/axes/social-protection"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      الحماية الاجتماعية
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/axes/economic-empowerment"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      التمكين الاقتصادي
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/axes/sustainable-development"
                      className="block px-4 py-2 text-white hover:bg-white/10"
                    >
                      التنمية المستدامة
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/about-tahya-misr"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  عن صدوق تحيا مصر
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0  md:mr-10"
                  aria-current="page"
                >
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
