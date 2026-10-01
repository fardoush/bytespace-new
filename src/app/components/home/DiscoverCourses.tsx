"use client";

import React, { useState, useMemo } from "react";
import { Course } from "../types/course";
import { CourseCard } from "../shared/CourseCard";


const CATEGORIES = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
] as const;

const DUMMY_COURSES: Course[] = [
    {
        id: "1",
        title: "Learn Figma from Basic",
        instructor: "purepearl studio",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        price: "25",
        billingType: "lifetime",
        image: "/category/category1.jpg",
        studentsAvatars: [
            "/clients/client1.jpg",
            "/clients/clients2.jpg",
            "/clients/client3.jpg",
        ],
        totalStudents: "26+",
        category: "Featured",
    },
    {
        id: "2",
        title: "Music Production Essentials",
        instructor: "soundwave academy",
        lessons: 20,
        duration: "3 hours 45 mins",
        comments: 42,
        rating: 4.8,
        level: "Intermediate",
        price: "35",
        billingType: "lifetime",
        image: "/category/category2.jpg",
        studentsAvatars: [
            "/clients/client4.jpg",
            "/clients/client5.jpg",
            "/clients/client6.jpg",
        ],
        totalStudents: "40+",
        category: "Music",
    },
    {
        id: "3",
        title: "Oil Painting Fundamentals",
        instructor: "artistry hub",
        lessons: 12,
        duration: "1 hour 50 mins",
        comments: 18,
        rating: 4.6,
        level: "Beginner",
        price: "20",
        billingType: "lifetime",
        image: "/category/category3.jpg",
        studentsAvatars: [
            "/clients/client7.jpg",
            "/clients/client1.jpg",
            "/clients/clients2.jpg",
        ],
        totalStudents: "15+",
        category: "Drawing & Painting",
    },
    {
        id: "4",
        title: "Digital Marketing Strategy 2026",
        instructor: "growth masters",
        lessons: 25,
        duration: "4 hours 10 mins",
        comments: 88,
        rating: 4.9,
        level: "All Levels",
        price: "45",
        billingType: "lifetime",
        image: "/category/category4.jpg",
        studentsAvatars: [
            "/clients/client3.jpg",
            "/clients/client4.jpg",
            "/clients/client5.jpg",
        ],
        totalStudents: "120+",
        category: "Marketing",
    },
    {
        id: "5",
        title: "2D Character Animation in After Effects",
        instructor: "motion lab",
        lessons: 18,
        duration: "3 hours 12 mins",
        comments: 31,
        rating: 4.7,
        level: "Intermediate",
        price: "30",
        billingType: "lifetime",
        image: "/category/category5.jpg",
        studentsAvatars: [
            "/clients/client6.jpg",
            "/clients/client7.jpg",
            "/clients/client1.jpg",
        ],
        totalStudents: "35+",
        category: "Animation",
    },
    {
        id: "6",
        title: "Social Media Growth Mastery",
        instructor: "brand scaling",
        lessons: 14,
        duration: "2 hours 05 mins",
        comments: 64,
        rating: 4.4,
        level: "Beginner",
        price: "22",
        billingType: "lifetime",
        image: "/category/category6.jpg",
        studentsAvatars: [
            "/clients/clients2.jpg",
            "/clients/client3.jpg",
            "/clients/client4.jpg",
        ],
        totalStudents: "90+",
        category: "Social Media",
    },
    {
        id: "7",
        title: "UX Research & Design Systems",
        instructor: "pixel perfect",
        lessons: 22,
        duration: "3 hours 30 mins",
        comments: 75,
        rating: 4.9,
        level: "Advanced",
        price: "50",
        billingType: "lifetime",
        image: "/clients/client7.jpg",
        studentsAvatars: [
            "/clients/client1.jpg",
            "/clients/client5.jpg",
            "/clients/client6.jpg",
        ],
        totalStudents: "200+",
        category: "UI/UX Design",
    },
    {
        id: "8",
        title: "Creative Storytelling for Brands",
        instructor: "ad lab",
        lessons: 10,
        duration: "1 hour 40 mins",
        comments: 23,
        rating: 4.3,
        level: "Beginner",
        price: "18",
        billingType: "lifetime",
        image: "/clients/client1.jpg",
        studentsAvatars: [
            "/clients/client2.jpg",
            "/clients/client3.jpg",
            "/clients/client4.jpg",
        ],
        totalStudents: "18+",
        category: "Creative Marketing",
    },
    {
        id: "9",
        title: "Procreate Illustration for Beginners",
        instructor: "draw studio",
        lessons: 16,
        duration: "2 hours 45 mins",
        comments: 50,
        rating: 4.8,
        level: "Beginner",
        price: "28",
        billingType: "lifetime",
        image: "/clients/clients2.jpg",
        studentsAvatars: [
            "/clients/client5.jpg",
            "/clients/client6.jpg",
            "/clients/client7.jpg",
        ],
        totalStudents: "85+",
        category: "Digital Illustration",
    },
    {
        id: "10",
        title: "Cinematic Video Editing in Premiere Pro",
        instructor: "filmcraft",
        lessons: 30,
        duration: "5 hours 20 mins",
        comments: 112,
        rating: 4.9,
        level: "All Levels",
        price: "60",
        billingType: "lifetime",
        image: "/clients/client3.jpg",
        studentsAvatars: [
            "/clients/client1.jpg",
            "/clients/client2.jpg",
            "/clients/client3.jpg",
        ],
        totalStudents: "300+",
        category: "Film & Video",
    },
    {
        id: "11",
        title: "Handmade Pottery & Crafts",
        instructor: "craft studio",
        lessons: 8,
        duration: "1 hour 15 mins",
        comments: 14,
        rating: 4.2,
        level: "Beginner",
        price: "15",
        billingType: "lifetime",
        image: "/clients/client4.jpg",
        studentsAvatars: [
            "/clients/client4.jpg",
            "/clients/client5.jpg",
            "/clients/client6.jpg",
        ],
        totalStudents: "12+",
        category: "Crafts",
    },
    {
        id: "12",
        title: "From Idea to Startup Success",
        instructor: "entrepreneur hub",
        lessons: 21,
        duration: "3 hours 50 mins",
        comments: 95,
        rating: 4.8,
        level: "Intermediate",
        price: "40",
        billingType: "lifetime",
        image: "/clients/client5.jpg",
        studentsAvatars: [
            "/clients/client7.jpg",
            "/clients/client1.jpg",
            "/clients/client2.jpg",
        ],
        totalStudents: "150+",
        category: "Freelance & Entrepreneurship",
    },
    {
        id: "13",
        title: "Graphic Design Masterclass in Photoshop",
        instructor: "design pro",
        lessons: 26,
        duration: "4 hours 00 mins",
        comments: 80,
        rating: 4.7,
        level: "All Levels",
        price: "35",
        billingType: "lifetime",
        image: "/clients/client6.jpg",
        studentsAvatars: [
            "/clients/client3.jpg",
            "/clients/client4.jpg",
            "/clients/client5.jpg",
        ],
        totalStudents: "210+",
        category: "Graphic Design",
    },
    {
        id: "14",
        title: "Portrait Photography & Lighting Techniques",
        instructor: "shutter lab",
        lessons: 15,
        duration: "2 hours 30 mins",
        comments: 39,
        rating: 4.6,
        level: "Intermediate",
        price: "30",
        billingType: "lifetime",
        image: "/clients/client7.jpg",
        studentsAvatars: [
            "/clients/client6.jpg",
            "/clients/client7.jpg",
            "/clients/client1.jpg",
        ],
        totalStudents: "65+",
        category: "Photography",
    },
    {
        id: "15",
        title: "Balancing Productivity and Life",
        instructor: "mindset studio",
        lessons: 11,
        duration: "1 hour 45 mins",
        comments: 47,
        rating: 4.5,
        level: "Beginner",
        price: "20",
        billingType: "lifetime",
        image: "/clients/client1.jpg",
        studentsAvatars: [
            "/clients/client2.jpg",
            "/clients/client3.jpg",
            "/clients/client4.jpg",
        ],
        totalStudents: "50+",
        category: "Productivity",
    },
    {
        id: "16",
        title: "Fullstack Next.js & TypeScript Roadmap",
        instructor: "code craft",
        lessons: 35,
        duration: "6 hours 15 mins",
        comments: 140,
        rating: 5.0,
        level: "Intermediate",
        price: "55",
        billingType: "lifetime",
        image: "/clients/clients2.jpg",
        studentsAvatars: [
            "/clients/client5.jpg",
            "/clients/client6.jpg",
            "/clients/client7.jpg",
        ],
        totalStudents: "450+",
        category: "Web Development",
    },
    {
        id: "17",
        title: "The Power of Big Data & AI",
        instructor: "data academy",
        lessons: 28,
        duration: "4 hours 45 mins",
        comments: 67,
        rating: 4.8,
        level: "Advanced",
        price: "50",
        billingType: "lifetime",
        image: "/clients/client3.jpg",
        studentsAvatars: [
            "/clients/client1.jpg",
            "/clients/client2.jpg",
            "/clients/client3.jpg",
        ],
        totalStudents: "110+",
        category: "Data Science",
    },
    {
        id: "18",
        title: "Italian Cooking Masterclass",
        instructor: "chef kitchen",
        lessons: 14,
        duration: "2 hours 20 mins",
        comments: 29,
        rating: 4.7,
        level: "Beginner",
        price: "25",
        billingType: "lifetime",
        image: "/clients/client4.jpg",
        studentsAvatars: [
            "/clients/client4.jpg",
            "/clients/client5.jpg",
            "/clients/client6.jpg",
        ],
        totalStudents: "40+",
        category: "Cooking",
    },
];

