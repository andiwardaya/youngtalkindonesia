import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarIcon } from "@heroicons/react/solid";
import CardCarousel from "./CardCarousel";

function CarouselHeader() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto pt-20">
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
        className="flex flex-col items-center justify-center"
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <CardCarousel
            title={"Alexander"}
            imgProfile={"./test1.jpg"}
            para={
              "Lorem Ipsum is simply dummy text of the printing and typesetting"
            }
          />
          <CardCarousel
            title={"Kingsman"}
            imgProfile={"./test1.jpg"}
            para={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem "
            }
          />
          <CardCarousel
            title={"Garner"}
            imgProfile={"./test1.jpg"}
            para={
              "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset "
            }
          />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselHeader;
