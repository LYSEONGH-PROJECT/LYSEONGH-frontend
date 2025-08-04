
import "@/app/globals.css";
import { Navbar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";
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

