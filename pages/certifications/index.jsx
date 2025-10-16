import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const certifications = [
  "/cert1.png",
  "/cert2.png",
  "/cert3.png",
];

const Certifications = () => {
  return (
    <div className="h-full bg-primary/30 py-32 px-4 xl:px-0">
      <h2 className="h2 text-center mb-12">
        <span className="text-accent">My Certifications</span>
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-[900px] mx-auto"
      >
        {certifications.map((src, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center"
            style={{ width: "300px", height: "400px" }}
          >
            <img
              src={src}
              alt={`Certification ${i + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certifications;
