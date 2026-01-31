import React from "react";
import before1 from "../../../../public/Images/before social.webp";
import after1 from "../../../../public/Images/after social.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";
export default function SocialProtectionImpact() {
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
                  src={before1}
                  alt=" قبل تطويرالحماية الاجتماعية "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-gray-100 text-center">
                  <p className="font-semibold text-gray-700">قبل التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    نقص في الدعم وغياب مظلة الأمان الاجتماعي
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={after1}
                  alt=" بعد تطويرالحماية الاجتماعية  "
                  className="w-full h-64 object-center"
                />
                <div className="p-4 bg-gray-100 text-center">
                  <p className="font-semibold text-gray-700">بعد التنفيذ</p>
                  <p className="text-sm text-gray-600 mt-1">
                    استقرار اجتماعي وتحسن مستوى المعيشة
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
