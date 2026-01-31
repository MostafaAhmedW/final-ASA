import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function AboutIntro() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20 ">
          <div className="container  md:px-10 mx-auto">
            <div className="">
              <h2 className=" text-center md:text-right text-3xl font-bold text-[#318160] mb-10 ">
                عن مؤسسة حياة كريمة
              </h2>

              <div className="space-y-4 md:space-y-3 text-center md:text-right flex flex-col max-w-3xl mx-auto md:mx-0 ">
                <p className="font-light text-gray-600 leading-loose">
                  تأسست مؤسسة حياة كريمة في عام 2019، في إطار المبادرة الرئاسية
                  التي أطلقها فخامة الرئيس عبد الفتاح السيسي، بهدف تحسين مستوى
                  المعيشة للفئات الأكثر احتياجًا في جميع أنحاء الجمهورية.
                </p>

                <p className="font-light text-gray-600 leading-loose">
                  تعمل المؤسسة على تنفيذ مشروعات تنموية متكاملة تضمن توفير حياة
                  كريمة للمواطن المصري، من خلال تطوير البنية التحتية، ودعم
                  الخدمات الأساسية، وتحقيق العدالة الاجتماعية.
                </p>

                <p className="font-light text-gray-600 leading-loose">
                  وتسعى المؤسسة إلى إحداث تغيير حقيقي ومستدام في حياة المواطنين،
                  عبر شراكات فعالة مع مؤسسات الدولة والمجتمع المدني والقطاع
                  الخاص، بما يضمن وصول الدعم لمستحقيه وتحقيق التنمية الشاملة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
