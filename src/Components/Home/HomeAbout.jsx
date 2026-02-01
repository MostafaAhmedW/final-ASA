import React from "react";
import aboutImage from "../../../public/Images/about hero.webp";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function HomeAbout() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className=" py-20  ">
          <div className="container  mx-auto py-12 md:px-10  ">
            <div className=" grid grid-cols-12 gap-4 md:gap-10 px-1.5 ">
              <div className="col-span-12 md:col-span-6 order-1 md:order-2 md:text-right ">
                <h2 className="  md:text-right text-3xl font-bold py-6 text-[#318160] mb-2 relative">
                  ما هي مبادرة حياة كريمة؟
                </h2>

                <div className="space-y-6">
                  <p className=" font-light leading-relaxed ">
                    مبادرة حياة كريمة هي مشروع قومي أطلقه فخامة الرئيس عبد
                    الفتاح السيسي بهدف تطوير قرى الريف المصري وتحسين جودة الحياة
                    للمواطنين من خلال توفير الخدمات الأساسية وفرص العمل.
                  </p>

                  <p className=" font-light leading-relaxed ">
                    يتشارك صندوق تحيا مصر مع مؤسسات الدولة والمجتمع المدني
                    والقطاع الخاص كداعم وممول لمشروعات اجتماعية وصحية وتنمية
                    عمرانية وتمكين اقتصادي، بهدف رفع المعاناة عن الفئات الأكثر
                    احتياجًا.
                  </p>

                  <Link
                    to="/about"
                    className="inline-block mt-6 bg-[#318160] hover:bg-[#20684a]   py-2 px-2.5 rounded-tr-2xl rounded-bl-2xl  text-white font-bold duration-500 ease-out "
                  >
                    لمزيد من التفاصيل →
                  </Link>
                </div>
              </div>

              <div className=" col-span-12 md:col-span-6 order-2 md:order-2 flex justify-center items-center">
                <img
                  src={aboutImage}
                  alt="Community"
                  className="w-full rounded-lg shadow-md h-80 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
