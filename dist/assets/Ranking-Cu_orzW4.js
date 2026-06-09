import{b as s,j as e,m as i}from"./vendor-framer-Bt7i1YgA.js";const o=[{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153774/AICTE_xarfut.png",description:"AICTE"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153775/iisssc-removebg-preview_1_nif3qf.png",description:"IISSSC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/UGC-removebg-preview_l5xzoo.png",description:"UGC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1761681320/SCMS_ehl7t2.png",description:"SCMS"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/pssclogoBlack_waqzas.png",description:"PSSC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1761681341/RCPSDC_ag2fwu.png",description:"RCPSDC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153704/NSDC-Preview-removebg-preview_ztn40e.png",description:"NSDC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/mepsc-png-cropped_1_rquk2z.png",description:"MEPSC"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153776/NCVET-removebg-preview_rnzmxe.png",description:"NCVET"},{logo:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762153775/LSC-logo-300x138-removebg-preview_fefyvr.png",description:"LSC"}],r=({logo:a,description:n})=>e.jsx(i.div,{className:"w-64 p-6  rounded-lg transition-all shadow-lg flex flex-col items-center gap-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},"aria-label":n,children:e.jsx("img",{src:a,alt:"Accreditation Logo",className:"h-24 w-auto object-contain",loading:"lazy",decoding:"async"})}),t=()=>e.jsxs("section",{className:"relative bg-center bg-cover bg-no-repeat py-12 px-4",style:{backgroundImage:"url(/Homepage/accredition.jpg)"},children:[e.jsx("style",{children:`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee {
              animation: none;
            }
          }
        `}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"}),e.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[e.jsx("div",{className:"mb-8 text-center",children:e.jsxs("h1",{className:"text-4xl font-semibold text-white",children:["Our ",e.jsx("span",{className:"text-green-600",children:"Accreditations"})]})}),e.jsx("div",{className:"overflow-hidden whitespace-nowrap relative",children:e.jsx(i.div,{className:"marquee p-3",children:o.concat(o).map((a,n)=>e.jsx("div",{className:"w-64 mx-4",children:e.jsx(r,{...a})},n))})})]})]}),l=s.memo(t);export{l as default};
