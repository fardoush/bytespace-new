import React from 'react';

const LearningProgressCard = () => {
    return (
        <div className='w-[232px] rounded-2xl bg-white px-5 py-4 text-left shadow-xl'>
            <p className="text-xs font-medium text-[#242528] mb-2">
                Learning Progress
            </p>

            <h2 className="mb-2  text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-[#242528]">
                55%
            </h2>

            <div className=" h-2 overflow-hidden rounded-full bg-[#F6F6F6]">
                <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
        </div>
    );
};

export default LearningProgressCard;