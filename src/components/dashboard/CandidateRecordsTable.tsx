import React from "react";

/* ---------------- COLUMNS ---------------- */

const columns = [
  "CandidateID",
  "CandidateName",
  "Gender",
  "Age",
  "CasteCategory",
  "SDCCode",
  "TCName",
  "District",
  "Block",
  "SectorName",
  "CourseName",
];

/* ---------------- SAMPLE DATA ---------------- */

const data = [
  {
    id: "113784",
    name: "SONU KUMAR",
    gender: "MALE",
    age: 17,
    caste: "General",
    sdc: "DS182400174900",
    tc: "UDAIMAAN SAMASTIPUR",
    district: "Samastipur",
    block: "Samastipur",
    sector: "Electronics",
    course: "Field Engineer",
  },
  {
    id: "96102",
    name: "SHILPI KUMARI",
    gender: "FEMALE",
    age: 18,
    caste: "General",
    sdc: "DS04020019",
    tc: "Rajendra Institute of Education",
    district: "Gaya",
    block: "Guraru",
    sector: "Apparel",
    course: "Hand Embroidery",
  },
  {
    id: "96241",
    name: "SONALI KUMARI",
    gender: "FEMALE",
    age: 17,
    caste: "General",
    sdc: "DS04020019",
    tc: "Rajendra Institute of Education",
    district: "Gaya",
    block: "Guraru",
    sector: "Apparel",
    course: "Hand Embroidery",
  },
  {
    id: "111489",
    name: "KANGNA RANI",
    gender: "FEMALE",
    age: 15,
    caste: "Scheduled Caste",
    sdc: "DS182400174900",
    tc: "UDAIMAAN SAMASTIPUR",
    district: "Samastipur",
    block: "Samastipur",
    sector: "Electronics",
    course: "Field Engineer",
  },
];

/* ---------------- COMPONENT ---------------- */

const CandidateRecordsTable: React.FC = () => {
  return (
    <section className="bg-black border border-zinc-800 rounded-xl mt-4 overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-4 py-2 text-white font-semibold">
        Candidate Records
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-max w-full text-sm border-collapse">
          {/* TABLE HEAD */}
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

          {/* TABLE BODY */}
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id}
                className="odd:bg-zinc-950 even:bg-zinc-900 hover:bg-zinc-800 transition"
              >
                <td className="px-3 py-2 border border-zinc-800 text-center text-zinc-400">
                  {i + 1}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.id}
                </td>

                <td
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[160px]"
                  title={row.name}
                >
                  {row.name}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.gender}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.age}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.caste}
                </td>

                <td className="px-3 py-2 border border-zinc-800 text-zinc-200">
                  {row.sdc}
                </td>

                <td
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[200px]"
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
                  className="px-3 py-2 border border-zinc-800 text-zinc-200 truncate max-w-[220px]"
                  title={row.course}
                >
                  {row.course}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-2 text-xs text-zinc-400 bg-zinc-950 border-t border-zinc-800">
        <span>
          <strong>Placed*</strong> – Training Center marked candidate as{" "}
          <strong>Placed</strong> on portal
        </span>

        <div className="flex items-center gap-3">
          <span>1 – 100 / 150000</span>
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

export default CandidateRecordsTable;
