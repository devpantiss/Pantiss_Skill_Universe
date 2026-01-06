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
    text: "Tution Assistance",
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
    className={`relative shadow-lg rounded-lg overflow-hidden group
      bg-neutral-900 border border-neutral-800
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

      <div className="absolute bottom-0 left-0 bg-neutral-950/90 px-3 py-2 rounded-tr-lg">
        <p
          className={`text-red-500 font-semibold
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
    <div className="bg-neutral-950 max-w-7xl mx-auto py-12 px-4 sm:px-8">
      {/* Header Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        BENEFITS AT PANTISS SKILL UNIVERSE{" "}
      </h2>

      <p className="mt-4 max-w-3xl text-neutral-400">
        Pantiss’s staff are supported to pursue a rewarding career, with our
        benefits serving the unique needs of everyone in the Pantiss family.
      </p>

      {/* Cards Layout */}
      <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4">
        {/* Large Card on the Left */}
        <div className="lg:col-span-2">
          <Card {...largeCard} isLarge />
        </div>

        {/* Small Cards Grid on the Right */}
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
  );
};

export default memo(BenefitsPantiss);
