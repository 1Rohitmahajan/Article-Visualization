import React, { useState, useEffect } from "react";
import axios from "axios";
import "chart.js";
import {Chart as ChartJS,BarElement,CategoryScale, ArcElement} from 'chart.js'
import {Bar}  from 'react-chartjs-2'
import 'chart.js/auto';


import {ToastContainer, toast } from 'react-toastify';

// ChartJS.register(CategoryScale, ArcElement);
const  PestalnceLineChart = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9090/informations");
        const apiData = response.data;
        console.log(apiData)
        const years = apiData.map((item) => item.end_year);
        const  Pestal = apiData.map((item) => item.pestal);

        const chartData = {
          labels: years,
          datasets: [
            {
              label: "Relevance",
              data: Pestal,
              backgroundColor: "rgba(75, 367, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        setData(chartData);
        setLoading(false);
      } catch (error) {
        toast.error(
        "data is not run"
        )
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chartOptions = {
    scales: {
      x: [
        {
          type: "category",
        },
      ],
      y: [
        {
          beginAtZero: true,
        },
      ],
    },
  };

  return (
    <div>
      <h2>Bar Chart for  end_year and Pestal Field   </h2>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default PestalnceLineChart;
