import React from "react";
// logo imges
import img1 from "../../../public/Images/img 1.webp";
import img2 from "../../../public/Images/img 2.webp";
import img3 from "../../../public/Images/img 3.webp";
import img4 from "../../../public/Images/img 4.webp";
import img5 from "../../../public/Images/img 5.webp";
import img6 from "../../../public/Images/img 6.webp";
import img7 from "../../../public/Images/img 7.webp";
import img8 from "../../../public/Images/img 8.webp";
import img9 from "../../../public/Images/img 9.webp";
import img10 from "../../../public/Images/img 10.webp";
import img11 from "../../../public/Images/img 11.webp";
import img12 from "../../../public/Images/img 12.webp";
import img13 from "../../../public/Images/img 13.webp";
import img14 from "../../../public/Images/img 14.webp";
import img15 from "../../../public/Images/img 15.webp";
import img16 from "../../../public/Images/img 16.webp";
import img17 from "../../../public/Images/img 17.webp";
import img18 from "../../../public/Images/img 18.webp";
import img19 from "../../../public/Images/img 19.webp";
import img20 from "../../../public/Images/img 20.webp";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";
import LogoLoop from "../LogoLoop";

export default function HomePartners() {
  const partnersLogos = [
    { src: img1, alt: "وزارة الشباب و الرياضة" },
    { src: img2, alt: "وزارة التعليم العالي والبحث العلمي" },
    { src: img3, alt: "وزارة الاتصالات و تكنولوجيا المعلومات" },
    { src: img4, alt: "وزارة الدولة للهجرة و شئون المصريين بالخارج" },
    { src: img13, alt: "صندوق تحيا مصر" },
    { src: img5, alt: "وزارة الثقافة" },
    { src: img6, alt: "جمهورية مصر العربية - وزارة البيئة" },
    { src: img7, alt: "جامعة الدلتا للعلوم و التكنولوجيا" },
    { src: img8, alt: "Midar" },
    { src: img9, alt: "وزارة التربية و التعليم و التعليم الفني" },
    { src: img10, alt: "Pfizer" },
    { src: img11, alt: "مؤسسة فودافون مصر للتنميةالمجتمع" },
    { src: img12, alt: "مؤسسة ابو هشيمة الخير" },
    {
      src: img14,
      alt: "الهيئة المصرية للشراء الموحد و الامداد و التموين الطبي و ادارة التكنولوجيا الطبية",
    },
    { src: img15, alt: "جامعة القاهرة" },
    { src: img16, alt: "وزارة البترول و الثروة المعدنية" },
    { src: img17, alt: "Unicef" },
    { src: img18, alt: "الاونروا" },
    { src: img19, alt: "Unido" },
    { src: img20, alt: "Anera" },
  ];
  return (
    <>
      <SectionWrapper>
        <section className="  py-20">
          <div className=" container py-12 px-6 mx-auto ">
            <h2 className="text-center text-3xl font-bold text-[#318160] mb-10 relative">
              شركاء النجاح
              <span className="absolute left-1/2 bg-[#318160] w-16 h-0.5 transform -translate-x-1/2 -bottom-4  block "></span>
            </h2>

            <div className=" py-10  ">
              <LogoLoop
                logos={partnersLogos}
                speed={60}
                direction="left"
                logoHeight={95}
                gap={60}
                pauseOnHover
                ariaLabel="شعارات الشركاء"
                fadeOut
                scaleOnHover="true"
                className="cursor-pointer"
              />
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
