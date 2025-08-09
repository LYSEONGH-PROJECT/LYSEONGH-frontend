
import "@/app/globals.css";
import { Navbar } from "@/components/layout/public/nav-bar";
import { Footer } from "@/components/layout/public/footer";
import { WhatsappUs } from "@/components/features/WhatsappUs";

export default function PublicLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <WhatsappUs />
    </div>
  );
}

