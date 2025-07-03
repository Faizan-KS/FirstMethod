import Home3Banner from "@/components/banner/Home3Banner";
import Home1ContactSection from "@/components/contact-section/Home1ContactSection";
import Home6Faq from '@/components/faq-section/Home6Faq';
import Home4FeatureSection from '@/components/feature-section/Home4FeatureSection';
import Home5Footer from '@/components/Footer/Home5Footer';
import Header5 from "@/components/header/Header5";
import Home5ProcessSection from '@/components/process-sections/Home5ProcessSection';
import Home1ServiceSection from "@/components/service-section/Home1ServiceSection";
import Home3TestimonialSection from '@/components/testimonial-section/Home3TestimonialSection';


export default function NewHome() {
  return (
    <>
      <Header5 />
      <Home3Banner />
      <Home4FeatureSection />
      <Home1ServiceSection />
      <Home5ProcessSection />
      <Home3TestimonialSection />
      {/* <Home3BlogSection /> */}
      {/* <Home5BlogSection /> */}
      <Home6Faq />
      <Home1ContactSection />
      <Home5Footer />
    </>
  );
}
