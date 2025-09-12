'use client';
import React, { useEffect } from "react";
import { Header } from "@/component/header/Header";
import MainContent from "@/component/main/MainContent";
import AboutMe from "@/component/aboutMe/AboutMe";
import Skills from "@/component/skills/Skills";
import Projects from "@/component/Project/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

   useEffect(() => {
    AOS.init();
  },[])


  return (
    <div className="flex flex-col  w-full ">
      <Header/>
      <main className="" id="main">
       <MainContent/>
       <div id="about"><AboutMe/></div>
       <div id="Skills"><Skills/></div>
       <div id="Projects"><Projects/></div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
