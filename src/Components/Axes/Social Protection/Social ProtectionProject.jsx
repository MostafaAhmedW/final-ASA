import React from "react";
import img1 from "../../../../public/Images/social.webp";
import img2 from "../../../../public/Images/social2.webp";
import img3 from "../../../../public/Images/social3.webp";
import img4 from "../../../../public/Images/socia4.webp";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function SocialProtectionProject() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أبرز مشروعات الحماية الاجتماعية
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img1}
                    alt=" الدعم الغذائي  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    الدعم الغذائي
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توفير السلع الغذائية الأساسية للأسر المحتاجة.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img2}
                    alt="   الدعم النقدي   "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    الدعم النقدي
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تقديم مساعدات مالية لتحسين مستوى المعيشة.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img3}
                    alt="  دعم ذوي الهمم  "
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    دعم ذوي الهمم
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توفير الأدوات المدرسية والدعم التعليمي للطلاب غير القادرين.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col hover:shadow-[#318160]/45 border border-[#318160]/30">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={img4}
                    alt=" رعاية كبار السن"
                    className="w-full h-full object-center"
                  />
                </div>

                <div className="p-5 flex flex-col grow text-center">
                  <h3 className="font-semibold mb-2 text-[#07000B]">
                    رعاية كبار السن
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    توفير الرعاية المتكاملة لكبار السن ودعم احتياجاتهم الصحية
                    والمعيشية.
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
