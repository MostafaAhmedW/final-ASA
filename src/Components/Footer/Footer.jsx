import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer dir="rtl" className="bg-[#0f3d2e] text-white pt-20">
        <div className="container mx-auto px-6 md:px-10">
          {/* Top */}
          <div className="grid gap-10 md:grid-cols-3 pb-10 border-b border-white/20 text-center md:text-right">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4">مبادرة حياة كريمة</h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-sm mx-auto md:mx-0">
                المبادرة القومية الأكبر لتحسين جودة الحياة في الريف المصري، من
                خلال تطوير البنية التحتية والخدمات الأساسية.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <NavLink to="/" className="hover:text-white transition">
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-white transition">
                    عن المبادرة
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/axes" className="hover:text-white transition">
                    محاور المبادرة
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-tahya-misr"
                    className="hover:text-white transition"
                  >
                    صندوق تحيا مصر
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="hover:text-white transition"
                  >
                    تواصل معنا
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold mb-4">تابعنا</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <div
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Facebook size={20} />
                </div>
                <div
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Twitter size={20} />
                </div>
                <div
                  aria-label="Youtube"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Youtube size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-xs md:text-sm text-white/60 py-6">
            © 2026 مبادرة حياة كريمة – مشروع تخرج
          </div>
        </div>
      </footer>
    </>
  );
}
