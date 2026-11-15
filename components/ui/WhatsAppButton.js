import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/constants/constant";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ children = "Chat via WhatsApp", ...props }) {
  return (
    <Button href={whatsappUrl} {...props}>
      <MessageCircle aria-hidden="true" className="h-[1.25em] w-[1.25em]" />
      {children}
    </Button>
  );
}
