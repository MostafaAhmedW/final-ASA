import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentHero() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="relative h-[45vh] w-full">
          <div className="relative h-full">
            <img
              src="/Images/economiHero.webp"
              alt=" محور التمكين الاقتصادي "
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-black/75"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              محور التمكين الاقتصادي
            </h1>

            <p className="text-sm md:text-base text-gray-200 max-w-2xl my-4">
              دعم الفئات الأكثر احتياجًا وتحويلها من مستهلكة إلى منتجة
            </p>

            <div className="text-sm text-gray-300 mt-2">
              <Link to="/" className="hover:text-white">
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <Link to="/axes" className="hover:text-white">
                المحاور
              </Link>
              <span className="mx-2">/</span>
              <span> التمكين الاقتصادي </span>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
