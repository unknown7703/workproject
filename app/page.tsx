import Hero from "@/components/home/Hero";
import FeaturesBenefits from "@/components/home/Feature";
import BentoGrid from "@/components/home/BentoGrid";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
   <div><Hero/>
   <FeaturesBenefits/>
   <BentoGrid/>
   <ContactSection/>
   <Footer/>
   </div>

  );
}
