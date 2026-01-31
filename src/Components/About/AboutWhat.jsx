import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function AboutWhat() {
  return (
    <>

      <SectionWrapper>
        <section dir="rtl" className=" py-20 ">
          <div className="container md:px-10 mx-auto ">

            <FaHandHoldingHeart className="text-3xl mx-auto mb-3 text-[#318160]" />

            <h2 className=" text-center md:text-right text-3xl font-bold mb-10 text-[#318160] ">
              ماذا نفعل
            </h2>

            <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-8  ">

              <div className="bg-white p-6 rounded-2xl border border-[#318160]/40 hover:shadow-md  shadow-[#318160]/35 shadow-sm  transition text-center hover:scale-[1.03] duration-300 ease-out">
                <h3 className="font-semibold mb-3 text-[#07000B]  ">
                  الدعم الغذائي
                </h3>
                <p className="leading-relaxed text-center text-sm font-light ">
                  توفير المواد الغذائية الأساسية للأسر الأكثر احتياجًا،
                  والمساهمة في تحقيق الأمن الغذائي، خاصة في المناطق النائية
                  والقرى الأكثر فقرًا.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#318160]/40 hover:shadow-md  shadow-[#318160]/35 shadow-sm  transition text-center hover:scale-[1.03] duration-300 ease-out">
                <h3 className="font-semibold mb-3 text-[#07000B]">
                  الرعاية الصحية
                </h3>
                <p className="leading-relaxed text-center text-sm font-light ">
                  دعم المنظومة الصحية من خلال تطوير الوحدات الصحية، وتوفير
                  القوافل الطبية، وإجراء العمليات الجراحية، وتقديم الخدمات
                  العلاجية للمواطنين غير القادرين.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#318160]/40 hover:shadow-md  shadow-[#318160]/35 shadow-sm  transition text-center hover:scale-[1.03] duration-300 ease-out">
                <h3 className="font-semibold mb-3 text-[#07000B] ">التعليم</h3>
                <p className="leading-relaxed text-center text-sm font-light ">
                  تحسين جودة التعليم من خلال تطوير المدارس، وتوفير المستلزمات
                  التعليمية، ودعم الطلاب غير القادرين، بما يضمن بيئة تعليمية
                  آمنة ومتكافئة.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#318160]/40 hover:shadow-md  shadow-[#318160]/35 shadow-sm  transition text-center hover:scale-[1.03] duration-300 ease-out">
                <h3 className="font-semibold mb-3 text-[#07000B] ">
                  التنمية الاقتصادية
                </h3>
                <p className="leading-relaxed text-center text-sm font-light ">
                  تمكين الأسر اقتصاديًا عبر توفير فرص عمل، ودعم المشروعات
                  الصغيرة والمتوسطة، والمساهمة في خلق مصادر دخل مستدامة للأسر
                  الأكثر احتياجًا.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
