"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Presentation } from "../Presentation";
import { DarkLight } from "./DarkLight";
 
export function SparklesBackground() {
  return (
    <div className="h-[30rem] z-10 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">      
      <div className="w-full z-0 absolute inset-0 h-screen">
    
        {
            <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        }
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <Presentation/>
    
    </div>
  );
}