import React from "react";
import HealthGoal from "../../../../public/Images/healthGoal.webp";
import HealthGoal2 from "../../../../public/Images/healthGoal2.webp";
import HealthGoal3 from "../../../../public/Images/healthGoal3.webp";
import HealthGoal4 from "../../../../public/Images/healthGoal4.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function HealthProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="  py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات الصحة
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 md:p-5 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={HealthGoal}
                    alt="تطوير الوحدات الصحية "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تطوير الوحدات الصحية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    رفع كفاءة الوحدات الصحية وتوفير الأجهزة الطبية الحديثة.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={HealthGoal3}
                    alt=" دعم الاطقم الطبية  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    دعم الاطقم الطبية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توفير كوادر طبية مدربة لخدمة القرى.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={HealthGoal2}
                    alt=" القوافل الطبية  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    القوافل الطبية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تقديم خدمات الكشف والعلاج مجانًا.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={HealthGoal4}
                    alt="الإنارة العامة"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    خدمات الطوارئ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    دعم خدمات الإسعاف والاستجابة السريعة.
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
