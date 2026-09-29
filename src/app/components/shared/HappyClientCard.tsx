import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HappyClientCard = () => {
    const clientImg = [
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]
    return (
        <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-xl">
            <p className="text-base font-medium text-[#242528]">
                Happy Students
            </p>

            <p className="text-xs text-[#242528] flex gap-1">
                4.5 <span className="text-gray-400"> (240)</span><FaStar className='text-[#D4FB20]'></FaStar>
            </p>

            <div className="mt-1 flex items-center">
                <div className="flex -space-x-4">
                    {clientImg.slice(0, 7).map((item, index) => (
                        <img
                            key={index}
                            src={item.img}
                            alt={`Client ${index + 1}`}
                            width={43}
                            height={43}
                            className="h-[35px] w-[35px] lg:h-[43px] lg:w-[43px] rounded-full object-cover"
                            priority
                        />

                    ))}
                </div>

                <div className=" -ml-4 flex h-[30px] w-[30px] lg:h-[43px] lg:w-[43px] items-center justify-center rounded-full bg-[#D4FB20] text-[#242528] text-xs font-bold">
                    2K+
                </div>
            </div>
        </div>
    );
};

export default HappyClientCard;