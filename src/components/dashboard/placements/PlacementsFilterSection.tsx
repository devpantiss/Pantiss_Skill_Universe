type Props = {
  fy: string;
  setFy: (v: string) => void;

  state: string;
  setState: (v: string) => void;

  district: string;
  setDistrict: (v: string) => void;

  gender: string;
  setGender: (v: string) => void;

  specialCategory: string;
  setSpecialCategory: (v: string) => void;

  contractType: string;
  setContractType: (v: string) => void;
};

export default function PlacementsFilterSection({
  fy,
  setFy,
  state,
  setState,
  district,
  setDistrict,
  gender,
  setGender,
  specialCategory,
  setSpecialCategory,
  contractType,
  setContractType,
}: Props) {
  return (
    <section className="bg-black border border-red-600 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

        {/* FY */}
        <FilterBox
          label="FY"
          value={fy}
          onChange={setFy}
          options={["All", "2022-23", "2023-24", "2024-25"]}
        />

        {/* State */}
        <FilterBox
          label="State"
          value={state}
          onChange={setState}
          options={["All", "Odisha", "Jharkhand", "Chhattisgarh"]}
        />

        {/* District */}
        <FilterBox
          label="District"
          value={district}
          onChange={setDistrict}
          options={[
            "All",
            "Khordha",
            "Cuttack",
            "Ganjam",
            "Sundargarh",
            "Mayurbhanj",
            "Koraput",
          ]}
        />

        {/* Gender */}
        <FilterBox
          label="Gender"
          value={gender}
          onChange={setGender}
          options={["All", "Male", "Female", "Other"]}
        />

        {/* Special District */}
        <FilterBox
          label="Special Category"
          value={specialCategory}
          onChange={setSpecialCategory}
          options={["All", "Aspirational", "LWE", "Tribal Dominated"]}
        />

        {/* Contract Type */}
        <FilterBox
          label="Contract Type"
          value={contractType}
          onChange={setContractType}
          options={["All", "Permanent", "Contractual", "Apprenticeship"]}
        />

      </div>
    </section>
  );
}

/* ===================== FILTER BOX ===================== */

function FilterBox({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wide text-white/60">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-gray-950
          border border-white/10
          text-white
          rounded-md
          px-3 py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-red-600
          hover:border-red-600/60
        "
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
