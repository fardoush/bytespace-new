"use client";

import React from "react";
import Image from "next/image";
import { Course } from "../types/course";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoIosStar } from "react-icons/io";


interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#CED0D3] bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300">
            <div className="p-2 sm:p-4 lg:p-2 xl:p-4">
                <div className="relative h-[195px] w-full overflow-hidden rounded-xl">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Glassmorphism Stats Bar */}
                    <div className="absolute bottom-5 left-1/2 flex xl:flex-nowrap  flex-nowrap -translate-x-1/2 items-center gap-2 lg:gap-1 xl:gap-2 whitespace-nowrap  text-xs font-medium text-[#4F4F4F]">
                        <span className="rounded-full bg-white/70 px-2  sm:px-3 lg:px-2 xl:px-3 py-[5px] backdrop-blur-md">
                            {course.lessons} Lessons
                        </span>
                        <span className="rounded-full bg-white/70 px-2 sm:px-3 lg:px-2 xl:px-3 py-[5px] backdrop-blur-md">
                            {course.duration}
                        </span>
                        <span className="rounded-full bg-white/70 px-2 sm:px-3 lg:px-2 xl:px-3 py-[5px] backdrop-blur-md">
                            {course.comments} Comments
                        </span>
                    </div>
                </div>
            </div>

            {/* Course Details */}
            <div className="flex flex-1 flex-col justify-between p-5 pt-0">
                <div>
                    {/* Title and Rating */}
                    <div className="flex items-start justify-between">
                        <h3 className="-leading-[120%] line-clamp-1 text-xl font-semibold text-black">
                            {course.title}
                        </h3>
                        <div className="flex items-center gap-1 text-lg text-[#4F4F4F]">
                            <span>{course.rating.toFixed(1)}</span>
                            <IoIosStar className="h-5 w-5 fill-[#CED0D3] text-[#CED0D3]" />
                        </div>
                    </div>

                    <p className=" text-xs font-normal text-[#82868E]">
                        by <span className="text-brand-blue">{course.instructor}</span>
                    </p>

                    {/* Level & Enrolled Students */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-medium rounded-full  bg-[#F5F5F6] text-[#4B4C53] px-3 py-[6px]">
                            <MdOutlineSignalCellularAlt className="h-5 w-5" />
                            <span>{course.level}</span>
                        </div>

                        {/* Avatar Stack */}
                        <div className="flex items-center">
                            <div className="flex -space-x-2 overflow-hidden">
                                {course.studentsAvatars.slice(0, 3).map((avatar, index) => (
                                    <div
                                        key={index}
                                        className="relative h-8 w-8 overflow-hidden rounded-full "
                                    >
                                        <Image
                                            src={avatar}
                                            alt="Student Avatar"
                                            fill
                                            sizes="32px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="-ml-1.5 z-3 flex h-8 items-center justify-center rounded-full bg-brand-lime px-1.5 text-xs font-medium text-brand-dark">
                                {course.totalStudents}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="mt-4 flex items-baseline">
                    <span className="text-xl font-bold text-brand-blue">
                        ${course.price}
                    </span>
                    <span className="text-xs text-[#4F4F4F]">/{course.billingType}</span>
                </div>
            </div>
        </div>
    );
};