"use client";
import React, { FormEvent } from "react";
import styles from "./contact.module.css"; // Import CSS module

function ContactForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const accessKey = '154b68cf-15ec-4cbf-8140-069fa1c6e3d8';

    if (!accessKey) {
      alert("Access key is not defined.");
      return;
    }

    const formData = {
      access_key: accessKey,
      name: (e.target as HTMLFormElement).name.valueOf,
      email: (e.target as HTMLFormElement).email.value,
      message: (e.target as HTMLFormElement).message.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Your message has been submitted successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert(`Error: ${result.message || "There was an error submitting your message. Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  }

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input id="name" name="name" type="text" placeholder="Your Name" className={styles.input} required />
        <input id="email" name="email" type="email" placeholder="Your Email" className={styles.input} required />
        <textarea id="message" name="message" placeholder="Type Message here..." className={styles.textarea} required />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
