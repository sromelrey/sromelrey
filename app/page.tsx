import Image from "next/image";
import Navigation from "@/app/components/navigation";
import About from "./(sections)/about";
import Projects from "./(sections)/projects";
import Certificates from "./(sections)/certificates";

export default function Home() {
  return (
    <div className='relative flex flex-col'>
      <About />
      <Projects />
      <Certificates />
    </div>
  );
}
