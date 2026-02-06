import React from "react";

/* ---------------- COLUMN HEADERS ---------------- */

const programmeHeaders = [
  "Domain Skilling",
  "Recognition of Prior Learning",
  "Government Training",
  "Recruit Train Deploy",
  "PMKVY-Category 4",
  "Department SDC",
  "PMKVY-Category 1",
];

/* ---------------- TABLE DATA ---------------- */

const sectorData = [
  {
    sector: "IT-ITES",
    values: [88296, null, 819, 1102, 584, 2081, 465],
    total: 93347,
  },
  {
    sector: "Apparel",
    values: [28031, null, 1888, 4249, 146, 450, 460],
    total: 35224,
  },
  {
    sector: "Agriculture",
    values: [1729, 20400, 11935, 20, 360, null, null],
    total: 34444,
  },
  {
    sector: "Healthcare",
    values: [18148, null, null, 1836, 360, 1200, 299],
    total: 21843,
  },
  {
    sector: "Electronics",
    values: [10750, null, 1491, 1559, 786, 160, 1578],
    total: 16324,
  },
  {
    sector: "Entrepreneurship",
    values: [null, 11468, null, null, null, null, null],
    total: 11468,
  },
];

/* ---------------- COMPONENT ---------------- */

const ProgrammePivotLayout: React.FC = () => {
  return (
    <section className="bg-black border border-zinc-800 rounded-xl mt-4 p-4">
      {/* Header pill */}
      <div className="bg-red-600 rounded-t-xl px-4 py-2 text-right font-semibold text-white">
        Programme / CandidateID
      </div>

      <div className="border border-t-0 border-zinc-800 rounded-b-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-max w-full text-sm border-collapse">
            {/* TABLE HEAD */}
            <thead className="bg-zinc-900">
              <tr>
                <th className="sticky left-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-left text-zinc-200">
                  SectorName
                </th>

                {programmeHeaders.map((header) => (
                  <th
                    key={header}
                    className="border border-zinc-800 px-3 py-2 text-center text-zinc-300 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}

                <th className="sticky right-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                  Grand total
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {sectorData.map((row) => (
                <tr
                  key={row.sector}
                  className="odd:bg-zinc-950 even:bg-zinc-900"
                >
                  {/* Sticky left */}
                  <td className="sticky left-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 text-zinc-200">
                    {row.sector}
                  </td>

                  {/* Scrollable cells */}
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`border border-zinc-800 px-3 py-2 text-center text-zinc-300 ${
                        val
                          ? "bg-red-900/20 font-medium"
                          : "text-zinc-500"
                      }`}
                    >
                      {val ? val.toLocaleString() : "-"}
                    </td>
                  ))}

                  {/* Sticky right */}
                  <td className="sticky right-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 font-semibold text-red-500">
                    {row.total.toLocaleString()}
                  </td>
                </tr>
              ))}

              {/* GRAND TOTAL ROW */}
              <tr className="bg-zinc-900 font-semibold">
                <td className="sticky left-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                  Grand total
                </td>

                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  167,453
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  39,678
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  22,956
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  18,255
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  4,558
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  4,531
                </td>
                <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                  3,446
                </td>

                <td className="sticky right-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-red-600">
                  260,877
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProgrammePivotLayout;
