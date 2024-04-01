import React, {useState,  useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
const likelihoodColors = {
  1: 'rgba(255, 99, 132, 0.6)',
  2: 'rgba(54, 162, 235, 0.6)',
  3: 'rgba(255, 206, 86, 0.6)',
  4: 'rgba(75, 192, 192, 0.6)',
};

const filterOptions = [
  { value: 'All', label: 'All' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];

function Likelihood(props) {
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
  const [selectedLikelihood, setSelectedLikelihood] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedLikelihood(event.target.value);
  };

  const filteredData = selectedLikelihood === 'All'
    ? data
    : data.filter(item => item.likelihood === parseInt(selectedLikelihood, 10));

  const likelihoodCount = filteredData.reduce((acc, value) => {
    acc[value.likelihood] = (acc[value.likelihood] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(likelihoodCount),
    datasets: [
      {
        data: Object.values(likelihoodCount),
        backgroundColor: Object.keys(likelihoodCount).map(likelihood => likelihoodColors[likelihood]),
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className="likelihood-container bg-violet-100		">
      <h1 className="chart-title">Likelihood Pie Chart</h1>

      <label htmlFor="filterLikelihood">Filter by Likelihood:</label>
      <select
        id="filterLikelihood"
        value={selectedLikelihood}
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

Likelihood.propTypes = {
  data: PropTypes.array,
};

export default Likelihood;
