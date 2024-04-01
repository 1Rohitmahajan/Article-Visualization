import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';

function Year(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl);
        const apiData = response.data;
        setData(apiData);
      } catch (error) {
        toast.error("Data could not be fetched");
      }
    }
    fetchData();
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const startYearsData = data.map((item) => item.start_year);
      const endYearsData = data.map((item) => item.end_year);

      const ctx = document.getElementById('yearChart').getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: startYearsData,
            datasets: [
              {
                label: 'Start Year',
                data: startYearsData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'End Year',
                data: endYearsData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Year',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Index',
                },
              },
            },
          },
        });
      }
    }
  }, [data]);

  return (
    <>
      <h1>This is Year page</h1>
      <canvas id="yearChart" width="400" height="200"></canvas>
    </>
  );
}

Year.propTypes = {
  data: PropTypes.array,
};

export default Year;
