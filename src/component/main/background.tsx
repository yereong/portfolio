
"use client";
import React from "react";

type BackgroundProps = {
  children?: React.ReactNode;
};

export default function Background({ children }: BackgroundProps) {
   return (
  <section className="relative h-screen w-full overflow-hidden bg-[#0A0B16]">
  {/* Layer 1 */}
  <img
    src="./images/background/Rectangle5.svg"
    alt="wave1"
    className="wave-layer z-0 wave-anim opacity-30 mix-blend-screen"
    style={{ ["--dx" as any]: "8px", ["--dy" as any]: "12px", ["--bleed" as any]: "20vw", animationDelay: "0s" }}
  />

  {/* Layer 2 */}
  <img
    src="./images/background/Rectangle6.svg"
    alt="wave2"
    className="wave-layer z-10 wave-anim-slow opacity-90 mix-blend-screen"
    style={{ ["--dx" as any]: "14px", ["--dy" as any]: "6px", ["--bleed" as any]: "20vw", animationDelay: "0.8s" }}
  />

  {/* Layer 3 */}
  <img
    src="./images/background/Rectangle7.svg"
    alt="wave3"
    className="wave-layer z-20 wave-anim-fast opacity-90 mix-blend-screen"
    style={{ ["--dx" as any]: "6px", ["--dy" as any]: "10px", ["--bleed" as any]: "20vw", animationDelay: "0.2s" }}
  />

  {/* Layer 4 */}
  <img
    src="./images/background/Rectangle8.svg"
    alt="wave4"
    className="wave-layer z-30 wave-anim opacity-85 mix-blend-screen"
    style={{ ["--dx" as any]: "10px", ["--dy" as any]: "14px", ["--bleed" as any]: "20vw", animationDelay: "1.1s" }}
  />

  {/* Content */}
  <div className="relative z-40 flex h-full w-full items-center justify-center px-6 text-center">
    {children}
  </div>
</section>




  );
}
