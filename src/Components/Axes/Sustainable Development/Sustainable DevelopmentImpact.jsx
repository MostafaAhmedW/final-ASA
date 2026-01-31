import React from "react";
import beforeHome from "../../../../public/Images/before home.webp";
import afterHome from "../../../../public/Images/after home.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function SustainableDevelopmentImpact() {
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
                  src={beforeHome}
                  alt=" قبل تطوير السكن "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">قبل التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    مسكن غير آدمي يفتقر إلى معايير الأمان والخدمات الأساسية
                    ويؤثر سلبًا على جودة حياة الأسرة
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={afterHome}
                  alt=" بعد تطوير السكن   "
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <p className="font-semibold text-gray-700">بعد التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    مسكن آمن ومطور يحقق الاستقرار الأسري ويوفر بيئة معيشية
                    إنسانية ومستدامة
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
