
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HappyClientCard = () => {
    const clientImg = [
        { img: "/clients/client1.jpg" },
        { img: "/clients/clients2.jpg" },
        { img: "/clients/client3.jpg" },
        { img: "/clients/client4.jpg" },
        { img: "/clients/client5.jpg" },
        { img: "/clients/client6.jpg" },
        { img: "/clients/client7.jpg" },
     
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
                        <Image
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