'use client'
import { useEffect, useRef, useState } from "react";

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const lastYRef = useRef(0);                              
    const timerRef = useRef<number | null>(null);

      useEffect(() => {
        // 초기 상태 세팅
        lastYRef.current = window.scrollY;
        setIsScrolled(window.scrollY > 0);
        resetInactivityTimer();

        const onScroll = () => {
            const y = window.scrollY;
            const lastY = lastYRef.current;

            // 배경 전환
            setIsScrolled(y > 0);

            // 위로 올리면 펼치기
            const delta = y - lastY;
            if (delta < 0) {
                // 위로 스크롤
                setIsCollapsed(false);
            }
            else if (delta > 0) {
                setIsCollapsed(true);
            }
            lastYRef.current = y;

            // 타이머 리셋
            resetInactivityTimer();
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
        window.removeEventListener('scroll', onScroll);
        if (timerRef.current) window.clearTimeout(timerRef.current);
        };
    }, []);

    // 헤더 버튼 클릭 시 해당 컴포넌트 위치로 이동
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    //헤더 접기 타이머
    const resetInactivityTimer = () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            const lastY = lastYRef.current;            
            if(lastY >0){
                setIsCollapsed(true);
            }
        
        }, 3000); // 3초동안 스크롤이벤트가 없을 시 헤더 접힘
    };

  return (
    <header className={[
        // 위치 & 레이아웃
        'fixed inset-x-0 top-0 z-50',
        'h-[var(--header-h)]',
        'border border-b-1 border-black/10',
        'flex flex-row justify-between items-center',
        'py-4 px-10',
        'transition-all duration-300 will-change-transform',
        // 접힘(숨김) 애니메이션: 위로 슬라이드
        isCollapsed ? '-translate-y-full' : 'translate-y-0',
        // 배경 전환
        isScrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
      ].join(' ')}
    >
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