import React from "react";

const districtsOdisha = [
  "Angul",
  "Balasore",
  "Bargarh",
  "Bhadrak",
  "Cuttack",
  "Dhenkanal",
  "Ganjam",
  "Keonjhar",
  "Khordha",
  "Mayurbhanj",
];

const departments = [
  {
    name: "Information Technology",
    values: [1036, 6837, 13112, 2500, 1900, 2200, 3100, 4200, 3800, 2600],
    total: 68915,
  },
  {
    name: "Social Welfare",
    values: [6293, 1377, 938, 1800, 1200, 900, 2100, 3000, 2600, 1900],
    total: 46664,
  },
  {
    name: "Skill Development Mission",
    values: [7602, 1214, 938, 1500, 1700, 1100, 2300, 2600, 2400, 2500],
    total: 29879,
  },
  {
    name: "Agriculture",
    values: [1767, 810, 420, 900, 1100, 950, 1400, 1600, 1500, 1300],
    total: 28736,
  },
];

const schemes = [
  { name: "Wise Travels", values: [84, 0, 0, 0], total: 846 },
  { name: "Welspun Steel", values: [10, 0, 0, 0], total: 100 },
  { name: "Welspun Shipping", values: [8, 0, 0, 0], total: 85 },
  { name: "Web Development", values: [15, 0, 0, 0], total: 60 },
];

const schemeHeaders = ["Tourism", "Sci & Tech", "SANKALP", "Recruitment"];

const EnrollmentPivotLayoutDark: React.FC = () => {
  return (
    <section className="bg-black rounded-xl border border-zinc-800 mt-4 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT TABLE */}
        <div>
          {/* Header pill */}
          <div className="bg-red-600 rounded-t-xl px-4 py-2 text-right font-semibold text-white">
            District / CandidateID
          </div>

          <div className="border border-t-0 border-zinc-800 rounded-b-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-max w-full text-sm border-collapse">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="sticky left-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-left text-zinc-200">
                      Department
                    </th>

                    {districtsOdisha.map((d) => (
                      <th
                        key={d}
                        className="border border-zinc-800 px-3 py-2 text-center text-zinc-300 whitespace-nowrap"
                      >
                        {d}
                      </th>
                    ))}

                    <th className="sticky right-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                      Grand total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {departments.map((row) => (
                    <tr key={row.name} className="odd:bg-zinc-950 even:bg-zinc-900">
                      <td className="sticky left-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 text-zinc-200">
                        {row.name}
                      </td>

                      {row.values.map((v, i) => (
                        <td
                          key={i}
                          className="border border-zinc-800 px-3 py-2 text-center text-zinc-300"
                        >
                          {v || "-"}
                        </td>
                      ))}

                      <td className="sticky right-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 font-semibold text-red-500">
                        {row.total.toLocaleString()}
                      </td>
                    </tr>
                  ))}

                  {/* Grand total row */}
                  <tr className="bg-zinc-900 font-semibold">
                    <td className="sticky left-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                      Grand total
                    </td>
                    {districtsOdisha.map((_, i) => (
                      <td
                        key={i}
                        className="border border-zinc-800 px-3 py-2 text-center text-zinc-400"
                      >
                        —
                      </td>
                    ))}
                    <td className="sticky right-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-red-600">
                      260,877
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT TABLE */}
        <div>
          {/* Header pill */}
          <div className="bg-red-600 rounded-t-xl px-4 py-2 text-right font-semibold text-white">
            SchemeName / CandidateID
          </div>

          <div className="border border-t-0 border-zinc-800 rounded-b-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-max w-full text-sm border-collapse">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="sticky left-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-left text-zinc-200">
                      CourseName
                    </th>

                    {schemeHeaders.map((h) => (
                      <th
                        key={h}
                        className="border border-zinc-800 px-3 py-2 text-center text-zinc-300 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}

                    <th className="sticky right-0 z-20 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                      Grand total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {schemes.map((row) => (
                    <tr key={row.name} className="odd:bg-zinc-950 even:bg-zinc-900">
                      <td className="sticky left-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 text-zinc-200">
                        {row.name}
                      </td>

                      {row.values.map((v, i) => (
                        <td
                          key={i}
                          className="border border-zinc-800 px-3 py-2 text-center text-zinc-300"
                        >
                          {v || "-"}
                        </td>
                      ))}

                      <td className="sticky right-0 z-10 bg-inherit border border-zinc-800 px-3 py-2 font-semibold text-red-500">
                        {row.total}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-zinc-900 font-semibold">
                    <td className="sticky left-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-200">
                      Grand total
                    </td>
                    <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                      870
                    </td>
                    <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                      10,818
                    </td>
                    <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                      6,541
                    </td>
                    <td className="border border-zinc-800 px-3 py-2 text-center text-zinc-300">
                      18,25
                    </td>
                    <td className="sticky right-0 z-10 bg-zinc-900 border border-zinc-800 px-3 py-2 text-red-600">
                      260,877
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentPivotLayoutDark;