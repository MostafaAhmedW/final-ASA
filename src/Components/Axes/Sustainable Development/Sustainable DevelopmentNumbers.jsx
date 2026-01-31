import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";
import { FaLeaf, FaSolarPanel } from "react-icons/fa";
import { GiGreenhouse } from "react-icons/gi";
export default function SustainableDevelopmentNumbers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="" ref={ref}>
          <div className="relative bg-center bg-cover bg-[url('/Images/layout.webp')]">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">
              <h2 className="text-center text-3xl font-bold py-6 text-white mb-10">
                تأثير محور التنمية المستدامة
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-6 text-center">
                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaLeaf className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={2500} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مشروع صديق للبيئة
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaSolarPanel className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={1200} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    منشأة تعمل بالطاقة النظيفة
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <GiGreenhouse className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={500} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مبادرة بيئية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
