import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function AxesHero() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="relative h-[45vh] w-full">
          <div className="relative h-full">
            <img
              src="/Images/axes.webp"
              alt="محاور مبادرة حياة كريمة"
              className="w-full h-full object-cover "
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              محاور مبادرة
            </h1>

            <div className="text-sm text-gray-200 font-light">
              <Link
                to="/"
                className="hover:underline hover:text-white transition"
              >
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <span> المحاور </span>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
