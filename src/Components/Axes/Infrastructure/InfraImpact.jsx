import React from "react";
import beforeRod from "../../../../public/Images/before rod.webp";
import afterRod from "/public/Images/after rod.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function InfraImpact() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 bg-gray-100">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              الأثر قبل وبعد التنفيذ
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={beforeRod}
                  alt="قبل التطوير"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">قبل التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    طرق غير ممهدة وصعوبة في الوصول للخدمات الأساسية
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={afterRod}
                  alt="بعد التطوير"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">بعد التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    طرق ممهدة تسهّل حركة المواطنين وتحسّن مستوى المعيشة
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
