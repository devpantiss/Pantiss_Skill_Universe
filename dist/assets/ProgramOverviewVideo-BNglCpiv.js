import{j as e,a as c}from"./vendor-framer-BxTJDxAq.js";const u=({logos:r,heading:t,height:a="h-20",speed:n="20s",gap:l="mx-6",bg:s="bg-black/90",className:i=""})=>e.jsxs("div",{className:`w-full overflow-hidden ${s} ${i}`,children:[t&&e.jsxs("div",{className:"text-center py-6",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:t}),e.jsx("span",{className:"block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-green-500 to-red-500 rounded-full"})]}),e.jsx("div",{className:"marquee flex items-center whitespace-nowrap",style:{animation:`marquee ${n} linear infinite`},children:[...r,...r].map((o,m)=>e.jsx("img",{src:o.src,alt:o.name,className:`inline-block ${a} w-auto object-contain ${l}`,loading:"lazy"},`${o.name}-${m}`))}),e.jsx("style",{children:`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `})]}),x=({videoId:r})=>{const t=c.useRef(null),[a,n]=c.useState(!1);c.useEffect(()=>{const s=new IntersectionObserver(([i])=>{n(i.isIntersecting)},{threshold:.5});return t.current&&s.observe(t.current),()=>s.disconnect()},[]);const l=`https://www.youtube.com/embed/${r}?autoplay=${a?1:0}&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playsinline=1&playlist=${r}`;return e.jsxs("section",{ref:t,className:"relative w-full min-h-screen bg-black overflow-hidden",children:[e.jsx("iframe",{src:l,title:"Program Overview Video",className:"absolute inset-0 w-full h-full",frameBorder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0}),e.jsx("div",{className:"absolute inset-0 bg-black/40"}),e.jsx("div",{className:`
          absolute top-6 left-6 z-20
          bg-black/70 backdrop-blur-md
          border border-neutral-700
          px-5 py-3 rounded-xl
        `,children:e.jsx("span",{className:"text-sm font-semibold tracking-wide text-white",children:"Program Overview"})})]})};export{u as L,x as P};
