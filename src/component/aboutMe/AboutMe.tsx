export default function AboutMe () {
    const items = [{label: '이름', icon: 'Person', content:'조예령'}, {label: '생년월일', icon: 'Calendar', content:'03.06.24'}, 
                   {label: '위치', icon: 'Location', content:'인천광역시 서구'}, {label: '연락처', icon: 'Phone', content:'010-4234-1294'}, 
                   {label: '이메일', icon: 'Email', content:'lily030624@gmail.com'}, {label: '학력', icon: 'Pencil', content:'인천대학교'}];


    return(
      <div id="about" className="bg-white flex flex-col items-center h-svh justify-start scroll-mt-[var(--header-h)]">
        <div data-aos="fade-up" className="pt-[var(--header-h)] px-10 py-12 w-full flex flex-col items-center">
            <div className="title">ABOUT ME</div>

            <div className="w-[80%] mt-[55px] h-auto py-[50px] px-[41px] glass">
                <div className="
                    grid grid-cols-3 grid-rows-2 gap-6 w-full gap-y-[94px]
                    max-[1250px]:grid-cols-2 max-[1250px]:grid-rows-3
                    max-[850px]:gap-y-[24px] max-[850px]:grid-cols-1 max-[850px]:grid-rows-6
                    
                    ">
                     {items.map((item, i) => (
                        <div
                            key={i}
                            className="w-full flex flex-row justify-center"
                        >
                            <div className="w-[200px] flex justify-start items-start gap-[34px]">
                                <img src={`./icons/${item.icon}.svg`} alt="아이콘"></img>
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-[20px] leading-[24px] text-black">{item.label}</p>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                            
                        </div>
                        ))}
                </div>
            </div>
            
        </div>
      </div>
    );
}