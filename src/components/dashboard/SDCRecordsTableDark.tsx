import React from "react";

const columns = [
  "SDCCode",
  "TCName",
  "District",
  "Block",
  "Sector",
  "CourseName",
  "SchemeName",
  "Department",
  "Enrolled",
  "Ongoing",
  "Training Over",
  "Assessed",
];

const data = [
  {
    sdc: "DS20162001813900",
    tc: "Central Institute of...",
    district: "Bhagalpur",
    block: "Jagdishpur",
    sector: "Entrepreneurship",
    course: "RAMP_RPL",
    scheme: "RAMP_RPL",
    dept: "Industry - UDYOG MITRA",
    enrolled: 2560,
    ongoing: 0,
    training: 2560,
    assessed: 2048,
  },
  {
    sdc: "DS20160001813900",
    tc: "Central Institute of...",
    district: "Vaishali",
    block: "Hajipur Sadar",
    sector: "Entrepreneurship",
    course: "RAMP_RPL",
    scheme: "RAMP_RPL",
    dept: "Industry - UDYOG MITRA",
    enrolled: 1480,
    ongoing: 0,
    training: 1480,
    assessed: 1200,
  },
  {
    sdc: "DS08030001",
    tc: "Saraswati Charitable Trust",
    district: "Siwan",
    block: "Pachrukhi",
    sector: "IT-ITES",
    course: "Domestic Data Entry Operator",
    scheme: "BSDM Scheme",
    dept: "Information Technology",
    enrolled: 1470,
    ongoing: 0,
    training: 1470,
    assessed: 1320,
  },
];

const SDCRecordsTableDark: React.FC = () => {
  return (
    <section className="bg-black border border-zinc-800 rounded-xl mt-4 overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-4 py-2 text-white font-semibold">
        SDC / Training Center Records
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-max w-full text-sm border-collapse">
          <thead className="bg-zinc-900 sticky top-0 z-20">
            <tr>
              <th className="px-3 py-2 border border-zinc-800 text-center text-zinc-300">
                #
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-3 py-2 border border-zinc-800 text-left text-zinc-300 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="odd:bg-zinc-950 even:bg-zinc-900 hover:bg-zinc-800 transition"
              >
                <td className="px-3 py-2 border border-zinc-800 text-center text-zinc-400">
                  {i + 1}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.sdc}
                </td>
                <td
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[180px]"
                  title={row.tc}
                >
                  {row.tc}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.district}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.block}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.sector}
                </td>
                <td
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[200px]"
                  title={row.course}
                >
                  {row.course}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.scheme}
                </td>
                <td
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[200px]"
                  title={row.dept}
                >
                  {row.dept}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                  {row.enrolled.toLocaleString()}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                  {row.ongoing}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                  {row.training.toLocaleString()}
                </td>
                <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                  {row.assessed.toLocaleString()}
                </td>
              </tr>
            ))}

            {/* Grand Total Row */}
            <tr className="bg-zinc-900 font-semibold">
              <td colSpan={9} className="px-3 py-2 border border-zinc-800 text-right text-zinc-300">
                Grand total
              </td>
              <td className="px-3 py-2 border border-zinc-800 text-right text-red-500">
                260,877
              </td>
              <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                13,270
              </td>
              <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                247,607
              </td>
              <td className="px-3 py-2 border border-zinc-800 text-right text-zinc-200">
                159,932
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-zinc-400 bg-zinc-950 border-t border-zinc-800">
        <span>1 – 10 / 2454</span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border border-zinc-700 rounded hover:bg-zinc-800">
            ◀
          </button>
          <button className="px-2 py-1 border border-zinc-700 rounded hover:bg-zinc-800">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default SDCRecordsTableDark;
