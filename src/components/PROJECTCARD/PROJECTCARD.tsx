"use client"; // Ensure this is a client component

import React from "react";
import Slider from "react-slick"; // Importing Slick Slider
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import { projects } from "../../app/data/details"; 
import Image from "next/image";
import { StaticImageData } from 'next/image';
import Link from "next/link";
import styles from './Projectscard.module.css'; // Import CSS module

// Define the Project interface as per your requirements
interface Project {
  id: number;
  cat: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  badges: string[];
  url: string;
}

export default function ProjectSlider() {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  // Check if projects exist and are an array
  if (!Array.isArray(projects) || projects.length === 0) {
    return <div>No projects available.</div>; // Handle empty or undefined projects
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={styles.slider}>
        {projects.map((project: Project) => (
          <div key={project.id} className={styles.projectCard}>
            <h2 className={styles.category}>{project.cat}</h2>
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={project.title} 
                width={500} // Adjust width to match the container width
                height={350} // Adjust height to match the container height
                className={styles.projectImage}
              />
            </div>

            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.badgeContainer}>
                {project.badges.map((badge, index) => (
                  <p key={index} className={styles.badge}>{badge}</p>
                ))}
              </div>
              <Link href={project.url} target="_blank">
                <button className={styles.viewProjectButton}>View Project</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
