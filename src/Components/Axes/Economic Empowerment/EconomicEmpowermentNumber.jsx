import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaStore, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentNumber() {
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
                تأثير محور التعليم
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-6 text-center">
                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaUsers className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={1200000} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مستفيد من برامج التمكين
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaStore className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={85000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مشروع صغير
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaBriefcase className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={400000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    فرصة عمل
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
