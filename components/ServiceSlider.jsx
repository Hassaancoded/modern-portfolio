import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const serviceData = [
  {
    Icon: RxCrop,
    title: "Motion Graphics",
    description:
      "Creating dynamic visual stories through smooth motion and animation design.",
  },
  {
    Icon: RxPencil2,
    title: "3D Animation",
    description:
      "Bringing ideas to life with detailed 3D modeling, texturing, and realistic animation.",
  },
  {
    Icon: RxDesktop,
    title: "Video Editing",
    description:
      "Professional editing with cinematic cuts, transitions for impactful storytelling.",
  },
  {
    Icon: RxReader,
    title: "Visual Effects (VFX)",
    description:
      "Adding digital magic to your videos using compositing, tracking, and particle effects.",
  },
  {
    Icon: RxRocket,
    title: "Brand Promotion",
    description:
      "Designing promotional videos and animations that boost your brand’s engagement.",
  },
  {
    Icon: RxPencil2,
    title: "2D Animation",
    description:
      "Crafting expressive 2D animations for explainer videos, logos, and social media content.",
  },
  {
    Icon: RxDesktop,
    title: "Scene Modeling",
    description:
      "Building detailed 3D environments and scenes for animations or virtual experiences.",
  },
];




const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

           {/* arrow */}
<a
  href="/contact"
  className="text-3xl"
>
  <RxArrowTopRight
    className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
    aria-hidden
  />
</a>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
