import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsEnvelope, BsLinkedin, BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex flex-col items-center xl:items-start h-full">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center xl:text-left mb-12"
        >
          Let's <span className="text-accent">connect.</span>
        </motion.h2>

        {/* contact details */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-6 text-white text-lg xl:text-xl"
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <BsEnvelope className="text-accent text-2xl" aria-hidden />
            <a href="ibrahim.ayyan22@gmail.com" className="hover:text-accent transition">
              Mail me here
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <BsLinkedin className="text-accent text-2xl" aria-hidden />
            <a
              href="https://www.linkedin.com/in/ibrahimayyan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              My Linkedin
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <BsTelephone className="text-accent text-2xl" aria-hidden />
            <a href="tel:+92 326 5620177" className="hover:text-accent transition">
              Call me here
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