export default function DiscoverCourses() {
    const [activeCategory, setActiveCategory] = useState<string>("Featured");
    const [showAllCategories, setShowAllCategories] = useState<boolean>(false);

    // Tab click logic
    const filteredCourses = useMemo(() => {
        if (activeCategory === "Featured") {
            return DUMMY_COURSES;
        }
        return DUMMY_COURSES.filter((course) => course.category === activeCategory);
    }, [activeCategory]);

    const visibleCategories = showAllCategories
        ? CATEGORIES
        : CATEGORIES.slice(0, 18);

    return (
        <section className="w-full bg-white px-5 py-10 md:py-[60px] lg:py-[72px] md:px-10 xl:px-20">
            <div className="mx-auto max-w-[1200px]">
                {/* Section Header */}
                <div className=" text-center">
                    <h2 className="mx-auto max-w-[588px] text-3xl font-semibold leading-[120%] tracking-[-0.01em] text-[#040819] sm:text-4xl lg:text-[44px]">
                        Discover Your Passion, <br />
                        Build Your Skills
                    </h2>
                    <p className="lg:max-w-[917px] mx-auto mt-4 text-base font-normal leading-[160%] text-[#82868E] sm:text-lg">
                        At Bytespace Courses, we bring you closer to life-changing
                        knowledge. Explore a variety of courses across different fields,
                        from technology to the arts, and make a difference in your career
                        and life.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="mt-10 w-full xl:max-w-[1080px] mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-x-4 md:gap-y-5">
                    {visibleCategories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-4 py-[9.5px] text-base font-medium transition-all duration-200 cursor-pointer ${isActive
                                        ? "bg-brand-lime text-brand-dark shadow-sm font-medium"
                                        : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E4E4E7]"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        onClick={() => setShowAllCategories((prev) => !prev)}
                        className="px-2 py-2 text-sm font-medium text-brand-blue hover:underline cursor-pointer"
                    >
                        {showAllCategories ? "Less" : "+ More"}
                    </button>
                </div>

                {/* Course Grid */}
                <div className="mt-10 lg:mt-[77px]">
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredCourses.slice(0, 6).map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 py-16 text-center">
                            <p className="text-lg font-medium text-[#040819]">
                                No courses available for "{activeCategory}"
                            </p>
                            <p className="mt-1 text-sm text-[#82868E]">
                                Try selecting "Featured" or another category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}