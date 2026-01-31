import React from "react";
import img5 from "../../../../public/Images/economi5.webp";
import img6 from "../../../../public/Images/economi6.webp";
// import SectionWrapper from '@/Components/Sectionwrapper/Sectionwrapper'
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentImpact() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 bg-gray-100">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              الأثر قبل وبعد التنفيذ
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={img5}
                  alt=" قبل تطوير المسكن  "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">قبل التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    مسكن غير ملائم وضعف مصادر الدخل للأسرة
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={img6}
                  alt=" بعد تطوير المسكن   "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">بعد التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    مسكن آمن وتحسن مستوى المعيشة مع مصدر دخل مستدام
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
