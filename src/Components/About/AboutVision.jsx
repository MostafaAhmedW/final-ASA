import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function AboutVision() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="bg-gray-100 py-20">
          <div className="container md:px-10 mx-auto">
            <h2
              aria-label="رؤيتنا ورسالتنا"
              className=" text-center md:text-right text-3xl font-bold mb-10 text-[#318160] "
            >
              رؤيتنا ورسالتنا
            </h2>

            <div className="grid md:grid-cols-2 gap-10 p-4 md:p-5 ">
              <div className="p-8 rounded-2xl bg-white   order-1 md:order-1 shadow-sm border border-[#318160]/35 ">
                <h3 className="font-semibold mb-4 text-center text-lg text-[#07000B] ">
                  رؤيتنا
                </h3>
                <p className="leading-relaxed text-center text-sm font-light">
                  بناء مجتمع متكامل يتمتع فيه كل مواطن بحياة كريمة ومستوى معيشي
                  لائق، من خلال تنمية مستدامة تعتمد على العدالة الاجتماعية
                  وتكافؤ الفرص.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white  order-2 md:order-2 shadow-sm border border-[#318160]/35 ">
                <h3 className="font-semibold mb-4 text-center text-lg text-[#07000B]">
                  رسالتنا
                </h3>
                <p className="leading-relaxed text-center text-sm font-light">
                  العمل على تحسين جودة الحياة للفئات الأكثر احتياجًا في القرى
                  والمناطق المهمشة، من خلال تنفيذ مشروعات تنموية شاملة في مجالات
                  الصحة والتعليم والبنية التحتية والحماية الاجتماعية، وبما يحقق
                  التنمية المستدامة ويعزز كرامة الإنسان.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
