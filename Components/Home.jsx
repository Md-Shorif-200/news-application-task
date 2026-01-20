"use client";

import { useEffect, useState } from "react";
import News from "./NewsCard";
import NewsCard from "./NewsCard";
import CountrySelector from "./CountrySelector";
import Loading from "@/app/loading";

export default function Home() {
  const [country, setCountry] = useState("us");
  const [allNews, setAllNews] = useState([]);

  const [loading, setLoading] = useState(false);

  console.log(country);
  console.log(allNews);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
     

      try {
        const response =
          await fetch(`https://gnews.io/api/v4/top-headlines?country=${country}&apikey=${process.env.NEXT_PUBLIC_BASE_URL}`);
        //   await fetch(`https://newsapi.org/v2/everything?q=${country}&apiKey=${process.env.NEXT_PUBLIC_BASE_URL}`);

        const data = await response.json();
        setAllNews(data.articles);
      } catch (error) {
        alert("something is wrong");
      } finally {
        setLoading(false);
       
      }
    };

    fetchNews();
  }, [country]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full md:w-6xl px-2  pb-10 mx-auto">
      <header className=" w-full flex justify-between items-center">
        <h1 className="text-lg lg:text-xl font-semibold uppercase mt-6 mb-12">
          Global Job Portal
        </h1>
        <CountrySelector country={country} setCountry={setCountry} />
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews?.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </main>
    </div>
  );
}
