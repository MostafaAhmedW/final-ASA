import React from "react";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function AxesIntro() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-16 md:py-20 ">
          <div className="container  md:px-10 mx-auto">
            <div className="">
              <h2 className=" text-center md:text-right text-3xl font-bold text-[#318160] mb-10 ">
                محاور التنمية في حياة كريمة
              </h2>

              <div className="space-y-4 md:space-y-4 text-center md:text-right flex flex-col ">
                <p className="font-normal text-gray-600 leading-relaxed  mx-auto max-w-3xl md:mx-0">
                  تقوم مبادرة حياة كريمة على مجموعة من المحاور التنموية
                  المتكاملة، التي تهدف إلى تحسين جودة الحياة للمواطن المصري، من
                  خلال التدخل في مختلف الجوانب الاقتصادية والاجتماعية والخدمية،
                  بما يضمن تنمية شاملة ومستدامة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
