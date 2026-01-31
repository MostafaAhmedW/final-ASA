import React from "react";
import { Link } from "react-router-dom";
import Infra from "../../../../public/Images/InfraHero.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function InfraHero() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="relative h-[45vh] w-full">
          {/* Background Image */}
          <div className="relative h-full">
            <img
              src={Infra}
              alt=" محور البنية التحتية "
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-black/75"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              محور البنية التحتية
            </h1>

            <p className="text-sm md:text-base text-gray-200 max-w-2xl my-4.5">
              تطوير الخدمات الأساسية لتحسين جودة الحياة داخل القرى
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
              <span>البنية التحتية</span>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
