import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { title: "Project 1", path: "/thumb1.png", video: "705 to 724.mp4" },
  { title: "Project 2", path: "/thumb2.png", video: "/627 to 643.mp4" },
  { title: "Project 3", path: "/thumb3.png", video: "535to540.mp4" },
  { title: "Project 4", path: "/thumb4.png", video: "506to519.mp4" },
  { title: "Project 5", path: "/thumb5.png", video: "437 to 448.mp4" },
  { title: "Project 6", path: "/thumb6.png", video: "417 to 424.mp4" },
  { title: "Project 7", path: "/thumb7.png", video: "250to307.mp4" },
  { title: "Project 8", path: "/thumb8.png", video: "146to214.mp4" },
  { title: "Project 9", path: "/thumb9.png", video: "045to102.mp4" },
  { title: "Project 10", path: "/thumb10.png", video: "045 to 102.mp4" },
  { title: "Project 11", path: "/thumb11.png", video: "024to031.mp4" },
  { title: "Project 12", path: "/thumb12.png", video: "012to018.mp4" },
  { title: "Project 13", path: "/thumb13.png", video: "005to012.mp4" },
  { title: "Project 14", path: "/thumb14.png", video: "ftjjtdjdtjnds0000-0150.mp4" },
  { title: "Project 15", path: "/thumb15.png", video: "carnvial.mp4" },
  { title: "Project 16", path: "/thumb16.png", video: "sgssgsgsgsgsgsgs0000-0150.mp4" },
];

Modal.setAppElement("#__next");

const WorkSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openVideo = (src) => {
    setVideoSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc("");
  };

  // split projects into slides of 4 projects each
  const slides = [];
  for (let i = 0; i < projects.length; i += 4) {
    slides.push(projects.slice(i, i + 4));
  }

  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[480px]"
      >
        {slides.map((slideProjects, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slideProjects.map((project, j) => (
                <div
                  key={j}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                  onClick={() => openVideo(project.video)}
                >
                  <Image
                    src={project.path}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div>WATCH</div>
                      <div className="text-xl">
                        <BsArrowRight aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black/90"
        overlayClassName="fixed inset-0 bg-black/80 z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-white text-2xl z-50"
        >
          ×
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="max-w-full max-h-[80vh] rounded-lg"
        />
      </Modal>
    </>
  );
};

export default WorkSlider;
