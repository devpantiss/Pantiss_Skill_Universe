import React, { useState, useMemo } from "react";
import Modal from "react-modal";
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  addDays, isSameDay, isToday,
} from "date-fns";

// Define interface for tab data
interface TabData {
  title: string;
  content: string;
  hasNotification: boolean;
}

Modal.setAppElement("#root");

const daysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Static Data
const GALLERY = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512446733611-9099a758e0da?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80",
];

const EVENTS = [
  { date: "2025-08-01", name: "Public Holiday", desc: "Onam Celebrations - All campus activities are suspended." },
  { date: "2025-08-07", name: "Career Workshop", desc: "Technician Skills Interview Prep - Auditorium A, 10AM-2PM" },
  { date: "2025-08-12", name: "Sports Meet", desc: "Inter-campus Volleyball Tournament and Fun Fairs." },
  { date: "2025-08-17", name: "Cultural Fest", desc: "Annual College Fest with music, food & competitions." },
];

// Move getMonthMatrix outside the component
function getMonthMatrix(year: number, month: number) {
  const matrix: Date[][] = [];
  const firstDay = startOfMonth(new Date(year, month));
  const lastDay = endOfMonth(new Date(year, month));
  let curr = startOfWeek(firstDay, { weekStartsOn: 0 });
  const end = endOfWeek(lastDay, { weekStartsOn: 0 });
  while (curr <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(curr);
      curr = addDays(curr, 1);
    }
    matrix.push(week);
  }
  return matrix;
}

