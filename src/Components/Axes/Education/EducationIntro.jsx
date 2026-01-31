import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EducationIntro() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20 ">
          <div className="container md:px-10 mx-auto">
            <div className="">
              <h2 className=" text-center md:text-right text-3xl font-bold text-[#318160] mb-6 md:mb-4 ">
                عن محور التعليم
              </h2>

              <div className="space-y-4 md:space-y-1 text-center md:text-right flex flex-col ">
                <p className="font-normal text-gray-600 leading-loose  mx-auto max-w-3xl md:mx-0 p-4 md:p-5">
                  يهدف محور التعليم في مبادرة حياة كريمة إلى تحسين جودة العملية
                  التعليمية داخل القرى الأكثر احتياجًا، من خلال تطوير المدارس،
                  وتوفير بيئة تعليمية آمنة، ودعم الطلاب والمعلمين بما يسهم في
                  بناء أجيال قادرة على المشاركة في التنمية المستدامة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
