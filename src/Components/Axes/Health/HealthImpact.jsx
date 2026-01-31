import React from "react";
import beforeHealth from "../../../../public/Images/healthBefore.webp";
import afterHealth from "/public/Images/healthAfter.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function HealthImpact() {
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
                  src={beforeHealth}
                  alt=" قبل تطوير الخدمات الصحية "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">قبل التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    وحدات صحية غير مجهزة ونقص في الخدمات الطبية الأساسية
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={afterHealth}
                  alt=" بعد تطوير الخدمات الصحية  "
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">بعد التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    وحدات صحية متكاملة تقدم خدمات علاجية ووقائية للمواطنين
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
