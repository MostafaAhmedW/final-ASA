import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function HomeHero() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="relative w-full h-screen">
          <img
            src="/Images/imghero.webp"
            alt="Hayah Karima"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />

          <div className="absolute inset-0  flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              صندوق تحيا مصر ودوره في مبادرة حياة كريمة
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl font-light mb-8 leading-relaxed">
              يعمل صندوق تحيا مصر على دعم المبادرة الرئاسية حياة كريمة لتحسين
              مستوى المعيشة وتوفير الخدمات الأساسية لأهالينا في القرى الأكثر
              احتياجًا
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center">
              <Link
                to="/axes"
                className="bg-[#318160] px-6 py-3 rounded-full text-white font-bold hover:bg-[#276a52] transition border border-[#318160]/30"
              >
                استكشف محاور المبادرة
              </Link>

              <Link
                to="/contact"
                className="bg-[#318160] px-6 py-3 rounded-full text-white font-bold hover:bg-[#276a52] transition border border-[#318160]/30"
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
