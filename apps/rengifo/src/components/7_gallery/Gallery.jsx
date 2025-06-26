import { useEffect } from "react";
import { useTransition, animated } from "react-spring";

import { Slider } from "./Slider";

import "../../styles/7_gallery/Gallery.css";

export const Gallery = ({ toggleGallery, state, data }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("scrollLock");

    return () => {
      body.classList.remove("scrollLock");
    };
  }, []);

  const transition = useTransition(state, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 20,
  });

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="gallery" style={style}>
              <div className="gallery__container">
                <span
                  onClick={() => toggleGallery()}
                  className="gallery__close"
                >
                  &#10006;
                </span>
                <Slider data={data} />
              </div>
            </animated.div>
          )
      )}
    </>
  );
};
