import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function TahyaMisrFields() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="bg-gray-100 py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              مجالات عمل الصندوق
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center p-4 md:p-5">
              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">الرعاية الصحية</h3>
                <p className="text-sm text-gray-600">
                  دعم المستشفيات وتوفير الخدمات الطبية للفئات الأولى بالرعاية.
                </p>
              </div>

              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">التنمية العمرانية</h3>
                <p className="text-sm text-gray-600">
                  تطوير القرى وتحسين البنية التحتية والسكن.
                </p>
              </div>

              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">الدعم الاجتماعي</h3>
                <p className="text-sm text-gray-600">
                  مساعدة الأسر الأكثر احتياجًا وتحقيق الحماية الاجتماعية.
                </p>
              </div>

              <div className="bg-white border border-[#318160]/35 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">التمكين الاقتصادي</h3>
                <p className="text-sm text-gray-600">
                  توفير فرص عمل ودعم المشروعات الصغيرة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
