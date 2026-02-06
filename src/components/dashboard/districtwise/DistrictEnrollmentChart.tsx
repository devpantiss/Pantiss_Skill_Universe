import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  type Props = {
    data: { district: string; enrolled: number }[];
  };
  
  export default function DistrictEnrollmentChart({ data }: Props) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-gray-100 font-semibold mb-4">
          District-wise Enrolled Candidates
        </h3>
  
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="district"
                stroke="#9ca3af"
                angle={-30}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1f2933",
                  color: "#f9fafb",
                }}
              />
              <Bar dataKey="enrolled" fill="#dc2626" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  