import Image from "next/image";
import { Header } from "@/component/header/Header";
import MainContent from "@/component/main/MainContent";
import AboutMe from "@/component/aboutMe/AboutMe";
import Skills from "@/component/skills/Skills";
import Projects from "@/component/Project/Projects";

export default function Home() {
  return (
    <div className="flex flex-col overflow-y-scroll max-h-svh w-full ">
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
