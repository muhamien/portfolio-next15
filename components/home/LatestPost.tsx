'use client'

import { useState } from 'react'
import Image from 'next/image'

// Sample blog posts data with Unsplash images
const blogPosts = [
  {
    id: 1,
    title: "Coworking Spaces for Startups, Freelancer.",
    category: "PERSONAL",
    date: "Sep 26, 2018",
    author: "AivahThemes",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop",
    slug: "coworking-spaces-for-startups"
  },
  {
    id: 2,
    title: "Perfect Garnish Your Dishes - Chef Techniques",
    category: "FOOD",
    date: "Sep 27, 2018",
    author: "AivahThemes",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&h=1000&fit=crop",
    slug: "perfect-garnish-your-dishes"
  },
  {
    id: 3,
    title: "Be The Extra in Trending Demin Outfits",
    category: "LIFE STYLE",
    date: "Sep 28, 2018",
    author: "AivahThemes",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
    slug: "trending-demin-outfits"
  }
]

export default function LatestPost() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="w-full py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Posts</h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Category Badge */}
                  <span className="inline-block self-start mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gray-800 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
