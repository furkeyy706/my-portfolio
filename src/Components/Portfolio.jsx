/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Massive E-Commerce React Web App - Zenith Clothing",
    description:
      "An e-commerce site that users can interact with, which I developed using React.js.",
    url: "https://github.com/furkeyy706/zenith-clothing-react",
  },
  {
    title: "Diabetes Admin Panel",
    description:
      "Diabetes admin panel I developed for the company I work for. A system where the admin who logs into the system can monitor and control the information entered by their patients on a daily basis.",
    url: "diabetesyonetici.netlify.app",
  },
  {
    title: "Monster Search App - Monsters Rolodex",
    description:
      "Monster search application with filtering feature that I developed with React.Js",
    url: "https://furkeyy706.github.io/Monsters-Rolodex-React/",
  },
  {
    title: "Qr Code Generator",
    description:
      "QR code creation application I developed using create-qr-code API and react-js",
    url: "https://furkeyy706.github.io/qr-code-generator-react/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
