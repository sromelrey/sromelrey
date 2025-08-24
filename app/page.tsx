import Image from "next/image";
import Navigation from "@/app/components/navigation";
import About from "./(sections)/about";
import Projects from "./(sections)/projects";
import Certificates from "./(sections)/certificates";
import ContactMe from "./(sections)/contact-me";
import ScrollToTop from "./components/scroll-to-top";

export default function Home() {
  return (
    <div className='relative flex flex-col'>
      <About />
      <Projects />
      <Certificates />
      <ContactMe />
      <ScrollToTop />
    </div>
  );
}
