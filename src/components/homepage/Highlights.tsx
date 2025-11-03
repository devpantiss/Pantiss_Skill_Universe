import React, { memo, useMemo } from "react";
import { MdEventAvailable, MdCampaign } from "react-icons/md";
import { FaMicrophoneAlt, FaBlog, FaAward } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";

// ====================
// Types
// ====================
type NewsCategory =
  | "Events"
  | "Stories"
  | "Campaigns"
  | "Podcasts"
  | "News"
  | "Reports"
  | "Awards"
  | "Blogs";

interface NewsItem {
  category: NewsCategory;
  title: string;
  description: string;
  imageUrl?: string;
  linkText: string;
}

interface NewsCardProps {
  item: NewsItem;
}

// ====================
// Icons
// ====================
const categoryIcons: Record<NewsCategory, JSX.Element> = {
  Events: <MdEventAvailable className="inline-block mr-2 text-xl" />,
  Stories: <SiStorybook className="inline-block mr-2 text-xl" />,
  Campaigns: <MdCampaign className="inline-block mr-2 text-xl" />,
  Podcasts: <FaMicrophoneAlt className="inline-block mr-2 text-xl" />,
  News: <HiNewspaper className="inline-block mr-2 text-xl" />,
  Reports: <BiSolidReport className="inline-block mr-2 text-xl" />,
  Awards: <FaAward className="inline-block mr-2 text-xl" />,
  Blogs: <FaBlog className="inline-block mr-2 text-xl" />,
};

// ====================
// News Items — Pantiss Skill Universe Highlights
// ====================
const newsItems: NewsItem[] = [
  {
    category: "Events",
    title: "Pantiss Skill Universe Hosts National Skill Conclave 2025",
    description:
      "Pantiss brought together policy leaders, industry experts, and students for the National Skill Conclave 2025 — a platform to discuss India's journey towards Industry 4.0 and future-ready skill ecosystems.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192166/events_2_e7pyqc.jpg",
    linkText: "Read More",
  },
  {
    category: "Stories",
    title: "Transforming Lives: From Trainee to Technician",
    description:
      "Meet Sushil from Jharsuguda — a Pantiss trainee who transitioned from an informal worker to a certified instrumentation technician through Pantiss’ blended skilling programs.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192516/tribal_Youth_dormitories_radqjp.jpg",
    linkText: "Explore Story",
  },
  {
    category: "News",
    title: "Pantiss Recognized as a Deemed-to-be Skill University by UGC",
    description:
      "Pantiss Skill Universe achieves a major milestone as it is officially recognized as a Deemed-to-be University by the University Grants Commission, becoming India’s pioneer in integrated skill-based higher education.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192305/news_vftigf.jpg",
    linkText: "Learn More",
  },
  {
    category: "Awards",
    title: "Pantiss Wins 'Best Skill Innovation Institute 2025'",
    description:
      "Awarded by the Ministry of Skill Development & Entrepreneurship, Pantiss was honored for excellence in integrating sustainability, technology, and vocational training.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735191971/Awards_bbpnu5.jpg",
    linkText: "See Details",
  },
  {
    category: "Blogs",
    title: "Skilling for Sustainability: The Pantiss Green Campus Model",
    description:
      "How Pantiss Skill Universe is embedding green technologies and circular economy principles into its curriculum, promoting eco-conscious skilling for future industries.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg",
    linkText: "Read Blog",
  },
  {
    category: "Campaigns",
    title: "Skill on Wheels: Taking Learning to Rural India",
    description:
      "Pantiss’ mobile training units are empowering youth in remote districts through skill-on-wheels initiatives, bridging the access gap for rural learners.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735193450/WhatsApp_Image_2024-12-26_at_11.39.49_AM_hzpigw.jpg",
    linkText: "View Campaign",
  },
  {
    category: "Podcasts",
    title: "Skill Futures: A Talk with Prof. A. K. Mishra",
    description:
      "Join Prof. Mishra, Vice Chancellor of Pantiss, as he shares insights on how the university is reshaping the skilling landscape and creating pathways for dignified employment.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192862/podcast_qpq54k.jpg",
    linkText: "Listen Now",
  },
  {
    category: "Reports",
    title: "The Skill Advantage: India’s Workforce 2030 Report by Pantiss",
    description:
      "A comprehensive research publication by Pantiss, highlighting the role of skill universities in driving equitable, green, and digital transitions across India.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735193655/billy-albert-5lNKe_pE3oA-unsplash_xcpi6h.jpg",
    linkText: "Download Report",
  },
];

// ====================
// NewsCard Component
// ====================
const NewsCard: React.FC<NewsCardProps> = memo(({ item }) => (
  <div className="group ring-1 ring-green-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-transparent hover:bg-green-600 transition-all duration-300">
    <div className="p-6 transition-all duration-300 group-hover:bg-green-600">
      <p className="text-2xl font-bold flex justify-start items-center uppercase text-green-600 group-hover:text-white mb-2 transition-all duration-300">
        {categoryIcons[item.category]}
        {item.category}
      </p>
      <h2 className="text-lg font-semibold mb-4 text-green-600 group-hover:text-white transition-all duration-300">
        {item.title}
      </h2>
      <p className="text-gray-50 group-hover:text-white mb-6 line-clamp-3 transition-all duration-300">
        {item.description}
      </p>
      <a
        href="#"
        className="text-sm font-semibold text-gray-50 group-hover:text-white hover:underline transition-all duration-300"
      >
        {item.linkText} →
      </a>
    </div>

    {item.imageUrl && (
      <div
        className="h-48 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <div className="absolute top-0 left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-transparent group-hover:border-t-green-600 transition-all duration-300"></div>
      </div>
    )}
  </div>
));
NewsCard.displayName = "NewsCard";

// ====================
// Highlights Component
// ====================
const Highlights: React.FC = () => {
  const newsList = useMemo(() => newsItems, []);

  return (
    <div className="relative bg-black overflow-hidden px-4 sm:px-10">
      {/* Background circles for gradient depth */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-green-400 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>

      {/* Smaller glowing circles */}
      <div className="absolute top-10 right-1/3 w-16 h-16 bg-red-500 rounded-full blur-xl opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-12 h-12 bg-red-500 rounded-full blur-lg opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-14 h-14 bg-blue-400 rounded-full blur-lg opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/2 w-10 h-10 bg-green-500 rounded-full blur-md opacity-40"></div>

      <section className="relative container mx-auto py-10 z-10">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Spotlight
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {newsList.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Highlights);
