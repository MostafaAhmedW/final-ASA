import React from "react";
import school1 from "../../../../public/Images/schooProject.webp";
import school2 from "../../../../public/Images/school2.webp";
import school3 from "../../../../public/Images/school3.webp";
import school4 from "../../../../public/Images/school4.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EducationProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات التعليم
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 md:p-5 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={school1}
                    alt="تطوير المدارس "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تطوير المدارس
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    رفع كفاءة المدارس وتحديث البنية التحتية التعليمية داخل
                    القرى.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={school2}
                    alt="  الفصول الدراسية  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    إنشاء وتطوير الفصول
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    إنشاء فصول دراسية جديدة وتقليل الكثافة الطلابية.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={school3}
                    alt="  دعم الطلاب   "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    دعم الطلاب
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توفير الأدوات المدرسية والدعم التعليمي للطلاب غير القادرين.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={school4}
                    alt=" تدريب المعلمين "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تدريب المعلمين
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تطوير مهارات المعلمين وتعزيز أساليب التعليم الحديثة.
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
