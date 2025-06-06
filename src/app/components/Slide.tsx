"use client";

import { motion } from "framer-motion";

type SlideProps = {
  id: string;
  children: React.ReactNode;
  bg?: string;
  backgroundImage?: string;
};

export default function Slide({
  id,
  children,
  bg = "white",
  backgroundImage,
}: SlideProps) {
  const backgroundStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center p-12 ${
        !backgroundImage ? `bg-${bg}` : ""
      }`}
      style={backgroundStyles}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
