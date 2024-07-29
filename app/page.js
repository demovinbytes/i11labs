'use client'
import { useRef, useEffect, useState } from 'react';
import styles from "./page.module.css";
import Image from "next/image"
import Link from "next/link"
import Right from "../public/images/home/right.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bnrimage from "../public/images/home/new/dump truck it hero image@2x.webp";
import Bnrimage1 from "../public/images/home/new/feeds to leads hero bnr@2x.png";
import Bnrimage2 from "../public/images/home/new/know whereabouts crew hero bnr@2x.png";
import Bnrimage3 from "../public/images/home/new/how we serve you hero bnr@2x.png";
import MobBnrimage from "../public/images/home/new/dump truck it@2x.webp";
import MobBnrimage1 from "../public/images/home/new/feeds to leads m@2x.png";
import MobBnrimage2 from "../public/images/home/new/know whereabouts crew hero bnr m@2x.png";
import MobBnrimage3 from "../public/images/home/new/service offerings@2x.png";
import DTI from "../public/images/home/new/DumpTruckIt.png";
import FTL from "../public/images/home/new/Feeds To Leads.png";
import KWC from "../public/images/home/new/Know Whereabouts of Crew.png";
import React, { createRef } from "react";
import Scroll from "../components/scroll-to-top";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
import link from "../public/images/home/link.png";
import linkedin from "../public/images/home/linkedin.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "58px", right: "-50px" }}
      onClick={onClick}
    > <Image
        src="/images/home/right.svg"
        width={58}
        height={58}
        className="img-fluid arrow"
        title="Next"
        alt="Next arrow"

      /></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "58px", left: "-50px" }}
      onClick={onClick}
    >
      <Image
        src="/images/home/left.svg"
        width={58}
        height={58}
        className="img-fluid arrow"
        title="Prev"
        alt="Prev arrow"
      />
    </div>
  );
}


