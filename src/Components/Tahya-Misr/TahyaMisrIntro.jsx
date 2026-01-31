import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function TahyaMisrIntro() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20 ">
          <div className="container  md:px-10 mx-auto">
            <div className="">
              <h2 className=" text-center md:text-right text-3xl font-bold text-[#318160] mb-6 md:mb-4 ">
                عن صندوق تحيا مصر
              </h2>

              <div className="space-y-4 md:space-y-1 text-center md:text-right flex flex-col ">
                <p className="font-normal text-gray-600 leading-loose  mx-auto max-w-3xl md:mx-0">
                  تأسس صندوق تحيا مصر عام 2014 كصندوق وطني يهدف إلى دعم جهود
                  الدولة في تحقيق التنمية الشاملة، من خلال تنفيذ مشروعات خدمية
                  وتنموية تستهدف تحسين مستوى معيشة المواطنين، خاصة الفئات الأولى
                  بالرعاية.
                </p>

                <p className="font-normal text-gray-600 leading-loose  mx-auto max-w-3xl md:mx-0 p-4 md:p-5">
                  يعمل الصندوق بالتعاون مع مؤسسات الدولة والمجتمع المدني والقطاع
                  الخاص، ويساهم بشكل فعال في تنفيذ مبادرة حياة كريمة داخل القرى
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
