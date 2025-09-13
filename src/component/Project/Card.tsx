export const Cards = [
    {key:'Condin',
        content:(
            <>
                <div className="glass h-[550px] w-[80%]  ">
                    <div className="bg-[#353535] w-full h-full px-10 py-[30px] flex flex-col items-start font-semibold text-[24px] leading-[29px] text-white">
                        <button className="self-end flex font-semibold text-[20px] leading-[24px]
                                            bg-gradient-to-b from-[#2B62D9] to-[#B9B9B9]
                                            bg-clip-text text-transparent mb-[30px]">
                            {'프로젝트 상세 >'}
                        </button>
                        <img src='./logos/codin.svg' alt="codin"/>

                        <div className="w-full flex flex-row justify-between mt-6 px-5">
                            <div>2024.11 ~</div>
                            <div>( 8 ~ 10인 팀 프로젝트 )</div>
                        </div>

                        <div className="w-full border border-b-1 border-white mt-3"></div>

                        <ul className="gap-y-5 h-full flex flex-col justify-center">
                            <li>• 교내 단과대 학생들을 위한 SNS 서비스</li>
                            <li>• 실제 배포하여 유저들의 피드백을 받아 보완</li>
                            <li>• http only 쿠키 및 헤더를 활용하여 토큰관리</li>
                            <li>• Stomp를 이용한 실시간 채팅 및 알림뱃지 구현</li>
                        </ul>
                    </div>

                </div>
            </>
        )
     },
      {key:'neeis',
        content:(
            <>
               <div className="glass h-[550px] w-[80%]  ">
                    <div className="bg-[#353535] w-full h-full px-10 py-[30px] flex flex-col items-start font-semibold text-[24px] leading-[29px] text-white">
                        <button className="self-end flex font-semibold text-[20px] leading-[24px]
                                            bg-gradient-to-b from-[#2B62D9] to-[#B9B9B9]
                                            bg-clip-text text-transparent">
                            {'프로젝트 상세 >'}
                        </button>
                        <img src='./logos/neeis.svg' alt="codin"/>

                        <div className="w-full flex flex-row justify-between mt-6 px-5">
                            <div>2025.03 ~2025.06</div>
                            <div>( 3인 팀 프로젝트 )</div>
                        </div>

                        <div className="w-full border border-b-1 border-white mt-3"></div>

                        <ul className="gap-y-5 h-full flex flex-col justify-center">
                            <li>• 학생 성적 및 상담 관리 시스템 </li>
                            <li>• 학부 소프트웨어 설계 과목에서 진행한 팀 프로젝트</li>
                            <li>• Jira와 깃허브를 연동하여 Agile 방식으로 진행</li>
                            <li>• Zustand를 활용하여 전역 상태 관리</li>
                            <li>• Jest를 활용하여 단위테스트</li>
                        </ul>
                    </div>

                </div>
            </>
        )
     },
      {key:'emolog',
        content:(
            <>
               <div className="glass h-[550px] w-[80%]  ">
                    <div className="bg-[#353535] w-full h-full px-10 py-[30px] flex flex-col items-start font-semibold text-[24px] leading-[29px] text-white">
                        <button className="self-end flex font-semibold text-[20px] leading-[24px]
                                            bg-gradient-to-b from-[#2B62D9] to-[#B9B9B9]
                                            bg-clip-text text-transparent mb-[30px]">
                            {'프로젝트 상세 >'}
                        </button>
                        <img src='./logos/emolog.svg' alt="codin"/>

                        <div className="w-full flex flex-row justify-between mt-6 px-5">
                            <div>2024.07 ~2024.08</div>
                            <div>( 6인 팀 프로젝트 )</div>
                        </div>

                        <div className="w-full border border-b-1 border-white mt-3"></div>

                        <ul className="gap-y-5 h-full flex flex-col justify-center">
                            <li>• AI와 대화하며 감정을 분석하는 감정 일기 서비스</li>
                            <li>• 멋쟁이사자처럼 중앙해커톤 프로젝트</li>
                            <li>• 처음으로 주도하여 프론트엔드를 개발하였으며 디자인, 백엔드, AI 개발자와 협업한 프로젝트</li>
                            <li>• 콘솔 로그를 통한 문제점 파악 이후 다른 파트와의 소통으로 결과창 이미지 로딩속도 개선</li>
      
                        </ul>
                    </div>

                </div>
            </>
        )
     }
]