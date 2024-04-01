import React, {useState,  useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
function Regions(props) {
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
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [filterOptions, setFilterOptions] = useState(['All']);
  const [regionColors, setRegionColors] = useState({});

  useEffect(() => {

    const uniqueRegions = new Set(data.map(item => item.region));

    setFilterOptions(['All', ...Array.from(uniqueRegions)]);


    const colors = generateColors(uniqueRegions.size);

    const colorsMap = {};
    let index = 0;
    uniqueRegions.forEach(region => {
      colorsMap[region] = colors[index];
      index++;
    });
    setRegionColors(colorsMap);
  }, [data]);

  const handleFilterChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredData = selectedRegion === 'All'
    ? data
    : data.filter(item => item.region === selectedRegion);

  const regionCount = filteredData.reduce((acc, value) => {
    acc[value.region] = (acc[value.region] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(regionCount),
    datasets: [
      {
        data: Object.values(regionCount),
        backgroundColor: Object.keys(regionCount).map(region => regionColors[region]),
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className="region-container  bg-rose-200	">
      <h1 className="chart-title">Region Pie Chart</h1>


      <label htmlFor="filterRegion">Filter by Region:</label>
      <select
        id="filterRegion"
        value={selectedRegion}
        onChange={handleFilterChange}
      >
        {filterOptions.map(option => (
          <option
            key={option}
            value={option}
            className="filter-option"
          >
            {option}
          </option>
        ))}
      </select>

      <div className="chart-wrapper">
        <Pie data={chartData} options={chartOptions} width={500} height={500} />
      </div>
    </div>
  );
}

Regions.propTypes = {
  data: PropTypes.array,
};

export default Regions;

function generateColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = (i * 137.508) % 360;
    colors.push(`hsla(${hue}, 70%, 60%, 0.6)`);
  }
  return colors;
}
