import{b as r,j as e}from"./vendor-framer-Bt7i1YgA.js";const s=r.memo(()=>{const o=[{name:"School for Mines, Steel & Aluminium",src:"/SCHOOLS/MINES-BG.png"},{name:"School for Furniture & Fitting",src:"/SCHOOLS/FURNITURE-BG.png"},{name:"School for Power & Green Energy",src:"/SCHOOLS/POEN-BG.png"},{name:"School for Shipping & Logistics",src:"/SCHOOLS/SHIPPIN-BG.png"},{name:"School for Construction Tech & Infra Equipments",src:"/SCHOOLS/INFRA-BG.png"},{name:"School for Green Jobs",src:"/SCHOOLS/GREENJOBS-BG.png"}];return e.jsxs("div",{className:"flex lg:hidden top-24 left-0 w-full bg-black bg-opacity-90 z-40 overflow-hidden",children:[e.jsx("div",{className:"marquee flex animate-marquee whitespace-nowrap",children:[...o,...o].map((n,a)=>e.jsx("img",{src:n.src,alt:`${n.name} logo`,className:"inline-block h-20 w-auto mx-4 object-contain",loading:"lazy",decoding:"async"},`${n.name}-${a}`))}),e.jsx("style",{children:`
        .marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `})]})});s.displayName="SchoolLogoStrip";export{s as default};
