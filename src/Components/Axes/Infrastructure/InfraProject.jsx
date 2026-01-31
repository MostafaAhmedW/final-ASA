import React from "react";
import water from "/public/Images/water.webp";
import waterTwo from "/public/Images/wate two.webp";
import rod from "/public/Images/rod.webp";
import light from "/public/Images/light.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function InfraProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات البنية التحتية
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={waterTwo}
                    alt="مشروعات مياه الشرب"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تطوير شبكات مياه الشرب
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توصيل شبكات مياه نظيفة وآمنة للأسر في القرى الأكثر احتياجًا.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={water}
                    alt="مشروعات الصرف الصحي"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    الصرف الصحي المتكامل
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    إنشاء وتطوير شبكات الصرف الصحي للحفاظ على الصحة العامة.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={rod}
                    alt="رصف الطرق"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    رصف وتطوير الطرق الداخلية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    رصف وتطوير الطرق الداخلية لتسهيل حركة المواطنين.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={light}
                    alt="الإنارة العامة"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تحسين الإنارة العامة
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تحسين شبكات الإنارة العامة لرفع مستوى الأمان.
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