export default function Home() {

  const [checkLoader, setCheckLoader] = useState(false);
  useEffect(() => {
    requestAnimationFrame(animate)
  }, []);


  const animate = () => {
    if (checkLoader === false) {
      document.getElementById('carouselExampleFade').addEventListener('slide.bs.carousel', function () {
        const element = document.getElementById('carousel1');
        if (element) {
          if (element.classList.contains("carousalSliderRight")) {
            element.classList.remove("carousalSliderRight");
          }
          element.classList.add("carousalSliderleft");
        } else {
          console.error("Element with ID 'carousel1' not found.");
        }

        const element1 = document.getElementById('carousel2')
        if (element1.classList.contains("carousalSliderRight")) {
          element1.classList.remove("carousalSliderRight");
        }
        element1.classList.add("carousalSliderleft");


        const element2 = document.getElementById('carousel3')
        if (element2.classList.contains("carousalSliderRight")) {
          element2.classList.remove("carousalSliderRight");
        }
        element2.classList.add("carousalSliderleft");


        const element3 = document.getElementById('carousel4')
        if (element3.classList.contains("carousalSliderRight")) {
          element3.classList.remove("carousalSliderRight");
        }
        element3.classList.add("carousalSliderleft");
      });
    }
  };

  const customSlider2 = createRef();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const Power = [
    {
      img: "/images/home/DTI.jpg",
      title1: "DTI",
      title2: <text><b>D</b>ump<b>T</b>ruck<b>I</b>t</text>,
      title3: "The ultimate product with seamless and non-clunky interface for dump truck operations.",
      position1: 'order-first',
      position2: 'order-last'
    },
    {
      img: "/images/home/FTL.jpg",
      title1: "FTL",
      title2: <text><b>F</b>eeds <b>T</b>o <b>L</b>eads</text>,
      title3: "Automate lead generation with AI for targeted prospect identification and improved sales efficiency.",
      position1: 'order-last',
      position2: 'order-first',
      class: 'wrap',
    },

    {
      img: "/images/home/KWC.jpg",
      title1: "KWC",
      title2: <text><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</text>,
      title3: "Efficient delivery routes to facilitate optimized scheduling",
      position1: 'order-first',
      position2: 'order-last'
    },


  ];

  const items = [
    {
      title: 'Biju Nair',
      description: 'EVP & PRESIDENT',
      img: "/images/home/new/Biju Nair mob.png",
      mail: "www.bijunair.me",
      url: "/our-dna#biju"
    },
    {
      title: 'Gertrude Van Horn',
      description: 'CIO & TECHNOLOGY EXECUTIVE',
      img: "/images/home/new/gertrude-van-horn mob.png",
      mail: "www.gertrudevanhorn.com",
      url: "/our-dna#gvh"
    }

  ];

  const service = [
    { link: "#", content: "LOGISTICS", Image: Right },
    { link: "#", content: "TELECOMS", Image: Right },
    { link: "#", content: "BANKING, FINANCE & SECURITIES", Image: Right },
    { link: "#", content: "RETAIL", Image: Right },
    { link: "#", content: "EDUCATION", Image: Right }
  ]
  const Howweserveyou = [
    {
      imgurl: "/images/home/new/product oriented delivery.png",
      title: "Product Oriented Delivery",
      desc: "Execute Product Vision and Strategy",
      verticalborder: "verticalcolor",
      flag: true
    },
    {
      imgurl: "/images/home/new/end to end.png",
      title: "End to End",
      desc: "Deliverable based model",
      verticalborder: "verticalcolor",
      flag: true
    },
    {
      imgurl: "/images/home/new/tag team.png",
      title: "Tag Team",
      desc: "Co-development team",
      verticalborder: "",
      flag: false
    },

  ];


  const handleClick = (event) => {
    event.preventDefault();
  };
  const handleclickRight = () => {
    setCheckLoader(true);
    const element = document.getElementById('carousel1');
    if (element.classList.contains("carousalSliderRight")) {
      element.classList.remove("carousalSliderRight");
    }
    element.classList.add("carousalSliderleft");

    const element1 = document.getElementById('carousel2');
    if (element1.classList.contains("carousalSliderRight")) {
      element1.classList.remove("carousalSliderRight");
    }
    element1.classList.add("carousalSliderleft");

    const element2 = document.getElementById('carousel3');
    if (element2.classList.contains("carousalSliderRight")) {
      element2.classList.remove("carousalSliderRight");
    }
    element.classList.add("carousalSliderleft");

    const element3 = document.getElementById('carousel4');
    if (element3.classList.contains("carousalSliderRight")) {
      element3.classList.remove("carousalSliderRight");
    }
    element3.classList.add("carousalSliderleft");
    setCheckLoader(false);
  }
  const handleclickLeft = () => {
    setCheckLoader(true);
    const element = document.getElementById('carousel1')
    if (element.classList.contains("carousalSliderleft")) {
      element.classList.remove("carousalSliderleft");
    }
    element.classList.add("carousalSliderRight");

    const element1 = document.getElementById('carousel2')
    if (element1.classList.contains("carousalSliderleft")) {
      element1.classList.remove("carousalSliderleft");
    }
    element1.classList.add("carousalSliderRight");

    const element2 = document.getElementById('carousel3')
    if (element2.classList.contains("carousalSliderleft")) {
      element2.classList.remove("carousalSliderleft");
    }
    element2.classList.add("carousalSliderRight");
    const element3 = document.getElementById('carousel4')
    if (element3.classList.contains("carousalSliderleft")) {
      element3.classList.remove("carousalSliderleft");
    }
    element3.classList.add("carousalSliderRight");
    setCheckLoader(false);
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />

      {/* carousel */}
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
              <div className={`${styles.mobilehideindicator} carousel-indicators`}>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner" id="carouselbodysection" style={{ backgroundColor: "#191E23", height: "max-contant" }}>

                <div className="carousel-item active">
                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage} className="img-fluid" loading="eager" alt="DTI Banner" title='DumpTruckIt' />
                    </div>
                    <div className="carousel-caption p-5 carousalSliderleft" id="carousel1">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>DTI</h1>
                        <p className={`${styles.smallheading} mx-3`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
                      </div>
                      <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/dti-dumptruckit" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage} className="img-fluid" loading="eager" alt="DTI Banner" title='DumpTruckIt' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>DTI</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/dti-dumptruckit" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage} className="img-fluid" loading="eager" alt="DTI Banner" title='DumpTruckIt' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>DTI</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/dti-dumptruckit" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage1} className="img-fluid" loading="eager" alt="FTL Banner" title='Feeds To Leads' />
                    </div>
                    <div className="carousel-caption1 p-5 carousalSliderleft" id="carousel2">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>FTL</h1>
                        <p className={`${styles.smallheading} mx-3`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>Automate lead generation with AI for targeted prospect identification and improved sales efficiency.</p>
                      </div>
                      <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/feeds-to-leads" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage1} className="img-fluid" loading="eager" alt="FTL Banner" title='Feeds To Leads' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>FTL</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Automate lead generation with AI for targeted prospect identification and improved sales efficiency.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/feeds-to-leads" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage1} className="img-fluid w-100" loading="eager" alt="FTL Banner" title='Feeds To Leads' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>FTL</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Automate lead generation with AI for targeted prospect identification and improved sales efficiency.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/feeds-to-leads" className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="carousel-item">

                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage2} className="img-fluid" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    </div>
                    <div className="carousel-caption2 p-5 carousalSliderleft" id="carousel3">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                        <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>Efficient delivery routes to facilitate optimized scheduling.</p>
                      </div>
                      <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage2} className="img-fluid" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Efficient delivery routes to facilitate optimized scheduling.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage2} className="img-fluid w-100" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Efficient delivery routes to facilitate optimized scheduling.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="carousel-item">

                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage3} className="img-fluid" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    </div>
                    <div className="carousel-caption3 p-5 carousalSliderleft" id="carousel4">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                        <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>Your vision, <br />our execution.</p>
                      </div>
                      {/* <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div> */}
                    </div>

                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage3} className="img-fluid" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1">
                          <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                          <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Your vision, <br /> our execution.</p>
                        </div>
                        {/* <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div> */}
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage3} className="img-fluid w-100" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1">
                          <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                          <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Your vision,<br /> our execution.</p>
                        </div>
                        {/* <div className="pt-3"><button className="viewall2 ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink2">KNOW MORE</Link></button></div> */}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" onClick={() => { handleclickLeft() }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onClick={() => { handleclickRight() }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* Powered by intelligence */}
      <div className="container-fluid pt-md-5 pt-4" data-aos="fade-up">
        <div className="text-center">
          <h1 className={`${styles.head} mb-0`}>Powered by <span style={{ color: "#F71735" }}>i</span>ntelligence</h1>
        </div>
      </div>


      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>WHAT WE</h2>
              <h2 className={`${styles.heading} ps-4`}>HAVE BUILT</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>Our Products</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.para} pt-md-4 pt-2`}>
              Discover our innovative products designed to drive efficiency, enhance performance, and transform your business operations in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className='container py-lg-5 py-3 d-lg-block d-none'>
        <div className='row' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div style={{ borderRight: "1px solid  #C1D1E0" }}>
              <p className={`${styles.para1}`}>DTI</p>
              <p className={`${styles.para2}`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
              <p className={`${styles.para3}`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
              <div className="pt-xl-5 pt-0"><button className="viewall ps-0"><Link href="/dti-dumptruckit" className="viewallvoiletlink">KNOW MORE</Link></button></div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div style={{ borderRight: "1px solid  #C1D1E0" }}>
              <p className={`${styles.para1}`}>FTL</p>
              <p className={`${styles.para2}`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
              <p className={`${styles.para3}`}>Automate lead generation with AI for targeted prospect identification and improved sales efficiency.</p>
              <div className="pt-xl-3 pt-0"><button className="viewall ps-0" onClick={handleClick}><Link href="/feeds-to-leads" className="viewallvoiletlink">KNOW MORE</Link></button></div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <p className={`${styles.para1}`}>KWC</p>
            <p className={`${styles.para2}`}><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</p>
            <p className={`${styles.para3}`}>Efficient delivery routes to facilitate optimized scheduling</p>
            <div className="pt-xl-5 pt-4"><button className="viewall ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink">KNOW MORE</Link></button></div>
          </div>
        </div>

        <div className='row py-lg-5 py-3' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Link href="/dti-dumptruckit">
               <Image src={DTI} className='img-fluid' alt='DumpTruckIt' title='DumpTruckIt' />
            </Link>
          </div>

          <div className='col-lg-4 col-md-6 col-12 text-end'>
          <Link href="/feeds-to-leads">
            <Image src={FTL} className='img-fluid' alt='Feeds To Leads' title='Feeds To Leads' />
            </Link>
          </div>

          <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Image src={KWC} className='img-fluid' alt='Know Whereabouts of Crew' title='Know Whereabouts of Crew' />
          </div>
        </div>
      </div>

      <div className='container py-lg-5 py-4 d-block d-lg-none' data-aos="fade-up">
        <div className='row'>
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-body">
                  <p className={`${styles.para1}`}>DTI</p>
                  <p className={`${styles.para2}`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
                  <p className={`${styles.para3}`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
                  <div className="pt-md-2 pt-2"><button className="viewall ps-0"><Link href="/dti-dumptruckit" className="viewallvoiletlink">KNOW MORE</Link></button></div>
                </div>
                <Link href="/dti-dumptruckit">
                <Image src={DTI} className='pt-md-5 pt-4' alt='DumpTruckIt' title='DumpTruckIt' />
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-body">
                  <p className={`${styles.para1}`}>FTL</p>
                  <p className={`${styles.para2}`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
                  <p className={`${styles.para3}`}>Automate lead generation with AI for targeted prospect identification and improved sales efficiency.</p>
                  <div className="pt-md-2 pt-2"><button className="viewall ps-0"><Link href="/feeds-to-leads" className="viewallvoiletlink">KNOW MORE</Link></button></div>
                </div>
                <Link href="/feeds-to-leads">
                <Image src={FTL} className='pt-md-5 pt-4' alt='Feeds To Leads' title='Feeds To Leads' />
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-body">
                  <p className={`${styles.para1}`}>KWC</p>
                  <p className={`${styles.para2}`}><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</p>
                  <p className={`${styles.para3}`}>Efficient delivery routes to facilitate optimized scheduling</p>
                  <div className="pt-md-5 pt-4"><button className="viewall ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink">KNOW MORE</Link></button></div>
                </div>
                <Image src={KWC} className='pt-md-5 pt-4' alt='Know Whereabouts of Crew' title='Know Whereabouts of Crew' />
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* OUR SERVICE OFFERING */}
      <div className={`${styles.desktopbg} container-fluid py-3`}>
        <div className="container py-md-5 py-4 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4`}>WHAT WE CAN DO FOR YOU</h2>
                <p className={`${styles.subheading} ps-4`}>Service Offerings</p>
              </div>
              <p className={`${styles.para} py-md-4 py-2 mb-2 mb-md-auto`}>
                Discover how our expertise intersects with a multitude of industries, and how our range of services can empower your organization to thrive in today's dynamic business landscape.
              </p>
              {/* <div className="pt-3"><button className="viewall ps-0" onClick={handleClick}><Link href="/" onClick={handleClick} className="viewallvoiletlink">KNOW MORE</Link></button></div> */}
            </div>

            <div className="col-12 col-lg-7 py-2  pt-4 pt-lg-0">
              {service.map((item, index) => (
                <div className="col-12 col-md-10 col-xl-9 mx-lg-auto" key={index}>
                  {/* <Link href={item.link} onClick={handleClick} className="text-decoration-none"> */}
                  <div className={`${styles.movingleft} row py-2 px-4 py-md-3`}>
                    <div>
                      <div className="col-10"><p className={`${styles.subheading} ${styles.overflowtext1} mb-0 mb-md-5`} id={`${styles.mobilemedia}`}>{item.content}</p></div>

                      {/* <Image src={item.Image} className={`${styles.arrow} col-1 img-fluid float-end pt-md-2`} width="24px" height="24px" alt="" /> */}

                    </div>
                  </div>
                  {/* </Link> */}
                  <hr className="mt-lg-5 mt-md-4 mt-5" style={{ opacity: "1", color: "#C1D1E0" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='container d-lg-block d-none'>
          <div className='row'>

            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/ai-integration-development/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/ai integration and development.png" alt='AI Integration and Development' className='img-fluid' height={469} width={378} title='AI Integration and Development' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">AI Integration and Development</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Custom AI solutions to enhance productivity, decision-making, and customer engagement.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/application-modernization/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/application modernization.png" alt='Application Modernization' className='img-fluid' height={469} width={378} title='Application Modernization' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Application Modernization</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Upgrade applications to meet current technological standards and demands.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/meta-data-driven-applications/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/Meta Data Driven Applications.png" alt='Meta Data Driven Applications' className='img-fluid' height={469} width={378} title='Meta Data Driven Applications' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Meta Data Driven Applications</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Harnessing metadata for dynamic and efficient software development.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/cloud-computing-infrastructure-solutions/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/cloud computing.png" alt='Cloud Computing' className='img-fluid' height={469} width={378} title='Cloud Computing' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Cloud Computing and Infrastructure Solutions</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Scalable, secure cloud services for optimal performance and flexibility.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/technology-consultation-strategy"  className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/technology consultation.png" alt='Technology Consultation and Strategy' className='img-fluid' height={469} width={378} title='Technology Consultation and Strategy' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Technology Consultation and Strategy</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Strategic guidance for leveraging cutting-edge technologies for business growth.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/custom-software-development-integration/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/custom software development.png" alt='Custom Software Development' className='img-fluid' height={469} width={378} title='Custom Software Development' />
                  <div className="intro">
                    <h3 className="text-h1 pt-0">Custom Software Development and Integration</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Innovative software development and seamless technology integration.</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        <div className='container d-lg-none d-block'>
          <div className='row'>
            {/* <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}> */}
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/ai-integration-development/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/ai integration and development.png" alt='AI Integration and Development' className='img-fluid w-100' height={469} width={378} title='AI Integration and Development' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">AI Integration and Development</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Custom AI solutions to enhance productivity, decision-making, and customer engagement.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/application-modernization/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/application modernization.png" alt='Application Modernization' className='img-fluid w-100' height={469} width={378} title='Application Modernization' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Application Modernization</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Upgrade applications to meet current technological standards and demands.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/meta-data-driven-applications/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/Meta Data Driven Applications.png" alt='Meta Data Driven Applications' className='img-fluid w-100' height={469} width={378} title='Meta Data Driven Applications' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Meta Data Driven Applications</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Harnessing metadata for dynamic and efficient software development.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/cloud-computing-infrastructure-solutions/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/cloud computing.png" alt='Cloud Computing' className='img-fluid w-100' height={469} width={378} title='Cloud Computing' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Cloud Computing and Infrastructure Solutions</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Scalable, secure cloud services for optimal performance and flexibility.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/technology-consultation-strategy" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/technology consultation.png" alt='Technology Consultation and Strategy' className='img-fluid w-100' height={469} width={378} title='Technology Consultation and Strategy' />
                  <div className="intro">
                    <h3 className="text-h1 pt-xl-4 pt-0">Technology Consultation and Strategy</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Strategic guidance for leveraging cutting-edge technologies for business growth.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link href="/custom-software-development-integration/" className="text-decoration-none" >
                <div className="cards">
                  <Image src="/images/home/custom software development.png" alt='Custom Software Development' className='img-fluid w-100' height={469} width={378} title='Custom Software Development' />
                  <div className="intro">
                    <h3 className="text-h1 pt-0">Custom Software Development and Integration</h3>
                    <hr className="redline mx-2" />
                    <p className="text-p">Innovative software development and seamless technology integration.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* </div> */}
          </div>
        </div>


      </div>

      {/* HOW WE SERVE YOU */}
      <div className="container-fluid py-md-3 py-1">
        <div className="container py-md-3 py-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>YOUR VISION,</h2>
                <h2 className={`${styles.heading} ps-4`}>OUR EXECUTION</h2>
                <p className={`${styles.subheading} ps-4 mb-0`}>How We Serve You</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 py-2 mx-lg-5 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                We deliver customized solutions that align with your business process and goals.
              </p>
              <div className="pt-3"><button className="viewall ps-0" onClick={handleClick}><Link href="/how-we-serve-you" className="viewallvoiletlink">KNOW MORE</Link></button></div>
            </div>
          </div>
        </div>

        <div className="container-fluid justify-content-center" data-aos="fade-up">
          <div className='row pt-2 pt-lg-3 mb-lg-3'>
            <div className='col'>
              <div className="container py-md-5">
                <div className="row text-center gx-0">
                  {Howweserveyou?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="col-12 col-lg-4 col-md-6 py-xl-5"
                        id={item.verticalborder}>
                        <div className="h-100 mx-xl-4 mx-md-3 pt-lg-0 pt-md-3" >
                          <Image
                            loading="lazy"
                            src={item.imgurl}
                            alt={item.title}
                            width={128}
                            height={128}
                            className="img-fluid"
                          />
                          <p className={`${styles.imghead} mb-0 mt-3 py-xl-3 text-center`}>{item.title}</p>
                          <p className={`${styles.imgdesc} text-center pt-xl-1 text-center mb-2 mb-md-auto`}>{item.desc}</p>
                        </div>
                      </div>
                      {item.flag && <hr className='d-md-none d-block' style={{ opacity: "1", color: "#C1D1E0" }}></hr>}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <main className="d-none d-lg-block py-5" data-aos="fade-up">
        <div className={`${styles.bgimage} container-fluid py-5 `}
          style={{ backgroundImage: "url('/images/home/quote bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
          <p className={`${styles.bgtext2} text-center  mt-5`}> "IDEAS ARE EASY, <br />EXECUTION IS EVERYTHING."</p>
          <p className={`${styles.para3} text-center text-white mb-5`}> - John Doerr </p>
        </div>
      </main>

      {/* mobile screen */}
      <main className="d-block d-lg-none py-3" data-aos="fade-up">
        <div className={`${styles.bgimage} container-fluid py-5 `}
          style={{ backgroundImage: "url('/images/home/quote bg-sm.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
          <p className={`${styles.bgtext2} text-center  mt-5`}> "IDEAS ARE EASY, <br />EXECUTION IS EVERYTHING."</p>
          <p className={`${styles.para3} text-center text-white mb-5`}> - John Doerr </p>
        </div>
      </main>

      {/* FRESH READS */}
      <div className="container py-3 py-lg-5 d-md-block d-none" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-xl-4 col-lg-3 py-3 px-4 px-lg-2">
            <div style={{ borderLeft: "4px solid #F71735" }} >
            <p className={`${styles.para4} ps-4  mb-0`}>OUR</p>
            <p className={`${styles.para4} ps-4  `}>ADVISORS</p>
            </div>
            {/* <div className="ps-4"><button className="viewall ps-0"><Link href="/our-DNA" className="viewallvoiletlink">KNOW MORE</Link></button></div> */}
          </div>
          <div className="col-12 col-xl-8 col-lg-9 h-100 p-4 p-lg-1">
            <div className="row secondcard">

              <Slider {...settings} ref={customSlider2} >
                {items.map((item, index) => (
                  <div key={index}>
                    <Link href={item.url} className='text-decoration-none'>
                      <div className="card p-1 p-md-2">
                        <div className="card-bodys">
                          <div className="card">
                            <div className={`${styles.hashborder}`}  >
                              <p className={`${styles.para5} ${styles.overflowtext} pe-md-1 pe-lg-3 `}>{item.title}</p>
                              <p className={`${styles.para6}  `} >
                                {/* <Image
                                src="/images/home/read time.svg"
                                width={18}
                                height={18}
                                className="img-fluid"
                                title="Next"
                                alt="Next arrow"
                              /> */}
                                <span className="">{item.description}</span>
                                <Image className="float-end me-4" src={linkedin} width={27} height={27}/></p>
                              {/* <div className="mb-0 " >
                              <Image className='d-inline' src={link} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>{item.mail}</u></span>
                              <Image className= "d-inline float-end me-2" src={linkedin} width={27} height={27}/>
                             </div>  */}
                            </div>

                            <div className="col-12 pt-3 pt-lg-4 ">
                              <Image
                                src={item.img}
                                width={276}
                                height={276}
                                className="img-fluid float-end"
                                alt="WHAT'S TRENDING"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                ))}
              </Slider>

            </div>
          </div>

        </div>
      </div>

      {/* MObile Device */}
      <div className='container pt-0 pt-sm-5 d-md-none d-block' data-aos="fade-up">
        <div className='row'>
          <div className="col-11 col-md-4 col-lg-3 py-3 px-4">
            <div style={{ borderLeft: "4px solid #F71735" }} >
              <p className={`${styles.para4} ps-4 mb-0`}>OUR</p>
              <p className={`${styles.para4} ps-4 `}>ADVISORS</p>
            </div>
            {/* <div className="pt-3 mb-3"><button className="viewall ps-0"><Link href="/our-DNA" className="viewallvoiletlink">KNOW MORE</Link></button></div> */}
          </div>
        </div>
        <div className="row mb-5">
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            {items.map((item, index) => (
              <div className="col-10 col-md-5 col-lg-9 h-100 me-3">
                <div key={index}>
                  <Link href={item.url} className='text-decoration-none'>
                    <div className="card p-1 p-md-4">
                      <div className="card-bodys">
                        <div className="card">
                          <div >
                            <p className={`${styles.para5} ${styles.overflowtext} pe-md-1 pe-lg-3 `}>{item.title}</p>
                            <p className={`${styles.para6} mb-0 `} >
                              {/* <Image
                              src="/images/home/read time.svg"
                              width={18}
                              height={18}
                              className="img-fluid"
                              title="Next"
                              alt="Next arrow"
                            /> */}
                              <span className="">{item.description}</span><Image className="float-end me-4" src={linkedin} width={27} height={27}/></p>
                            {/* <Image src={link} width={16} height={16}/><span className="ps-2 ">{item.mail}</span><Image className="float-end" src={linkedin} width={27} height={27}/> */}
                          </div>

                          <div className="col-12 pt-3 pt-lg-4 ">
                            <Image
                              src={item.img}
                              width={276}
                              height={276}
                              className="img-fluid float-end w-100"
                              alt="WHAT'S TRENDING"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>


      <Scroll />
      <Footer />
    </>
  );
}
