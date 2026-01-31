import React from "react";
import sun1 from "../../../../public/Images/sun1.webp";
import water2 from "../../../../public/Images/water2.webp";
import tree from "../../../../public/Images/tree.webp";
import load from "../../../../public/Images/load.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";
export default function SustainableDevelopmentProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات التعليم
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={sun1}
                    alt="الطاقة الشمسية"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    الطاقة الشمسية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    استخدام الطاقة المتجددة في القرى.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={water2}
                    alt="   ترشيد المياه  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    ترشيد المياه
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تطوير شبكات المياه وتقليل الفاقد.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={tree}
                    alt="  دعم الطلاب   "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">التشجير</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    زيادة المساحات الخضراء.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={load}
                    alt=" إعادة التدوير"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    إعادة التدوير
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    إدارة المخلفات بطرق صديقة للبيئة.
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
