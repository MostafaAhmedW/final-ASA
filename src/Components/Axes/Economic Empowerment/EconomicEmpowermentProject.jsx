import React from "react";
import img1 from "../../../../public/Images/economi1.webp";
import img2 from "../../../../public/Images/economi2.webp";
import img3 from "../../../../public/Images/economi3.webp";
import img4 from "../../../../public/Images/economi4.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات التمكين الاقتصادي
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 md:p-5 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img1}
                    alt=" المشروعات الصغيرة "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    المشروعات الصغيرة
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    دعم وتمويل المشروعات الإنتاجية للأسر والشباب داخل القرى.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img2}
                    alt="   التدريب المهني "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    التدريب المهني
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تأهيل الشباب بمهارات عملية تواكب احتياجات سوق العمل.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img3}
                    alt="  تمكين المرأة  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    تمكين المرأة
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    دعم السيدات المعيلات من خلال مشروعات إنتاجية مستدامة.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img4}
                    alt=" التمويل متناهي الصغر"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    التمويل متناهي الصغر
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تقديم قروض ميسرة تساعد الأسر على بدء مشروعات مدرة للدخل.
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