const DashboardSection: React.FC = () => {
  // Notices State
  const [activeLeftTab, setActiveLeftTab] = useState<keyof typeof leftTabData>("Admission");
  const [activeRightTab, setActiveRightTab] = useState<keyof typeof rightTabData>("Tenders");

  // Notices Data
  const leftTabData: Record<string, TabData> = {
    Admission: {
      title: "Admission",
      content: "No Admission Notification Available! Check back later for updates on the admission process for the 2025-26 academic year.",
      hasNotification: false,
    },
    Examinations: {
      title: "Examinations",
      content: "No Examination Notification Available! Stay tuned for upcoming exam schedules and results.",
      hasNotification: false,
    },
  };

  const rightTabData: Record<string, TabData> = {
    Tenders: {
      title: "Tenders",
      content: "No Tenders Notification Available! Check back for future tender announcements.",
      hasNotification: false,
    },
    Project: {
      title: "Project",
      content: "No Project Notification Available! Details on ongoing projects will be updated soon.",
      hasNotification: false,
    },
  };

  // Gallery and Calendar State
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const today = new Date();
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [selected, setSelected] = useState<Date>(today);
  const selectedDateStr = format(selected, "yyyy-MM-dd");
  const eventOnDate = EVENTS.find(ev => ev.date === selectedDateStr);

  return (
    <section
      className="w-full py-20 relative overflow-hidden bg-[length:cover] bg-center bg-no-repeat bg-fixed bg-[url('https://www.worldskillcenter.org/assets/user/images/parallax/5.jpg')]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Announcements Header */}
        <div className="mb-14 text-center">
          <h2 className="text-white text-4xl font-extrabold border-b-4 border-green-600 pb-4 inline-block">
            📣 Announcements
          </h2>
          <p className="text-gray-50 text-xl mt-4">
            Updated: August 06, 2025 | New Academic Calendar 2025-26 | Result for Assistant Professor Post
          </p>
        </div>

        {/* Symmetrical Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Notices - Left Dominant Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-red-600 p-6">
            <div className="flex flex-col space-y-6 h-full">
              {/* Left Tabs */}
              <div className="flex space-x-2">
                {Object.keys(leftTabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveLeftTab(tab as keyof typeof leftTabData)}
                    className={`px-5 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                      activeLeftTab === tab
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-gray-200 text-red-600 hover:bg-gray-300"
                    }`}
                    aria-controls={`left-tab-content-${tab}`}
                    aria-selected={activeLeftTab === tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div
                id={`left-tab-content-${activeLeftTab}`}
                className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-red-600"
              >
                <h3 className="text-green-600 text-2xl font-semibold mb-4 flex items-center">
                  📋 {leftTabData[activeLeftTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                  {leftTabData[activeLeftTab].content}
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  View All →
                </button>
              </div>

              {/* Right Tabs */}
              <div className="flex space-x-2">
                {Object.keys(rightTabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveRightTab(tab as keyof typeof rightTabData)}
                    className={`px-5 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                      activeRightTab === tab
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-gray-200 text-red-600 hover:bg-gray-300"
                    }`}
                    aria-controls={`right-tab-content-${tab}`}
                    aria-selected={activeRightTab === tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div
                id={`right-tab-content-${activeRightTab}`}
                className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-red-600"
              >
                <h3 className="text-green-600 text-2xl font-semibold mb-4 flex items-center">
                  {activeRightTab === "Tenders" ? "📑" : "📊"} {rightTabData[activeRightTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                  {rightTabData[activeRightTab].content}
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  View All →
                </button>
              </div>
            </div>
          </div>

          {/* Calendar - Left Middle Section */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl ring-2 ring-green-600 p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-green-600 mb-3">Events</h3>
            <div className="flex-1">
              <Calendar
                month={calendarMonth}
                year={calendarYear}
                onPrevMonth={() =>
                  calendarMonth === 0
                    ? (setCalendarYear(y => y - 1), setCalendarMonth(11))
                    : setCalendarMonth(m => m - 1)
                }
                onNextMonth={() =>
                  calendarMonth === 11
                    ? (setCalendarYear(y => y + 1), setCalendarMonth(0))
                    : setCalendarMonth(m => m + 1)
                }
                events={EVENTS}
                selected={selected}
                onSelectDate={setSelected}
              />
            </div>
            <div className="mt-3">
              {eventOnDate ? (
                <div className="w-full bg-green-600 text-black/90 rounded-xl py-3 px-5 shadow font-semibold text-center">
                  <div className="font-extrabold text-lg mb-1">{eventOnDate.name}</div>
                  <div className="text-base">{eventOnDate.desc}</div>
                </div>
              ) : (
                <div className="w-full px-4 py-3 text-gray-300 opacity-85 text-center border border-dashed border-white/25 rounded-lg bg-white/10">
                  <span>No event scheduled for this date.</span>
                </div>
              )}
            </div>
          </div>

          {/* Gallery - Right Middle Section */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-2 bg-white/10 backdrop-blur-xl rounded-2xl ring-2 ring-green-600 border border-white/10 shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-green-600 tracking-tight">Campus Gallery</h3>
              <span className="text-sm text-green-600 font-semibold">{GALLERY.length} Photos</span>
            </div>
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {GALLERY.map((src, i) => (
                  <button
                    key={i}
                    className="relative rounded-lg aspect-[4/3] border-0 shadow bg-white/10 overflow-hidden group focus-visible:ring-2 focus-visible:ring-green-600 hover:scale-105 transition"
                    onClick={() => setModalIdx(i)}
                    aria-label={`View gallery image ${i + 1}`}
                    tabIndex={0}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="h-full w-full object-cover transition group-hover:brightness-[.82] group-hover:blur-[2px]"
                      loading="lazy"
                    />
                    <span className="absolute right-2 bottom-2 bg-red-600/90 text-xs text-white px-2 py-1 rounded shadow">View</span>
                  </button>
                ))}
              </div>
            </div>
            <Modal
              isOpen={modalIdx !== null}
              onRequestClose={() => setModalIdx(null)}
              style={{
                content: {
                  background: "rgba(12,0,22,0.96)",
                  border: "none",
                  padding: 0,
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "24px",
                },
                overlay: { zIndex: 99, background: "rgba(10,0,18,0.94)" },
              }}
              contentLabel="Gallery Fullscreen"
            >
              {modalIdx !== null && (
                <div className="flex flex-col items-center w-full h-full justify-center relative">
                  <button
                    onClick={() => setModalIdx(null)}
                    className="absolute top-6 right-10 text-white bg-[#29133a]/90 hover:bg-red-600 rounded-full p-2 shadow-xl transition"
                    aria-label="Close gallery image"
                  >
                    ✕
                  </button>
                  <img
                    src={GALLERY[modalIdx]}
                    alt={`Gallery fullscreen ${modalIdx + 1}`}
                    className="object-contain max-h-[82vh] max-w-4xl rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              )}
            </Modal>
          </div>
        </div>
      </div>
      <style>{`
        .ReactModal__Overlay { z-index: 99; }
      `}</style>
    </section>
  );
};

// Calendar Sub-component
function Calendar({
  month,
  year,
  onPrevMonth,
  onNextMonth,
  events,
  selected,
  onSelectDate,
}: {
  month: number;
  year: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  events: { date: string }[];
  selected: Date;
  onSelectDate: (date: Date) => void;
}) {
  const monthMatrix = getMonthMatrix(year, month);
  const eventDatesSet = useMemo(() => new Set(events.map(ev => ev.date)), [events]);

  return (
    <div className="w-full select-none">
      <div className="flex justify-between items-center mb-2">
        <button
          className="px-2 py-1 text-white text-xl focus:ring-2 focus:ring-green-600 rounded hover:bg-red-600/20"
          onClick={onPrevMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        <div className="text-green-600 text-sm font-bold">{monthsFull[month]} {year}</div>
        <button
          className="px-2 py-1 text-white text-xl focus:ring-2 focus:ring-green-600 rounded hover:bg-red-600/20"
          onClick={onNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
      <div className="flex w-full text-center pb-1">
        {daysShort.map(day => (
          <div key={day} className="flex-1 text-xs font-bold text-green-600">{day}</div>
        ))}
      </div>
      <div className="flex flex-col w-full">
        {monthMatrix.map((week, wi) => (
          <div key={wi} className="flex w-full mb-[2px]">
            {week.map((date, di) => {
              const isCurMon = date.getMonth() === month;
              const currStr = format(date, "yyyy-MM-dd");
              const hasEvent = eventDatesSet.has(currStr);
              let ring = "";
              if (isSameDay(date, selected)) ring = "ring-2 ring-red-600 z-10";
              else if (isToday(date)) ring = "ring-2 ring-green-600 z-10";
              else if (!isCurMon) ring = "opacity-40";
              return (
                <button
                  key={di}
                  className={`
                    flex-1 max-w-[38px] aspect-square mx-[1px] rounded-lg
                    flex items-center justify-center text-[15px] font-semibold
                    transition
                    ${ring}
                    ${isCurMon ? "text-white bg-white/10 hover:bg-red-600/60 hover:text-white" : "text-gray-400"}
                    ${hasEvent ? "border-b-4 border-green-600" : ""}
                    outline-none focus:ring-2 focus:ring-red-600
                  `}
                  onClick={() => onSelectDate(date)}
                  tabIndex={0}
                  aria-label={format(date, "yyyy-MM-dd") + (hasEvent ? " (Event scheduled)" : "")}
                  aria-current={isSameDay(date, selected) ? "date" : undefined}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardSection;