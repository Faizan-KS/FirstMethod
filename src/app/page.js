import Home1CaseStudy from "@/components/case-study-section/Home1CaseStudy";
import Home1ContactSection from "@/components/contact-section/Home1ContactSection";
import Home1SeatureSection from "@/components/feature-section/Home1SeatureSection";
import Footer1 from "@/components/Footer/Footer1";
import Header5 from "@/components/header/Header5";
import Home3Banner from "@/components/banner/Home3Banner";
import IndustriesSection from "@/components/industries-section/IndustriesSection";
import Home1ParnerSection from "@/components/partner-sections/Home1ParnerSection";
import Home1processSection from "@/components/process-sections/Home1processSection";
import Home1ServiceSection from "@/components/service-section/Home1ServiceSection";
import Home1TestimonialSection from "@/components/testimonial-section/Home1TestimonialSection";
import Home5Footer from '@/components/Footer/Home5Footer'
import Home5ProcessSection from '@/components/process-sections/Home5ProcessSection'
import Home3TestimonialSection from '@/components/testimonial-section/Home3TestimonialSection'
import Home3BlogSection from '@/components/blog-section/Home3BlogSection'
import Home5BlogSection from '@/components/blog-section/Home5BlogSection'
import Home6Faq from '@/components/faq-section/Home6Faq'
import Home5FeatureSection from '@/components/feature-section/Home5FeatureSection'
import Home4FeatureSection from '@/components/feature-section/Home4FeatureSection'
import Home3Footer from "@/components/Footer/Home3Footer";
import Home1About from "@/components/about/Home1About";
import Home7About from "@/components/about/Home7About";
import Home5AboutSection from "@/components/about/Home5AboutSection";


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
