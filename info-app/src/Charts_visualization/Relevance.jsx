import React, {useState,  useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
const relevanceColors = {
  3: 'rgba(255, 99, 132, 0.6)',
  4: 'rgba(54, 162, 235, 0.6)',
  5: 'rgba(255, 206, 86, 0.6)',
  6: 'rgba(75, 192, 192, 0.6)',
  7: 'rgba(0, 255, 153)',
};

const filterOptions = [
  { value: 'All', label: 'All' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7'}
];

function Relevance(props) {
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
  const [selectedRelevance, setSelectedRelevance] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedRelevance(event.target.value);
  };

  const filteredData = selectedRelevance === 'All'
    ? data
    : data.filter(item => item.relevance === parseInt(selectedRelevance, 10));

  const relevanceCount = filteredData.reduce((acc, value) => {
    acc[value.relevance] = (acc[value.relevance] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(relevanceCount),
    datasets: [
      {
        data: Object.values(relevanceCount),
        backgroundColor: Object.keys(relevanceCount).map(relevance => relevanceColors[relevance]),
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className="relevance-container  bg-fuchsia-200	 ">
      <h1 className="chart-title">Relevance Pie Chart</h1>

    
      <label htmlFor="filterRelevance">Filter by Relevance:</label>
      <select
        id="filterRelevance"
        value={selectedRelevance}
        onChange={handleFilterChange}
      >
        {filterOptions.map(option => (
          <option
            key={option.value}
            value={option.value}
            className="filter-option"
          >
            {option.label}
          </option>
        ))}
      </select>

      <div className="chart-wrapper">
        <Pie data={chartData} options={chartOptions} width={500} height={500} />
      </div>
    </div>
  );
}

Relevance.propTypes = {
  data: PropTypes.array,
};

export default Relevance;
