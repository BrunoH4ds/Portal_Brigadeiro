"use client";

import { useEffect, useState } from "react";
import NewsArray from "@/database/News";
import Link from "next/link";
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function NewsCarousel() {
  const [randomNews, setRandomNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffled = [...NewsArray].sort(() => 0.5 - Math.random());
    setRandomNews(shuffled.slice(0, 5));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? randomNews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === randomNews.length - 1 ? 0 : prev + 1));
  };

  if (randomNews.length === 0) return null;

  return (
    <div className="relative w-full mx-auto overflow-hidden mb-10">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {randomNews.map((news) => (
          <div key={news._id} className="min-w-full px-4">
            <Link href={`/Noticia/${news._id}`}>
              <div className="relative flex flex-col justify-end items-center shadow-md p-5 bg-[#1313138f] backdrop-blur-lg rounded-md hover:bg-blue-900 transition-all duration-300 w-auto h-96 cursor-pointer">
                <Image
                  src={news.image}
                  alt={news.title}
                  draggable={false}
                  layout="fill"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40 rounded-md"
                  priority
                />
                <h2 className="text-2xl font-bold text-white mb-2">
                  {news.title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3 text-center">
                  {Array.isArray(news.content)
                    ? news.content[0]?.text || "Leia mais..."
                    : news.content}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute shadow-md left-2 top-1/2 transform -translate-y-1/2 bg-blue-800 cursor-pointer text-white p-2 rounded-full hover:bg-blue-700 transition-all"
      >
        <IconArrowBadgeLeftFilled size={38} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute shadow-md right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 cursor-pointer text-white p-2 rounded-full hover:bg-blue-700 transition-all"
      >
        <IconArrowBadgeRightFilled size={38} />
      </button>
    </div>
  );
}
