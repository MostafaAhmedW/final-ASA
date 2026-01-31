import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EducationImplement() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-12 text-center md:text-right">
              آلية تنفيذ مشروعات التعليم
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-5">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">01</span>
                <h3 className="font-semibold mt-4 mb-2"> حصر الاحتياجات </h3>
                <p className="text-sm text-gray-600">
                  تقييم أوضاع المدارس والفصول الدراسية.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">02</span>
                <h3 className="font-semibold mt-4 mb-2"> التطوير والإنشاء </h3>
                <p className="text-sm text-gray-600">
                  تطوير المدارس وبناء فصول جديدة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">03</span>
                <h3 className="font-semibold mt-4 mb-2">
                  دعم العملية التعليمية
                </h3>
                <p className="text-sm text-gray-600">
                  توفير الأدوات التعليمية والتقنيات الحديثة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[#318160]/45 transition hover:shadow-md border border-[#318160]/30">
                <span className="text-[#318160] text-3xl font-bold">04</span>
                <h3 className="font-semibold mt-4 mb-2">الاستدامة التعليمية</h3>
                <p className="text-sm text-gray-600">
                  ضمان استمرارية جودة التعليم.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
