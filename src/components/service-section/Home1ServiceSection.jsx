import Link from 'next/link'
import React from 'react'

const Home1ServiceSection = () => {
  return (
    <div className="home1-service-section">
      <div className="container">
        <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12">
            <div className="section-title white">
              <span>Our Services</span>
              <h2 className=''>Full-Stack Services, Built for Growth</h2>
              <p>One team. All the services you need to launch, grow, and thrive.</p>
            </div>
          </div>
        </div>
        <div className="row gy-lg-5 gy-4">
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/app-development">Product & <br/>App Development</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/html-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/react-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We build high-performing digital products. From MVPs to full-scale platforms using the latest technologies and agile delivery.</p>
              <Link href="/service/app-development" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/web-development">Website<br />Development</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/figma-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/xd-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/zepline-icon.svg" alt="" /></li>
              </ul>
              <p>Fast, Responsive and beautifully designed websites that don’t just look good, They perform efficiently.</p>
              <Link href="/service/web-development" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/bussiness-analysis">Bussiness & <br />Product Strategy</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/node-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/d3-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/graphql-icon.svg" alt="" /></li>
              </ul>
              <p>From market research to product roadmaps, we help shape ideas into validated and scalable ventures.</p>
              <Link href="/service/bussiness-analysis" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/product-design">UI/UX &<br />Product Design</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We design with users in mind with clean interfaces, smooth flows, and delightful experiences that drive engagement.</p>
              <Link href="/service/product-design" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/consulting">Growth & Tech<br />Consulting</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>Tech stack decisions, growth loops, automation — we advise you on what to build, when, and why.</p>
              <Link href="/service/consulting" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/app-support">Ongoing Support & <br />Optimization</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/html-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We don’t disappear after launch. We support, maintain, and continuously improve your product post-release.</p>
              <Link href="/service/app-support" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">AI Automation <br/> & Data Insights</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/node-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/graphql-icon.svg" alt="" /></li>
              </ul>
              <p>Leverage AI and automation to streamline operations, uncover insights, and create smarter products.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Branding & <br/>Creative Design</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/support-icon2.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/support-icon3.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/support-icon4.svg" alt="" /></li>
              </ul>
              <p>We craft bold, memorable brand identities that connect with your audience. From logo to language to launch visuals.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home1ServiceSection
