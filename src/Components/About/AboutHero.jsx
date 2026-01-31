import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="relative h-[45vh] w-full">
          <div className="relative h-full">
            <img
              src="/Images/about hero.webp"
              alt="عن المؤسسة"
              className="w-full h-full object-center"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-black/75"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center  px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
              عن المؤسسة
            </h1>

            <div className="text-sm text-gray-200 font-light">
              <Link
                to="/"
                className="hover:underline hover:text-white transition"
              >
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <span>عن المؤسسة</span>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
