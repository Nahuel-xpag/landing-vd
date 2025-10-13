import React, { useEffect, useState, useRef } from "react";

function Slideshow({ featured = [], autoplay = false, interval = 5000 }) {
  // local copy of slides so we can rotate them
  const [slides, setSlides] = useState(Array.isArray(featured) ? featured : []);
  const timerRef = useRef(null);

  // Sync local slides with prop changes
  useEffect(() => {
    setSlides(Array.isArray(featured) ? featured : []);
  }, [featured]);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides, autoplay, interval]);

  const handleNext = () => {
    setSlides((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrevious = () => {
    setSlides((prev) => {
      if (prev.length <= 1) return prev;
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  if (!slides || slides.length === 0) {
    // Nothing to show
    return null;
  }

  return (
    <div className="featured-body">
      <div className="featured-container">
        <div className="slide-container">
          <button
            aria-label="Previous slide"
            className="previous-button"
            onClick={() => {
              // stop autoplay when user interacts
              if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
              handlePrevious();
            }}
          >
            <img
              src="/assets/imgs/icons/arrow_back_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
              alt="previous"
            />
          </button>

          <ul className="container" role="list">
            {slides.map((feat, index) => {
              // treat index 0 as focused slide
              const focused = index === 0;
              return (
                <li
                  key={feat.name + index}
                  className="slide"
                  data-focused={focused ? "true" : "false"}
                  data-next={index !== 0 ? "true" : undefined}
                >
                  {feat.imgsrc && <img src={feat.imgsrc} alt={feat.name} />}
                  <h3>{feat.name}</h3>
                  {feat.weight_in_kg !== undefined && <h3>Peso neto: {feat.weight_in_kg}kg</h3>}
                </li>
              );
            })}
          </ul>

          <button
            aria-label="Next slide"
            className="next-button"
            onClick={() => {
              if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
              handleNext();
            }}
          >
            <img
              src="/assets/imgs/icons/arrow_forward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
              alt="next"
            />
          </button>
        </div>
      </div>

      <h1 className="featured-header">Productos destacados</h1>
    </div>
  );
}

export default Slideshow;
