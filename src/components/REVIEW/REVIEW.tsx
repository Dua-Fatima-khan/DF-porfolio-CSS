"use client"; // Ensure this is a client component

import React from "react";
import Slider from "react-slick"; // Importing Slick Slider
import { reviews } from "../../app/data/details"; // Importing your reviews data
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import styles from './REVIEW.module.css'; // Import CSS module

export default function REVIEW() {
  // Slick Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <section className={styles.reviewSection}>
      {/* Section Heading */}
      <h2 className={styles.heading}>Reviews</h2>

      {/* Slick Slider for Reviews */}
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slider}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.cardContent}>
                <p className={styles.reviewId}>{review.id}</p>
                <h2 className={styles.reviewTitle}>{review.title}</h2>
                <p className={styles.reviewDescription}>{review.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
