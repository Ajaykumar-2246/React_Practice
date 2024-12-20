import React, { useState, useRef, useEffect } from "react";
import "./carousel.css";

function Carousel() {
  const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOk_Z2l6Qsdg6BO3fhHSJZs1O3Wv4QQknng&usqp=CAU",
    "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rqvjmxA0KaYp1h0Kjz2qx0xDjJrKao0LgQ&usqp=CAU",
  ];
  const slides = useRef(null);
  const [slide, setSlide] = useState(0);

  const rightSlider = () => {
    setSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % data.length;
      slides.current.scrollLeft = nextSlide * slides.current.offsetWidth;
      return nextSlide;
    });
  };

  const leftSlider = () => {
    setSlide((prevSlide) => {
      const nextSlide = (prevSlide - 1 + data.length) % data.length;
      slides.current.scrollLeft= nextSlide * slides.current.offsetWidth;
      return nextSlide;
    });
  };
  useEffect(() => {
    const interval = setInterval(rightSlider, 3000);
    return () => clearInterval(interval);
  }, []);

  const dot = (index) => {
    slides.current.scrollLeft = index * slides.current.offsetWidth;
    setSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-body" ref={slides}>
        {data.map((item, index) => (
          <img src={item} alt="Loading..." key={index} />
        ))}
      </div>
      {slide !== 0 && (
        <button className="left-slider" onClick={leftSlider}>
          &lt;
        </button>
      )}
      {slide !== data.length - 1 && (
        <button className="right-slider" onClick={rightSlider}>
          &gt;
        </button>
      )}
      <span className="indicators">
        {data.map((_, index) => (
          <button className={`indicator ${slide === index ? "active" : ""}`} onClick={() => dot(index)} key={index}></button>
        ))}
      </span>
    </div>
  );
}

export default Carousel;
