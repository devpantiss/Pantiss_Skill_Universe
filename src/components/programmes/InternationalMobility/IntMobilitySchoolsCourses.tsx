import React, { memo, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Polyline,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* =====================================================
   CONSTANTS
===================================================== */

const INDIA: [number, number] = [20.5937, 78.9629];

const destinations = [
  { name: "UAE", coords: [23.4241, 53.8478] },
  { name: "Saudi Arabia", coords: [23.8859, 45.0792] },
  { name: "Qatar", coords: [25.3548, 51.1839] },
  { name: "Australia", coords: [-25.2744, 133.7751] },
  { name: "Ukraine", coords: [48.3794, 31.1656] },
  { name: "South Africa", coords: [-30.5595, 22.9375] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Brazil", coords: [-14.235, -51.9253] },
  { name: "Mexico", coords: [23.6345, -102.5528] },
  { name: "Russia", coords: [61.524, 105.3188] },
];

/* =====================================================
   CURVE GENERATOR (QUADRATIC BEZIER)
===================================================== */

const generateCurve = (
  start: [number, number],
  end: [number, number],
  lift = 15,
  steps = 140,
): [number, number][] => {
  const midLat = (start[0] + end[0]) / 2 + lift;
  const midLng = (start[1] + end[1]) / 2;
  const curve: [number, number][] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const lat =
      (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * midLat + t * t * end[0];
    const lng =
      (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * midLng + t * t * end[1];

    curve.push([lat, lng]);
  }

  return curve;
};

/* =====================================================
   PLANE ICON
===================================================== */

const planeIcon = L.divIcon({
  className: "",
  html: `
    <svg width="22" height="22" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16L22 12L2 8L2 11L17 12L2 13L2 16Z"
        fill="#38bdf8"/>
    </svg>
  `,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

/* =====================================================
   MIGRATION ARCS
===================================================== */

const MigrationArcs = () => (
  <>
    {destinations.map((d, i) => (
      <Polyline
        key={i}
        positions={generateCurve(
          INDIA as [number, number],
          d.coords as [number, number],
        )}
        pathOptions={{
          color: "#38bdf8",
          weight: 2,
          opacity: 0.45,
          dashArray: "6 10",
        }}
      />
    ))}
  </>
);

/* =====================================================
   AIRPLANE ANIMATION
===================================================== */

const AnimatedFlights = () => {
  const map = useMap();

  useEffect(() => {
    const markers: L.Marker[] = [];
    const rafs: number[] = [];

    destinations.forEach((dest, idx) => {
      const curve = generateCurve(
        INDIA as [number, number],
        dest.coords as [number, number],
      );
      const marker = L.marker(INDIA as [number, number], {
        icon: planeIcon,
      }).addTo(map);

      marker.bindTooltip(dest.name, {
        direction: "top",
        offset: [0, -10],
        className: "flight-tooltip",
      });

      let frame = 0;

      const animate = () => {
        frame = (frame + 1) % curve.length;
        marker.setLatLng(curve[frame]);
        rafs[idx] = requestAnimationFrame(animate);
      };

      setTimeout(animate, idx * 900);
      markers.push(marker);
    });

    return () => {
      markers.forEach((m) => map.removeLayer(m));
      rafs.forEach((r) => cancelAnimationFrame(r));
    };
  }, [map]);

  return null;
};

/* =====================================================
   MAIN COMPONENT
===================================================== */

const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c"; // Replace with your actual API key


const IntMobilityTracksWorldMap: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/map/world.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  return (
    <section className="relative h-[620px] w-full rounded-3xl overflow-hidden">
      {/* INLINE CSS */}
      <style>{`
        .pulse-marker {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            stroke-opacity: 1;
            stroke-width: 2;
          }
          70% {
            stroke-opacity: 0;
            stroke-width: 12;
          }
          100% {
            stroke-opacity: 0;
            stroke-width: 2;
          }
        }

        .flight-tooltip {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255,255,255,0.15);
          color: #e5e7eb;
          font-size: 11px;
          border-radius: 8px;
          padding: 4px 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }
      `}</style>

      <MapContainer
        center={[18, 20]}
        zoom={2}
        minZoom={2}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: "#020617" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`} // Use template literal to insert API key
        />
        {geoData && (
          <GeoJSON
            data={geoData}
            style={{
              fillOpacity: 0,
              color: "#1e293b",
              weight: 1,
            }}
          />
        )}

        {/* INDIA HUB */}
        <CircleMarker
          center={INDIA}
          radius={10}
          pathOptions={{
            color: "#22c55e",
            fillColor: "#22c55e",
            fillOpacity: 1,
          }}
        >
          <Tooltip permanent direction="right">
            India (Origin)
          </Tooltip>
        </CircleMarker>

        {/* DESTINATIONS */}
        {destinations.map((d, i) => (
          <CircleMarker
            key={i}
            center={[d.coords[0], d.coords[1]] as [number, number]}
            radius={7}
            pathOptions={{
              color: "#38bdf8",
              fillColor: "#38bdf8",
              fillOpacity: 1,
              className: "pulse-marker",
            }}
          >
            <Tooltip permanent direction="top">
              {d.name}
            </Tooltip>
          </CircleMarker>
        ))}

        <MigrationArcs />
        <AnimatedFlights />
      </MapContainer>

      {/* LEGEND */}
      <div className="absolute bottom-6 left-6 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200">
        <div className="font-semibold text-white">
          Global Workforce Mobility
        </div>
        <div className="text-xs text-gray-400">
          India → Gulf • Europe • Americas • Africa • APAC
        </div>
      </div>
    </section>
  );
};

export default memo(IntMobilityTracksWorldMap);
