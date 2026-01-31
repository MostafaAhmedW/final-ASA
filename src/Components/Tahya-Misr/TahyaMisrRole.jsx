import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function TahyaMisrRole() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 ">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-center md:text-right text-3xl font-bold text-[#318160] mb-10">
              دور صندوق تحيا مصر في مبادرة حياة كريمة
            </h2>

            <div className="grid md:grid-cols-3 gap-8 p-4 md:p-5">
              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl text-center shadow-sm">
                <h3 className="font-semibold mb-2">الدعم التمويلي</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  المساهمة في تمويل مشروعات البنية التحتية والخدمات الأساسية
                  داخل القرى.
                </p>
              </div>

              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl text-center shadow-sm">
                <h3 className="font-semibold mb-2">تنفيذ المشروعات</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  تنفيذ مشروعات في الصحة والتعليم والإسكان وتحسين مستوى المعيشة.
                </p>
              </div>

              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl text-center shadow-sm">
                <h3 className="font-semibold mb-2">الشراكات</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  التعاون مع الوزارات والهيئات والمجتمع المدني لتحقيق التنمية
                  المستدامة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
