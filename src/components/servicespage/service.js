import React from "react";
import { useNavigate } from "react-router-dom";

import "./service.css";

const Service = () => {
  let navigate = useNavigate();
  let navigatecontact = () => {
    navigate("../contact");
  };
  return (
    <div className="service-page">
      <div className="content">
        <h1> Services </h1>
        <p>
          Welcome to our portfolio of services. We specialize in providing
          comprehensive solutions tailored to meet your specific needs. Whether
          you're a small startup or a large corporation, we offer a range of
          services to help you achieve your goals.
        </p>
        <p>
          Your business is one-of-a-kind, and your website should be too. I work
          closely with you to understand your goals and create a custom website
          that reflects your brand identity and resonates with your target
          audience.
        </p>
        <p>
          Ready to bring your online vision to life? If you're in need of a
          website tailored to your specifications, don't hesitate to reach out.
          Let's collaborate to create a stunning website that elevates your
          brand and achieves your goals. Contact me today to discuss your web
          development needs, and let's get started on your project.
        </p>
        <p>
          If you want to contact you can contact using my number,and the number
          is in About me page ,are u can contact using Contact Me page,I will
          create Dynamic web page
        </p>
        <div className="contact-button">
        <button onClick={navigatecontact} className="btn btn-primary contact-btn">
          Contact Me
        </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
