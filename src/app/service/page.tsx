"use client"; // Ensure this is a client component

import { services } from "../data/details"; // Adjust the path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import for FontAwesomeIcon
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import REVIEW from "../../components/REVIEW/REVIEW";
import Slider from "react-slick"; // Importing Slick Slider
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import styles from './Service.module.css'; // Import CSS module

export default function Page() {
  // Slick Slider settings for services
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Web <br /> Development
        </h1>
        <h2 className={styles.subtitle}> & Design</h2>
        <p className={styles.description}>
          Web Development, Web design and Graphic design services.
        </p>
        <p className={styles.servicesButton}>
          <FontAwesomeIcon icon={faArrowCircleDown} className={styles.icon} /> My Services
        </p>
      </div>
      <div className={styles.sliderContainer}>
        {/* Slick Slider for Services */}
        <Slider {...settings} className={styles.slider}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div  className={styles.card}>

                <p className={styles.serviceTitle}>{service.title}</p>
                <h2 className={styles.serviceSubtitle}>{service.subtitle}</h2>
              </div>
              <div className={styles.imageContainer}>
                <Image src={service.image} alt={service.title} width={600} height={500} />
              </div>
              <div>
                <h3 className={styles.playfairTitle}>{service.title}</h3>
                <p className={styles.serviceDescription} dangerouslySetInnerHTML={{ __html: service.description }}></p>
                {service.list && (
                  <div>
                    <p>My services include:</p>
                    <ul className={styles.serviceList}>
                      {service.list.map((item, index) => (
                        <li key={index}>
                          <span className={styles.serviceItemTitle}>{item.title}:</span> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
        <REVIEW />
      </div>
    </section>
  );
}
