type Props = {
    data: { district: string; enrolled: number }[];
  };
  
  export default function DistrictEnrolledRanking({ data }: Props) {
    const ranked = [...data].sort((a, b) => b.enrolled - a.enrolled);
    const max = ranked[0]?.enrolled || 1;
  
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-gray-100 font-semibold mb-4">
          All Districts Rank by Enrolled
        </h3>
  
        <div className="space-y-3">
          {ranked.map((d, i) => (
            <div key={d.district}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">
                  {i + 1}. {d.district}
                </span>
                <span className="text-gray-400">
                  {d.enrolled.toLocaleString()}
                </span>
              </div>
  
              <div className="h-2 bg-gray-800 rounded">
                <div
                  className="h-2 bg-red-600 rounded"
                  style={{ width: `${(d.enrolled / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  