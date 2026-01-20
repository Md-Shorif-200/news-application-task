import Link from 'next/link';
import React from 'react';

export default function NewsCard({ news }) {
  return (
    <div className="news_card max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* Image */}
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-52 object-cover"
      />

      {/* Card Body */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{news?.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-md font-normal mb-2">
          {news?.description ? news?.description.slice(0, 100) + '...' : 'No description'}
        </p>

        {/* Author and Source */}
        <div className="flex justify-between items-center text-lg text-black mb-2">
          <span>{news?.source?.name || 'Unknown Author'}</span>
          <Link href={news?.source?.url} className="hover:underline text-blue-500">
             Channel
          </Link>
        </div>

        {/* Published Date */}
        <p className="text-gray-400 text-xs">
          {new Date(news?.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
