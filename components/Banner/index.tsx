import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative grid grid-cols-2 md:h-[480px] gap-4">
      <div className="flex flex-col-reverse md:flex-col gap-4">
        <div className="md:absolute md:h-full md:-left-14 lg:-left-20 flex gap-4 md:flex-col justify-center">
          <Image alt="github" src="/assets/icons/icons8-github.svg" width={28} height={28} />
          <Image alt="github" src="/assets/icons/icons8-linkedin.svg" width={25} height={25} />
          <Image alt="github" src="/assets/icons/icons8-facebook.svg" width={25} height={25} />
        </div>
        <div className="flex flex-col justify-center md:h-full gap-8">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">
              Hi, I'm Joe Bert
            </h1>
            <h3 className="font-medium text-gray-500">Frontend developer</h3>
            <p className="text-sm text-gray-400">
              Currently, I am working as frontend developer at WebCast Technologies Inc. 🐱‍🏍
            </p>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="bg-blue-500 px-4 py-2 rounded-xl shadow-lg text-white text-sm hover:bg-blue-400 active:bg-blue-500">Let's Talk!</button>
            <a
              href="/assets/documents/JOE-BERT-SEMBRERO-2023-Verbose-NO_IMAGE.pdf"
              download
              style={{ color: "inherit", textDecoration: "none" }}
            ><button className="bg-gray-200 px-4 py-2 rounded-xl text-gray-500 border text-sm hover:bg-gray-100 active:bg-gray-200 w-full">Download Resume</button></a>

          </div>
        </div>
      </div>
      <div className="relative h-full lg:-right-32">
        <div className="absolute h-1/2 w-full top-1/3 -translate-y-1/3 z-negative">
          <div className="absolute mix-blend-multiply top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
          <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-70 animate-grow animtation-delay-2000"></div>
          <div className="absolute mix-blend-multiply top-8 -left-0 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
        </div>
        <Image alt="me" src="/assets/illustrations/3d-casual-life-young-man-sitting-with-laptop-and-waving.png" width={200} height={200} className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block" />
      </div>
    </section>
  )
}

export default Banner