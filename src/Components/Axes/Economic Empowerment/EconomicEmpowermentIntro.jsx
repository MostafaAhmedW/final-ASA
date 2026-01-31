import React from "react";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentIntro() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20 ">
          <div className="container md:px-10 mx-auto">
            <div className="">
              <h2 className=" text-center md:text-right text-3xl font-bold text-[#318160] mb-6 md:mb-4 ">
                عن محور التمكين الاقتصادي
              </h2>

              <div className="space-y-4 md:space-y-1 text-center md:text-right flex flex-col ">
                <p className="font-normal text-gray-600 leading-loose  mx-auto max-w-3xl md:mx-0 p-4 md:p-5">
                  يهدف محور التمكين الاقتصادي في مبادرة حياة كريمة إلى تحسين
                  مستوى معيشة المواطنين داخل القرى الأكثر احتياجًا، من خلال دعم
                  المشروعات الصغيرة والمتوسطة، وتوفير فرص عمل حقيقية، وتنمية
                  المهارات الإنتاجية بما يحقق الاستقلال الاقتصادي والاستدامة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
