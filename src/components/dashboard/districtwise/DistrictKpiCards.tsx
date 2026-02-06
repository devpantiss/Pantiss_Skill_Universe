type District = {
    registered: number;
    enrolled: number;
    trained: number;
    assessed: number;
    certified: number;
    batches: number;
  };
  
  export default function DistrictKpiCards({ data }: { data: District[] }) {
    const totals = data.reduce(
      (acc, d) => {
        acc.registered += d.registered;
        acc.enrolled += d.enrolled;
        acc.trained += d.trained;
        acc.assessed += d.assessed;
        acc.certified += d.certified;
        acc.batches += d.batches;
        return acc;
      },
      {
        registered: 0,
        enrolled: 0,
        trained: 0,
        assessed: 0,
        certified: 0,
        batches: 0,
      }
    );
  
    const Card = ({ label, value }: { label: string; value: number }) => (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="text-2xl font-semibold text-gray-100">
          {value.toLocaleString()}
        </div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="h-1 w-10 bg-red-600 mt-2 rounded" />
      </div>
    );
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card label="Registered" value={totals.registered} />
        <Card label="Enrolled" value={totals.enrolled} />
        <Card label="Trained" value={totals.trained} />
        <Card label="Assessed" value={totals.assessed} />
        <Card label="Certified" value={totals.certified} />
        <Card label="Total Batches" value={totals.batches} />
      </div>
    );
  }
  