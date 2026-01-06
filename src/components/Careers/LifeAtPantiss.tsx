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
      className={`relative rounded-lg overflow-hidden shadow-lg group
      bg-neutral-900 border border-neutral-800
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

        <div className="absolute bottom-0 left-0 bg-neutral-950/90 px-4 py-2 rounded-tr-lg">
          <p className="text-red-500 font-semibold text-xl">
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
    <section className="bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* CUSTOM HEADING (replacing Heading component) */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          LIFE INSIDE THE PANTISS SKILL UNIVERSE
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-400">
          A people-first ecosystem built on inclusiveness, integrity,
          innovation, and purpose-driven leadership.
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
