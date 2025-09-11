export default function MainContent () {

    return(
      <div className=" bg-[#F5F8FF] flex flex-col items-start justify-center h-svh px-[115px] ">
            <div className="flex flex-row gap-[30px]">
                <div className="w-[10px] h-[213px] left-[115px] top-[232px] bg-[#0051FF]"></div>
                <div className="flex flex-col items-start">
                    <p className="font-semibold text-[32px] leading-[38px] text-black">안녕하세요!</p>
                    <p className="font-semibold text-[48px] leading-[57px] text-black">
                        <span className="text-[#0051FF]">책임감</span>과 <span  className="text-[#0051FF]">소통</span>을 중요시하는 <br/> 
                        프론트엔드 개발자 <br/>
                        조예령입니다.
                    </p>
                </div>
            </div>
      </div>
    );
}