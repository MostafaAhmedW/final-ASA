import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

const contactSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  email: z.string().email("بريد إلكتروني غير صالح"),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="py-20 bg-white">
          <div className="container md:px-10 mx-auto">
            {/* Header */}
            <div className="mb-10 text-center md:text-right">
              <h1 className="text-3xl md:text-4xl font-bold text-[#318160] mb-4">
                تواصل معنا
              </h1>
              <p className="text-gray-600 max-w-2xl md:mr-0 mx-auto">
                يسعدنا تلقي استفساراتكم ومقترحاتكم حول مبادرة حياة كريمة.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    الاسم الكامل
                  </label>
                  <input
                    {...register("name")}
                    placeholder="اكتب اسمك"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition
                focus:ring-2 focus:ring-[#318160]/40
                ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    البريد الإلكتروني
                  </label>
                  <input
                    {...register("email")}
                    placeholder="example@email.com"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition
                focus:ring-2 focus:ring-[#318160]/40
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    رسالتك
                  </label>
                  <textarea
                    rows="5"
                    {...register("message")}
                    placeholder="اكتب رسالتك هنا..."
                    className={`w-full rounded-xl border px-4 py-3 outline-none resize-none transition
                focus:ring-2 focus:ring-[#318160]/40
                ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#318160] text-white py-3 rounded-xl font-semibold
              hover:bg-[#276a52] transition disabled:opacity-70"
                >
                  إرسال الرسالة
                </button>
              </form>

              {/* Info */}
              <div className="space-y-6">
                {[
                  { icon: MapPin, text: "القاهرة – جمهورية مصر العربية" },
                  { icon: Phone, text: "16000" },
                  { icon: Mail, text: "info@hayakarima.eg" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl shadow-sm"
                  >
                    <item.icon className="text-[#318160] w-6 h-6" />
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
