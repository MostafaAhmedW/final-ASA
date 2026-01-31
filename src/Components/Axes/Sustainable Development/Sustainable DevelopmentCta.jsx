import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function SustainableDevelopmentCta() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 bg-gray-100">
          <div className="container md:px-10 mx-auto text-center text-white">
            <h2 className="text-center text-3xl text-[#318160] font-bold mb-10">
              التنمية المستدامة مستقبل أفضل
            </h2>

            <p className="text-gray-600 font-light leading-relaxed md:text-lg mb-6 p-4 md:p-5">
              تسعى مبادرة حياة كريمة إلى بناء مستقبل مستدام يحافظ على الموارد
              الطبيعية ويضمن حياة كريمة للأجيال القادمة.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/axes"
                className="px-7 py-3 rounded-full bg-[#318160] text-white font-bold
                          hover:bg-[#256a50] transition duration-300 cursor-pointer"
              >
                تعرف على باقي المحاور
              </Link>

              <Link
                to="/"
                className="px-7 py-3 rounded-full border border-[#318160]
                          text-[#318160] font-bold
                          hover:bg-[#318160] hover:text-white transition duration-300 cursor-pointer"
              >
                الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
