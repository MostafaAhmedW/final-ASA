import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function HealthImplement() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-12 text-center md:text-right">
              آلية تنفيذ مشروعات الصحة
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">01</span>
                <h3 className="font-semibold mt-4 mb-2">
                  تقييم الاحتياجات الصحية
                </h3>
                <p className="text-sm text-gray-600">
                  دراسة المناطق الأكثر حاجة للخدمات الصحية وتحديد الأولويات.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">02</span>
                <h3 className="font-semibold mt-4 mb-2">
                  التخطيط الطبي والتنسيق
                </h3>
                <p className="text-sm text-gray-600">
                  التنسيق مع المستشفيات والجهات الطبية لتوفير الرعاية والخدمات.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">03</span>
                <h3 className="font-semibold mt-4 mb-2">التنفيذ والمتابعة</h3>
                <p className="text-sm text-gray-600">
                  تنفيذ المشروعات الصحية ومتابعة جودة الخدمات الطبية المقدمة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">04</span>
                <h3 className="font-semibold mt-4 mb-2"> الاستدامة الصحية </h3>
                <p className="text-sm text-gray-600">
                  ضمان استمرارية المشروعات الصحية وصيانة المراكز وتوفير
                  المستلزمات.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
