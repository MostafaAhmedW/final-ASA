import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { FaWheelchairMove } from "react-icons/fa6";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";
export default function SocialProtectionNumber() {
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
                تأثير محور الحماية الاجتماعية
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-6 text-center">
                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaUsers className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={3000000} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مستفيد من برامج الدعم
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaHandsHelping className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={1500000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    أسرة تم دعمها
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaWheelchairMove className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={45000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مستفيد من ذوي الهمم
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
