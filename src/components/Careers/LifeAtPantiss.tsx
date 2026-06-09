import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";

/* --------------------------------
   TYPES
-------------------------------- */

type CardProps = {
  image: string;
  text: string;
  path: string;
  isLarge?: boolean;
};

/* --------------------------------
   DATA
-------------------------------- */

const cardData: CardProps[] = [
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740136/blogs_oulxwa.jpg",
    text: "Inclusiveness & Diversity",
    path: "/life-at-pantiss/inclusiveness-and-diversity",
  },
  {
    image:
      "https://ohsguide.workplacenl.ca/topic/violence_harassment/161.png",
    text: "Zero Tolerance for Harassment",
    path: "/life-at-pantiss/zero-tolerance-for-harassment",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740271/smartworks-coworking-Uz8THWPXwhI-unsplash_cb6pab.jpg",
    text: "Meet the Leaders",
    path: "/life-at-pantiss/meet-the-leaders",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740478/marcel-strauss-fzqxoFJytiE-unsplash_ftv7eh.jpg",
    text: "Mental Health & Wellbeing",
    path: "/life-at-pantiss/investing-in-mental-health",
  },
];

/* --------------------------------
   CARD COMPONENT
-------------------------------- */

const Card = memo(
  ({ image, text, path, isLarge }: CardProps) => (
    <div
      className={`group relative overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30
      ${isLarge ? "h-[550px]" : "h-64"}`}
    >
      <Link to={path}>
        <img
          src={image}
          alt={text}
          loading="lazy"
          className="w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-5 pt-16">
          <p className="border-l-4 border-[#d9a441] pl-3 text-xl font-semibold text-white">
            {text}
          </p>
        </div>
      </Link>
    </div>
  )
);

Card.displayName = "Card";

/* --------------------------------
   MAIN COMPONENT
-------------------------------- */

const LifeAtPantiss: React.FC = () => {
  const largeCard = useMemo<CardProps>(
    () => ({
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740582/WhatsApp_Image_2024-12-28_at_6.28.04_PM_swufs2.jpg",
      text: "People of Pantiss",
      path: "/life-at-pantiss/people-at-pantiss",
      isLarge: true,
    }),
    []
  );

  return (
    <section id="life-at-pantiss" className="bg-[#070707] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5d38a]">
          Campus Community
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Life inside Pantiss Skill University
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-300">
          Work alongside trainers, mentors, administrators, and industry partners in an academic environment built around practical learning, student dignity, and community impact.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <Card {...largeCard} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <Card key={card.path} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LifeAtPantiss);
