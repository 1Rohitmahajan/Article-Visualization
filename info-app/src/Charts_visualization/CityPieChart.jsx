import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';

function CityPieChart(props) {
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl);
        const apiData = response.data;
        setdata(apiData);
      } catch (error) {
        toast.error("Data retrieval failed");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = selectedCity
        ? data.filter((item) => item.city === selectedCity)
        : data;

      setFilteredData(filtered);
    }
  }, [data, selectedCity]);

  useEffect(() => {
    if (filteredData) {
      const cityData = filteredData.map((item) => ({
        label: `${item.city} - Intensity: ${item.intensity}`,
        intensity: item.intensity,
      }));
      const cityNames = cityData.map((item) => item.label);
      const intensities = cityData.map((item) => item.intensity);

      // Generate different colors for each city
      const colors = generateRandomColors(cityNames.length);

      const ctx = document.getElementById('cityPieChart').getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: cityNames,
            datasets: [
              {
                data: intensities,
                backgroundColor: colors,
                borderColor: '#333', // Dark border color
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  generateLabels: function (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                      const legendItems = data.labels.map((label, i) => {
                        const style = data.datasets[0].backgroundColor[i];
                        return {
                          text: label,
                          fillStyle: style,
                          hidden: false,
                          index: i,
                        };
                      });
                      return legendItems;
                    }
                    return [];
                  },
                },
              },
            },
          },
        });
      }
    }
  }, [filteredData]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Function to generate random colors
  const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
      colors.push(color);
    }
    return colors;
  };

  return (
    <div className='bg-slate-200	'>
      <h1>City Data Counts (Pie Chart)</h1>
      <div>
        <label className='fb' htmlFor="cityFilter">Filter by City:</label>
        <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
          <option value="">All Cities</option>
          {/* Add options dynamically based on available cities in data */}
          {data &&
            Array.from(new Set(data.map((item) => item.city))).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
        <div>

        <canvas id="cityPieChart" width="500" height="500"></canvas>
        </div>
      </div>
    </div>
  );
}

CityPieChart.propTypes = {
  data: PropTypes.array,
};

export default CityPieChart;
