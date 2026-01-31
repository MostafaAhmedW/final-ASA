import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function TahyaMisrImplementation() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="bg-white py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-12 text-center md:text-right">
              آلية تنفيذ المشروعات
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">01</span>
                <h3 className="font-semibold mt-4 mb-2"> تحديد الاحتياجات </h3>
                <p className="text-sm text-gray-600">
                  دراسة أوضاع القرى الأكثر احتياجًا وتحديد أولويات التدخل
                  التنموي.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">02</span>
                <h3 className="font-semibold mt-4 mb-2"> التخطيط والتنسيق </h3>
                <p className="text-sm text-gray-600">
                  التنسيق بين الجهات المعنية لضمان تنفيذ المشروعات بكفاءة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">03</span>
                <h3 className="font-semibold mt-4 mb-2"> تنفيذ المشروعات </h3>
                <p className="text-sm text-gray-600">
                  تنفيذ الأعمال وفقًا للخطط المعتمدة والجداول الزمنية المحددة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">04</span>
                <h3 className="font-semibold mt-4 mb-2">المتابعة والاستدامة</h3>
                <p className="text-sm text-gray-600">
                  متابعة النتائج وضمان استدامة الخدمات وتحسين جودة الحياة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
