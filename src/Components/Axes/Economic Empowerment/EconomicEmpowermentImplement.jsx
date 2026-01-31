import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentImplement() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-12 text-center md:text-right">
              آلية تنفيذ مشروعات التمكين الاقتصادي
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">01</span>
                <h3 className="font-semibold mt-4 mb-2"> دراسة الاحتياجات</h3>
                <p className="text-sm text-gray-600">
                  تحديد الفئات المستحقة ودراسة احتياجاتهم الاقتصادية.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">02</span>
                <h3 className="font-semibold mt-4 mb-2"> التمويل والدعم </h3>
                <p className="text-sm text-gray-600">
                  توفير التمويل متناهي الصغر والدعم المالي للمشروعات.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">03</span>
                <h3 className="font-semibold mt-4 mb-2"> التدريب والتأهيل </h3>
                <p className="text-sm text-gray-600">
                  تدريب المستفيدين على إدارة المشروعات وزيادة الإنتاج.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">04</span>
                <h3 className="font-semibold mt-4 mb-2">
                  الاستدامة الاقتصادية
                </h3>
                <p className="text-sm text-gray-600">
                  ضمان استمرارية المشروعات وتحقيق دخل مستدام.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
