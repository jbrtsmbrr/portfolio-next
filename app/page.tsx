import Banner from "@/components/Banner";
import HardSkills from "@/components/HardSkills"
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto space-y-12 md:max-w-2xl lg:max-w-3xl xs:px-4 space-y-4 sm:overflow-visible overflow-hidden">
      <Banner />
      {/* <section className="relative rounded-2xl shadow-lg h-[120px] w-[90%] mx-auto bg-blue-500">

      </section> */}
      <HardSkills />
      {/* <Timeline /> */}
      <Projects />
    </div>
  )
}