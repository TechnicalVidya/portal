"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div className="flex flex-wrap justify-center space-x-1" ref={ref}>
      <AnimatePresence>
        {isInView &&
          text.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("drop-shadow-sm", className)}>
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
      </AnimatePresence>
    </div>
  );
}
