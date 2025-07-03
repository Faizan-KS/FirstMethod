"use client";
import toast from "react-hot-toast";
import ThrowableItems from "@/utils/ThrowableItems";
import Counter from "../common/Counter";
import { useRef, useState } from "react";

const Home1ContactSection = () => {
  const ref3 = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      services: Array.from(
        form.querySelectorAll("input[type='checkbox']:checked")
      ).map((input) => input.value),
    };

    const loadingToast = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/email_service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Server responded with an error.");
      }

      const result = await res.json();

      setStatus("Message sent!");
      toast.success("Message sent successfully!", { id: loadingToast });
      form.reset(); // Reset form if you like
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
      toast.error("Failed to send message.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <div className="home1-contact-section">
        <div className="container">
          <div className="gy-md-5 gy-4">
            <div
              className="wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-area">
                <div className="section-title white mb-50">
                  <span>Free Consultation</span>
                  <h2>Start With Clarity – Let’s Talk</h2>
                  <p>Caption</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-65 wow animate fadeInRight">
              <div
                className="col-lg-10 col-md-7"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="contact-form-wrap">
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4 mb-40">
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Full name</label>
                          <input
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Company</label>
                          <input
                            name="company"
                            type="text"
                            placeholder="Company"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Company Email</label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner2">
                          
                          <div className="row">
                            <div className="col-md-6">
                              <h7 className="">Technical</h7>
                              <ul>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech1"
                                      name="services"
                                      value="IT Consulting"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech1"
                                    >
                                      IT Consulting
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech2"
                                      name="services"
                                      value="UI/UX Design"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech2"
                                    >
                                      UI/UX Design
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech3"
                                      name="services"
                                      value="Cloud Solution"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech3"
                                    >
                                      Cloud Solution
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech4"
                                      name="services"
                                      value="AI & Machine Learning"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech4"
                                    >
                                      AI & Machine Learning
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech5"
                                      name="services"
                                      value="Technical Support"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech5"
                                    >
                                      Technical Support
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="tech6"
                                      name="services"
                                      value="DevOps Services"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tech6"
                                    >
                                      DevOps Services
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            
                            <div className="col-md-6">
                              <h7>Non-Technical</h7>
                              <ul>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="nontech1"
                                      name="services"
                                      value="Branding"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="nontech1"
                                    >
                                      Branding
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="nontech2"
                                      name="services"
                                      value="Strategy"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="nontech2"
                                    >
                                      Strategy
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="nontech3"
                                      name="services"
                                      value="Lead Generation"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="nontech3"
                                    >
                                      Lead Generation
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="nontech4"
                                      name="services"
                                      value="Growth"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="nontech4"
                                    >
                                      Growth
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Your message here"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="primary-btn1"
                    >
                      <span>
                        Submit
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>
                        Submit
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="contact-form-wrap style-2">
                <div className="section-title three text-center">
                  <h2>Collaborate with Us!</h2>
                  <p>
                    We’re excited to hear from you! Whether you have a question
                    about our services, want to discuss a new project.
                  </p>
                </div>
                <svg
                  className="divider"
                  height={6}
                  viewBox="0 0 696 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM691 3.5L696 5.88675V0.113249L691 2.5V3.5ZM4.5 3.5H691.5V2.5H4.5V3.5Z" />
                </svg>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Full Name</label>
                        <input name="fullName"
                            type="text"
                            required placeholder="Mr. Daniel" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Company</label>
                        <input name="company"
                            type="text" placeholder="Egenslab" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Company Email</label>
                        <input name="email"
                            type="email"
                            required placeholder="info@example.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Phone</label>
                        <input name="phone"
                            type="text"
                            required placeholder="+99 087 *** ** ***" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner2">
                        <div className="row">
                          {/* Technical Services */}
                          <div className="">
                            <h7 className="">Technical</h7>
                            <ul>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech1"
                                    name="services"
                                    value="IT Consulting"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech1"
                                  >
                                    IT Consulting & Development
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech2"
                                    name="services"
                                    value="UI/UX Design"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech2"
                                  >
                                    UI/UX Design
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech3"
                                    name="services"
                                    value="Cloud Solution"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech3"
                                  >
                                    Cloud Solution
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech4"
                                    name="services"
                                    value="AI & Machine Learning"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech4"
                                  >
                                    AI & Machine Learning
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech5"
                                    name="services"
                                    value="Technical Support"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech5"
                                  >
                                    Technical Support
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="tech6"
                                    name="services"
                                    value="DevOps Services"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="tech6"
                                  >
                                    DevOps Services
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>

                          {/* Non-Technical Services */}
                          <div className="">
                            <h7>Non-Technical</h7>
                            <ul>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nontech1"
                                    name="services"
                                    value="Branding"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="nontech1"
                                  >
                                    Branding
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nontech2"
                                    name="services"
                                    value="Strategy"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="nontech2"
                                  >
                                    Sales & Growth Strategy
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nontech3"
                                    name="services"
                                    value="Lead Generation"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="nontech3"
                                  >
                                    Lead Generation
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nontech4"
                                    name="services"
                                    value="Growth"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="nontech4"
                                  >
                                    Marketing
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-20">
                      <div className="form-inner">
                        <label>Message</label>
                        <textarea
                          name="message"
                            placeholder="Your message here"
                            required
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-inner2 two">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="contactCheck22"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contactCheck22"
                          >
                            By submitting, you will agree our{" "}
                            <span>privacy-policy &amp; terms conditions</span>.
                          </label>
                        </div>
                      </div> */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="primary-btn1"
                  >
                    <span>
                      Submit
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span>
                      Submit
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home1-company-info-section mb-80">
        <div className="container">
          <div
            className="row mb-50 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span>Company Info</span>
                <h2>Number of Key</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-xl-5 col-lg-6 col-md-7 d-md-block d-none wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="feature-wrap" id="feature-wrap">
                <div className="title-area">
                  <h3>Grow Your Business on Digital Platform.</h3>
                </div>

                <ThrowableItems />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-5 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-wrap">
                <div className="counter-content-area">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/folder-icon.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    <div className="number">
                      <Counter
                        start={0}
                        end={10}
                        speed={50}
                        forwardedRef={ref3}
                        as="h2"
                        className="counter"
                      />
                      <span>K+</span>
                    </div>
                    <p>Succesfully Project Delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home1ContactSection;

{
  /* <span className="throwable-item">Machine Learning</span>
                                <span className="pink throwable-item">Professional Expert</span>
                                <span className="blue throwable-item">06 Global Branches</span>
                                <span className="green throwable-item">99% Success</span>
                                <span className="throwable-item">Data Analytics</span>
                                <span className="light-blue throwable-item">Product Design</span>
                                <span className="light-green throwable-item">IT Consulting</span> */
}
