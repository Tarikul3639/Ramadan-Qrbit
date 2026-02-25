"use client";

import Lottie from "lottie-react";
import animationData from "@/Public/animations/Moon.json";

export default function RamadanAnimation() {
  return (
    <div className="w-40 h-40">
      <Lottie 
        animationData={animationData}
        loop={true}
      />
    </div>
  );
}