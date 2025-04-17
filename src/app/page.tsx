'use client'

import Navbar from "@/components/navbar";
import VidPlayerBG from "@/components/videobg";
import MainHome from "@/components/slide1";
import AboutMe from "@/components/aboutMe";
import ProjectPage from "@/components/project";
import FooterLanxei from "@/components/footerSlide";
import ExperiencePage from "@/components/exprerience/experience";

export default function Home() {
  return (
      <>
          <Navbar />
          <VidPlayerBG bgvid={"/bg_vid_m.mp4"}/>
          <MainHome/>
          <AboutMe/>
          <ProjectPage/>
          <ExperiencePage/>
          <FooterLanxei/>
      </>
  );
}
