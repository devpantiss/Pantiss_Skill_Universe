import{b as t,j as e,m as n}from"./vendor-framer-D4O7vqfh.js";const o=[{logo:"/Homepage/acceredition/aicte.png",description:"AICTE"},{logo:"/Homepage/acceredition/iisssc.png",description:"IISSSC"},{logo:"/Homepage/acceredition/ugc_logo.png",description:"UGC"},{logo:"/Homepage/acceredition/SCMS.png",description:"SCMS"},{logo:"/Homepage/acceredition/pssc.png",description:"PSSC"},{logo:"/Homepage/acceredition/RCPSDC.png",description:"RCPSDC"},{logo:"/Homepage/acceredition/NSDC.png",description:"NSDC"},{logo:"/Homepage/acceredition/MEPSC.png",description:"MEPSC"},{logo:"/Homepage/acceredition/ncvet.png",description:"NCVET"},{logo:"/Homepage/acceredition/lsc.png",description:"LSC"}],c=({logo:a,description:i})=>e.jsx(n.div,{className:"w-64 p-6  rounded-lg transition-all shadow-lg flex flex-col items-center gap-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},"aria-label":i,children:e.jsx("img",{src:a,alt:"Accreditation Logo",className:"h-24 w-auto object-contain",loading:"lazy",decoding:"async"})}),s=()=>e.jsxs("section",{className:"relative bg-center bg-cover bg-no-repeat py-12 px-4",style:{backgroundImage:"url(/Homepage/accredition.jpg)"},children:[e.jsx("style",{children:`
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
        `}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"}),e.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[e.jsx("div",{className:"mb-8 text-center",children:e.jsxs("h1",{className:"text-4xl font-semibold text-white",children:["Our ",e.jsx("span",{className:"text-green-600",children:"Accreditations"})]})}),e.jsx("div",{className:"overflow-hidden whitespace-nowrap relative",children:e.jsx(n.div,{className:"marquee p-3",children:o.concat(o).map((a,i)=>e.jsx("div",{className:"w-64 mx-4",children:e.jsx(c,{...a})},i))})})]})]}),l=t.memo(s);export{l as default};
