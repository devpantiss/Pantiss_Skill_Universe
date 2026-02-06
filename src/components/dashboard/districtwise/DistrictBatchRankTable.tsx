type Props = {
    data: { district: string; batches: number }[];
  };
  
  export default function DistrictBatchRankTable({ data }: Props) {
    const ranked = [...data].sort((a, b) => b.batches - a.batches);
  
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-gray-100 font-semibold mb-4">
          District Rank by Total Batches
        </h3>
  
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400">
              <th className="py-2 text-left">Rank</th>
              <th className="text-left">District</th>
              <th className="text-right">Batches</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((d, i) => (
              <tr
                key={d.district}
                className="border-b border-gray-800 last:border-0 hover:bg-gray-800"
              >
                <td className="py-2 text-gray-100">{i + 1}</td>
                <td className="text-gray-100">{d.district}</td>
                <td className="text-right text-red-500 font-medium">
                  {d.batches}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }  