type Props = {
    district: string;
    setDistrict: (value: string) => void;
  };
  
  const districts = [
    "All",
    "Khordha",
    "Cuttack",
    "Ganjam",
    "Sundargarh",
    "Balasore",
    "Mayurbhanj",
    "Puri",
    "Kalahandi",
    "Koraput",
    "Keonjhar",
  ];
  
  export default function DistrictFilterBar({ district, setDistrict }: Props) {
    return (
      <div className="bg-black border border-red-600 rounded-xl p-4">
        <label className="block text-sm text-gray-400 mb-2">
          Select District
        </label>
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="w-64 bg-gray-950 border border-red-600 text-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    );
  }
  