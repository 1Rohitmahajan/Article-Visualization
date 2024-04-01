import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';

function Intensity(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl);
        const apiData = response.data;
        setData(apiData);
        setFilteredData(apiData);
      } catch (error) {
        toast.error("Data retrieval failed");
      }
    };
    fetchData();
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    if (filteredData.length > 0) {
      const cityIntensityData = filteredData.filter((item) => item.city && item.intensity);
      const cities = cityIntensityData.map((item) => item.city);
      const intensities = cityIntensityData.map((item) => item.intensity);

      const ctx = document.getElementById('intensityChart').getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const colors = generateRandomColors(cities.length);

        chartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: cities.map((city, index) => `${city} - Intensity: ${intensities[index]}`),
            datasets: [
              {
                label: 'Intensity',
                data: intensities,
                backgroundColor: colors,
                borderColor: '#333',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [filteredData]);

  // Function to generate random colors
  const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
      colors.push(color);
    }
    return colors;
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    if (e.target.value === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.city === e.target.value);
      setFilteredData(filtered);
    }
  };

  return (
    <div className='bg-amber-200	'>
      <h2  className='inset-0	'>This is Intensity page</h2>
      <div>
        <label htmlFor="cityFilter">Filter by City:</label>
        <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
          <option value="">All Cities</option>
          {data.map((item) => (
            <option key={item.city} value={item.city}>
              {item.city}
            </option>
          ))}
        </select>
      </div>
      <div>
      <canvas id="intensityChart" width="500" height="500"></canvas>

      </div>
    </div>
  );
}

Intensity.propTypes = {
  data: PropTypes.array,
};

export default Intensity;
