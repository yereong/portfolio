export default function Skills () {

    return(
      <div className="bg-gradient-to-b from-[#FFCFCF] to-[#ffffff] flex flex-col items-center h-svh">
            <div className="title">SKILLS</div>
  const cards = [
    {
      key: "language",
      content: (
        <div className="glass w-[300px] h-[300px] flex flex-col items-center justify-start p-[30px]">
          <div className="flex w-full flex-row items-center justify-center gap-5 mb-3">
            <img src="./icons/Language.svg" alt="언어" />
            <p className="font-semibold text-[20px] leading-[24px] text-black">Language</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className=" text-white bg-[#2F74C0] skill">
              TypeScript
            </p>
            <p className="skill text-black bg-[#EFD81D]">
              JavaScript
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "frontend",
      content: (
        <div className="glass w-[300px] h-[300px] flex flex-col items-center justify-center p-[30px]">
          <div className="flex w-full flex-row items-center justify-center gap-5 mb-3">
            <img src="./icons/Frontend.svg" alt="프론트" />
            <p className="font-semibold text-[20px] leading-[24px] text-black">Frontend</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 gap-x-1 w-full justify-start items-start ml-12">
            <p className=" text-white bg-black skill">
              Next.js
            </p> 
            <p className="skill text-black bg-[#5bd1d7]">
              React
            </p>
            <p className="skill text-white bg-[#38BDF8]">
              Tailwind
            </p>
            <p className=" text-white bg-black skill">
              Axios
            </p>
            
            <p className="skill text-white bg-[#49443E]">
              Zustand
            </p>
            <p className=" text-white bg-[#CE6B9C] skill">
              Sass
            </p>
           

            <p className=" text-white bg-[#61DAFB] skill ">
              Context API
            </p>
            <p className="skill text-white bg-[#1572B6]">
              CSS3
            </p>
            
            <p className="skill text-white bg-[#8869EE]">
              Vite
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "backend",
      content: (
       <div className="glass w-[300px] h-[300px] flex flex-col items-center justify-start p-[30px]">
          <div className="flex w-full flex-row items-center justify-center gap-5 mb-3">
            <img src="./icons/Backend.svg" alt="백엔드" />
            <p className="font-semibold text-[20px] leading-[24px] text-black">Backend/DevOps</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className=" text-white bg-[#3E6E93] skill">
              MySQL
            </p>
            <p className="skill text-white bg-black">
              Vercel
            </p>
          </div>
        </div>
      ),
    },
  ];

      </div>
    );
}