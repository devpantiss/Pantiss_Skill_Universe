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

// Memoized static card data
const cardData: CardProps[] = [
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745475/pexels-lalesh-167964_wzo43t.jpg",
    text: "Tuition Assistance",
    path: "/benefits-at-pantiss/tution-assistance",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745529/pexels-william-fortunato-6392819_fgmuiv.jpg",
    text: "Parenting Benefits",
    path: "/benefits-at-pantiss/parenting-benefits",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745669/markus-frieauff-IJ0KiXl4uys-unsplash_vrjbwr.jpg",
    text: "Health Insurance",
    path: "/benefits-at-pantiss/health-insurance",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745777/anaclara-vardiero-NjrenDTlyeU-unsplash_aj5rpa.jpg",
    text: "Retirement Programmes",
    path: "/benefits-at-pantiss/retirement-programmes",
  },
];

/* --------------------------------
   CARD COMPONENT
-------------------------------- */

const Card = memo(({ image, text, path, isLarge = false }: CardProps) => (
  <div
    className={`group relative overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30
      ${isLarge ? "h-[500px]" : "h-64"}`}
  >
    <Link to={path}>
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-4 pb-4 pt-14">
        <p
          className={`border-l-4 border-[#d9a441] pl-3 font-semibold text-white
            ${isLarge ? "lg:text-3xl text-xl" : "text-xl"}`}
        >
          {text}
        </p>
      </div>
    </Link>
  </div>
));

Card.displayName = "Card";

/* --------------------------------
   MAIN COMPONENT
-------------------------------- */

const BenefitsPantiss: React.FC = () => {
  // Memoized large card data
  const largeCard = useMemo<CardProps>(
    () => ({
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761769438/IMG_20241120_122703579_HDR_vmypeg.jpg",
      text: "Career Development",
      path: "/benefits-at-pantiss/career-development",
    }),
    []
  );

  return (
    <section className="bg-[#070707] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5d38a]">
          Faculty & Staff Support
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Growth, wellbeing, and professional learning
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-300">
          Pantiss supports educators and staff with development pathways, wellbeing practices, and policies that help them do meaningful work over the long term.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Card {...largeCard} isLarge />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <Card
                key={card.path}
                image={card.image}
                text={card.text}
                path={card.path}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BenefitsPantiss);
