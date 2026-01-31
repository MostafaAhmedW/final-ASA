import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function TahyaMisrCta() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 bg-gray-100">
          <div className="container md:px-10 mx-auto text-center text-white">
            <h2 className="text-center text-3xl font-bold text-[#318160] mb-10 relative">
              تعرّف على مبادرة حياة كريمة
              <span className="absolute left-1/2 bg-[#318160] w-16 h-0.5 transform -translate-x-1/2 -bottom-4  block "></span>
            </h2>

            <p className="text-gray-600 font-light leading-relaxed md:text-lg mb-6">
              المبادرة القومية الأضخم لتحسين مستوى المعيشة في الريف المصري
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/about"
                className="px-8 py-3 rounded-full border border-[#318160]
  text-[#318160] font-bold
  hover:bg-[#318160] hover:text-white transition duration-300 cursor-pointer"
              >
                تعرّف على مبادرة حياة كريمة
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
