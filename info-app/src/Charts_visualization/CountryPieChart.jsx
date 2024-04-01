import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
function CountryPieChart(props) {
  const [data, setdata]=useState([])
  useEffect(()=>{
      const fetchData = async () =>
       {
          try {
            const response = await axios.get(BaseUrl);
            const apiData = response.data;
             setdata(apiData)
           }
          catch (error)
           {
              toast.error("data is not run")
              
            }
      }
      fetchData();

},[]) 


const chartRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    let filteredData = data;

    if (selectedCountry) {
      filteredData = data.filter((item) => item.country === selectedCountry);
    }

    const uniqueCountries = [...new Set(filteredData.map((item) => item.country))];
    const countryCounts = uniqueCountries.map((country) => {
      return filteredData.filter((item) => item.country === country).length;
    });

    const ctx = document.getElementById('countryPieChart').getContext('2d');

    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: uniqueCountries,
          datasets: [
            {
              data: countryCounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
            },
          ],
        },
      });
    }
  }, [data, selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <h3>Country Data Counts (Pie Chart)</h3>

      {/* Filter Dropdown */}
      <label htmlFor="filterCountry">Filter by Country:</label>
      <select
        id="filterCountry"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">All</option>
{Array.from(new Set(data.map((item) => item.country))).map((country) => (
  <option key={country} value={country}>
    {country}
  </option>
))}
      </select>
      <div>
      <canvas id="countryPieChart" width="400" height="200"></canvas>

      </div>
    </>
  );
}

CountryPieChart.propTypes = {
  data: PropTypes.array,
};

export default CountryPieChart;
