import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function SustainableDevelopmentImplementation() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-12 text-center md:text-right">
              آلية تنفيذ مشروعات التنمية المستدامة
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">01</span>
                <h3 className="font-semibold mt-4 mb-2"> دراسة البيئة </h3>
                <p className="text-sm text-gray-600">
                  تحليل الوضع البيئي الحالي.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">02</span>
                <h3 className="font-semibold mt-4 mb-2"> تنفيذ المشروعات </h3>
                <p className="text-sm text-gray-600">
                  تطبيق حلول صديقة للبيئة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">03</span>
                <h3 className="font-semibold mt-4 mb-2"> التوعية المجتمعية </h3>
                <p className="text-sm text-gray-600">نشر الوعي البيئي.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">04</span>
                <h3 className="font-semibold mt-4 mb-2"> الاستدامة </h3>
                <p className="text-sm text-gray-600">
                  ضمان استمرارية المشروعات.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
