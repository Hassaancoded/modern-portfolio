import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiLinkedinLine } from "react-icons/ri";

export const socialData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1ViYnKPN3n/?mibextid=wwXIfr",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/dr-mujtaba",
    Icon: RiDribbbleLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ibrahim.ayyan22?igsh=MWI1ZHI5bzdrYjBjZA%3D%3D&utm_source=qr",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ibrahimayyan",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
