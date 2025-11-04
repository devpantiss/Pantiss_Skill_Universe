import React, { memo } from "react";
import Marquee from "react-fast-marquee";

// Partner arrays
const governmentPartners: string[] = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188053/msde_jzjwry.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153704/NSDC-Preview-removebg-preview_ztn40e.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188284/DGT_fgtetb.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188424/ministry_of_mines_y3mkst.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188627/ministry_of_heavy_industry_ttauzk.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188693/OSDA_qxy5qr.png",
];

const corporatePartners: string[] = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163608/Jindal_Steel_and_Power_Logo.svg_oiahk4.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163613/dhoot-trans-removebg-preview_rz6kgo.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163669/fleetguard_fxp8wb.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163645/schneider_electric_if28pt.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163686/TATA_STEEL-removebg-preview_nkf1kz.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163698/vedanta-removebg-preview_oxywkl.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762187763/hitachi-removebg-preview_uby3ku.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762187905/pngwing.com_xhrrhe.png"
];

const multilateralPartners: string[] = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/pssclogoBlack_waqzas.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/mepsc-png-cropped_1_rquk2z.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153775/LSC-logo-300x138-removebg-preview_fefyvr.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153775/asci-removebg-preview_xn0nuq.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762153775/iisssc-removebg-preview_1_nif3qf.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1762188977/WMPSC_adgkmq.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681320/SCMS_ehl7t2.png"
];

interface PartnerSectionProps {
  title: string;
  partners: string[];
  direction: "left" | "right";
  borderSide: "r" | "l";
}

// Partner Section
const PartnerSection: React.FC<PartnerSectionProps> = memo(
  ({ title, partners, direction, borderSide }) => {
    const borderClass =
      borderSide === "r" ? "border-r-4 border-red-600" : "border-l-4 border-red-600";

    return (
      <div className="relative flex justify-center items-center py-24">
        <div className="w-full relative z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute z-20 h-44 w-44 rounded-full bg-black -top-10 flex flex-col justify-center items-center">
              {/* Circle border */}
              <div className={`absolute top-0 left-0 w-full h-full rounded-full ${borderClass}`}></div>
              {/* Top & bottom dots */}
              <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
              <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
              {/* Inner circle with title */}
              <div className="w-36 h-36 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
                <span className="text-xl text-white font-bold">{title}</span>
              </div>
            </div>
          </div>
          {/* Logos Marquee */}
          <Marquee gradient={false} speed={50} direction={direction} pauseOnHover>
            {partners.map((logo, index) => (
              <div
                key={index}
                className="mx-6"
                style={{ width: "200px", height: "80px" }}
              >
                <img
                  src={logo}
                  alt={`${title} Partner ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  loading="lazy"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/150")
                  }
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    );
  }
);
PartnerSection.displayName = "PartnerSection";

// Our Partners Section
const OurPartners: React.FC = () => {
  return (
    <div className="relative bg-black flex flex-col justify-center items-center py-14 px-4 sm:px-12 overflow-hidden">
      {/* Background Blurred Color Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-green-400 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>

      {/* Extra small blurred circles for depth */}
      <div className="absolute top-10 right-1/3 w-16 h-16 bg-red-500 rounded-full blur-xl opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-12 h-12 bg-red-500 rounded-full blur-lg opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-14 h-14 bg-blue-400 rounded-full blur-lg opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/2 w-10 h-10 bg-green-500 rounded-full blur-md opacity-40"></div>
      <div className="absolute top-2/3 left-1/5 w-20 h-20 bg-orange-500 rounded-full blur-2xl opacity-30"></div>

      {/* Heading */}
      <div className="flex justify-center mb-6 relative z-10">
        <h1 className="text-4xl sm:text-4xl font-bold text-white px-6 py-2 rounded-lg shadow-lg">
          OUR PARTNERS
        </h1>
      </div>

      {/* Timeline with Sections */}
      <div className="relative w-full">
        {/* Vertical Dashed Line */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[3px] h-[550px] border-l-[3px] border-dashed border-red-600 z-0"></div>

        <PartnerSection
          title="Government"
          partners={governmentPartners}
          direction="left"
          borderSide="r"
        />
        <PartnerSection
          title="Industry"
          partners={corporatePartners}
          direction="right"
          borderSide="l"
        />
        <PartnerSection
          title="SSC's"
          partners={multilateralPartners}
          direction="left"
          borderSide="r"
        />
      </div>
    </div>
  );
};

export default memo(OurPartners);
