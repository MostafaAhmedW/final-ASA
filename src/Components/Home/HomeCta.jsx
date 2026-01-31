import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function HomeCta() {
  return (
    <>
      <SectionWrapper>
        <section className="relative py-20 bg-gray-100  " dir="rtl">
          <div className="container mx-auto px-6 text-center  ">
            <h2 className=" text-center text-3xl  font-bold text-[#318160] mb-10 relative">
              كن جزءًا من التغيير
              <span className="absolute left-1/2 bg-[#318160] w-16 h-0.5 transform -translate-x-1/2 -bottom-4  block "></span>
            </h2>

            <p className=" text-gray-600 font-light leading-relaxed md:text-lg mb-6">
              مبادرة حياة كريمة تهدف إلى تحسين مستوى المعيشة للمواطنين في القرى
              الأكثر احتياجًا من خلال مشروعات تنموية متكاملة في مختلف المجالات.
            </p>

            <div className=" flex  justify-center gap-4">
              <Link
                to="/contact"
                aria-label="الانتقال إلى صفحة التواصل"
                className="px-4 py-3 rounded-full bg-white/90 text-[#318160] font-bold
        hover:bg-gray-200 transition duration-300 cursor-pointer"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
