'use client'
export const Header = () => {

    const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed w-full h-[var(--header-h)] border border-b-1 border-black/10 flex flex-row justify-between items-center py-4 bg-transparent px-10">
      <div className="font-pretendard not-italic font-semibold text-[32px] leading-[38px] text-black" onClick={()=> handleScroll("main")}>Portfolio</div>

      <div className="flex flex-row gap-10 font-semibold text-[24px] leading-[29px] text-[#5B5B5B]">
        <button onClick={()=> handleScroll("about")}>About me</button>
        <button onClick={()=> handleScroll("Skills")}>Skills</button>
        <button onClick={()=> handleScroll("Projects")}>Projects</button>
        <button onClick={()=> handleScroll("Education")}>Education</button>
      </div>
    </header>
  );
};