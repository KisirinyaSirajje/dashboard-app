import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["Text", "Text", "Text", "Text", "Text", "Text", "Text"],
    datasets: [
      {
        label: "Performance",
        data: [50, 90, 60, 120, 70, 100, 80],
        borderColor: "#6D28D9",
        backgroundColor: "rgba(109, 40, 217, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Performance Over Time",
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4 h-[calc(100vh-280px)]">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
