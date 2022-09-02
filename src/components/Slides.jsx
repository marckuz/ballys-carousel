import styles from "../styles/Home.module.css";
import React, { useContext,useState } from "react";
import { AppContext } from "../context";

function Slides() {
    const { slideIndex, apiData, plusSlides } = useContext(AppContext);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
        setTouchEnd(null) 
        if (e.type === "mousedown") {
            setTouchStart(e.clientX);
        } else if(e.type === "touchstart") {
            setTouchStart(e.targetTouches[0].clientX)
        }
    }

    const onTouchMove = (e) => {
        if (e.type === "mousemove") {
            setTouchEnd(e.clientX);
        } else if(e.type === "touchmove") {
            setTouchEnd(e.targetTouches[0].clientX)
        }
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        console.log('swipe', isLeftSwipe ? 'left' : 'right')
        if (isLeftSwipe) {
            plusSlides(-1)
        } else if(isRightSwipe){
            plusSlides(1);
        }
    }
    
  return (
      <div className={styles.slideshowcontainer}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
          onMouseDown={onTouchStart} onMouseMove={onTouchMove} onMouseUp={onTouchEnd}
      >
      {apiData.map((data, i) => {
        const transX = 100 * (i - slideIndex);
        const style = {
          transform: "translateX(-" + transX + "%)",
        };
        return (
          <section
            style={style}
            className={`${styles.slide} relative bg-white ${styles.bannerSliderHeight}`}
            key={data.id}
          >
            <img
              className={`absolute object-cover w-full ${styles.bannerSliderHeight}`}
              src={data.image_uris?.art_crop}
              alt={data.oracle_text}
            />

            <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
              <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                  {data.artist}
                </h1>
                <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white">
                  {data.oracle_text}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
export default Slides;
