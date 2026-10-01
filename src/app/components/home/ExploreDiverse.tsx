"use client";
import React from 'react';
import { MdDesignServices, MdOutlineDeveloperMode, MdOutlineLaptop } from 'react-icons/md';


interface CategoryItem {
    id: number;
    title: string;
    icon: React.ReactNode;
}
const categories: CategoryItem[] = [
    {
        id: 1,
        title: "Design",
        icon: <MdDesignServices className="w-8 h-8 text-[#242528]" />
    },
    {
        id: 2,
        title: "Development",
        icon: <MdOutlineDeveloperMode className="w-8 h-8 text-[#242528]" />
    },
    {
        id: 3,
        title: "IT & Software",
        icon: <MdOutlineLaptop className="w-8 h-8 text-[#242528]" />
    },
    {
        id: 4,
        title: "Business",
        icon: (
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6V3C15 1.35 13.65 0 12 0L3 0C1.35 0 0 1.35 0 3L0 24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V9C30 7.35 28.65 6 27 6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM25.5 24H15V21H18V18H15V15H18V12H15V9H25.5C26.325 9 27 9.675 27 10.5V22.5C27 23.325 26.325 24 25.5 24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="#242528" />
            </svg>

        )
    },
    {
        id: 5,
        title: "Marketing",
        icon: (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 18H10.5C10.5 10.545 16.545 4.5 24 4.5V7.5C18.195 7.5 13.5 12.195 13.5 18ZM24 13.5V10.5C19.86 10.5 16.5 13.86 16.5 18H19.5C19.5 15.51 21.51 13.5 24 13.5ZM7.5 3C7.5 1.335 6.165 0 4.5 0C2.835 0 1.5 1.335 1.5 3C1.5 4.665 2.835 6 4.5 6C6.165 6 7.5 4.665 7.5 3ZM14.175 3.75H11.175C10.815 5.88 8.985 7.5 6.75 7.5H2.25C1.005 7.5 0 8.505 0 9.75L0 13.5H9V10.11C11.79 9.225 13.875 6.765 14.175 3.75ZM25.5 22.5C27.165 22.5 28.5 21.165 28.5 19.5C28.5 17.835 27.165 16.5 25.5 16.5C23.835 16.5 22.5 17.835 22.5 19.5C22.5 21.165 23.835 22.5 25.5 22.5ZM27.75 24H23.25C21.015 24 19.185 22.38 18.825 20.25H15.825C16.125 23.265 18.21 25.725 21 26.61V30H30V26.25C30 25.005 28.995 24 27.75 24Z" fill="#242528" />
            </svg>

        )
    },
    {
        id: 6,
        title: "Photography",
        icon: (
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 3H22.245L19.5 0L10.5 0L7.755 3H3C1.35 3 0 4.35 0 6L0 24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V6C30 4.35 28.65 3 27 3ZM27 24H3V6H9.075L11.82 3H18.18L20.925 6H27V24Z" fill="#242528" />
                <path d="M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z" fill="#242528" />
                <path d="M19.17 17.37C17.895 16.815 16.485 16.5 15 16.5C13.515 16.5 12.105 16.815 10.83 17.37C9.72 17.85 9 18.93 9 20.145V21H21V20.145C21 18.93 20.28 17.85 19.17 17.37Z" fill="#242528" />
            </svg>

        )
    },
]


const ExploreDiverse = () => {

    return (
        <section className="w-full mx-auto pb-10 md:pb-[60px] lg:pb-[120px] px-5 md:px-10 xl:px-[120px]">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center">
                <h2 className="text-[28px] md:text-[30px] lg:text-[36px] font-semibold text-[#040819] leading-[120%] tracking-[-1%] mb-4">
                    Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className="w-full lg:max-w-[917px] text-sm sm:text-base md:text-[18px] text-[#82868E] leading-[160%] font-normal mb-8 md:mb-10 lg:mb-[68px]">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5  xl:gap-10 w-full">
                    {
                        categories.map((item) => (
                            <div
                                key={item.id}
                                className="group flex flex-col items-center justify-center bg-white border border-[#CED0D3] rounded-2xl xl:rounded-3xl px-4 sm:px-5 py-9 transition-all duration-500 hover:shadow-md cursor-pointer"
                            >
                                <div className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                <span className="text-base xl:text-xl font-medium text-[#242528] leading-[120%]">
                                    {item.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ExploreDiverse;