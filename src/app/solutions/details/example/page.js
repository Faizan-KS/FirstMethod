"use client";
import React, { useMemo } from "react";
import Home5Footer from "@/components/Footer/Home5Footer";
import Header3 from "@/components/header/Header3";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Header5 from "@/components/header/Header5";
import Home1ContactSection from "@/components/contact-section/Home1ContactSection";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const ServiceDetailsPage = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".post-slider-next",
        prevEl: ".post-slider-prev",
      },
    };
  }, []);
  return (
    <div>
      <Header5 />

      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container mt-65">
          <section className="hire mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Flutter Development</h2>
              <p>
                Flutter is Google's UI toolkit for building natively compiled applications for
                mobile, web, and desktop from a single codebase.
              </p>
              <ul>
                <li>Fast development with hot reload</li>
                <li>Cross-platform native performance</li>
                <li>Beautiful, customizable UIs</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src="/flutter-phone-mockup.png" alt="Flutter App Preview" className="img-fluid" style={{ maxHeight: '400px' }} />
            </div>
          </div>
        </section>

        {/* Section 2: Our Talent */}
        <section className="mb-5">
          <h2>🌟 Work with Our Flutter Experts</h2>
          <p>
            Our Flutter developers bring deep expertise and follow a refined development process to ensure smooth delivery. Here's how we approach your project:
          </p>
          <ul>
            <li>📋 Requirements analysis & tech consultation</li>
            <li>🎨 UI/UX design aligned with your brand</li>
            <li>🛠️ Modular and test-driven Flutter development</li>
            <li>🔍 Rigorous QA & cross-platform testing</li>
            <li>🚀 Deployment, support & performance monitoring</li>
          </ul>
          <p>
            To get started or view detailed profiles, please reach out to us directly using the contact form below.
          </p>
        </section>
        </div>
      </div>
      <Home1ContactSection />
      {/* Service Details Page End */}
      <Home5Footer />
    </div>
  );
};

export default ServiceDetailsPage;
