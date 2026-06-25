import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Hablar por WhatsApp"
      className="premium-focus group fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-[#00fd5d] p-4 font-semibold text-white shadow-[0_18px_45px_rgba(7,17,31,0.28)] transition duration-700 hover:-translate-y-1 hover:bg-[#1fb85a] sm:bottom-7 sm:right-7 sm:px-5"
      href={contactInfo.whatsapp}
    >
      <span className="whatsapp-premium-pulse absolute inset-[-5px] -z-10 rounded-full border border-[#25D366]/95" />
      <span className="absolute inset-[-8px] -z-20 rounded-full bg-[#25D366]/10 blur-[2px]" />
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/18 backdrop-blur">
        <MessageCircle className="h-5 w-5" aria-hidden />
      </span>
    </a>
  );
}
