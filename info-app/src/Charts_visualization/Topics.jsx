import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import BaseUrl from '../Api/BaseUrl'; // Ensure BaseUrl is correctly defined
import { toast } from 'react-toastify';
import axios from 'axios';

function Topics(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl); // Ensure BaseUrl is correctly defined
        const apiData = response.data;
        setdata(apiData);
      } catch (error) {
        toast.error("Data retrieval failed");
      }
    };

    fetchData();
  }, []);

  const [filteredData, setFilteredData] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('');
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const filtered = selectedTopic
        ? data.filter((item) => item.topic === selectedTopic)
        : data;

      setFilteredData(filtered);
    }
  }, [data, selectedTopic]);

  useEffect(() => {
    if (filteredData) {
      const topicsData = filteredData.map((item) => item.topic);
      const yearData = filteredData.map((item) => item.end_year); // Assuming 'end_year' is a property in your data

      const ctx = document.getElementById('topicChart').getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'bar', // Set chart type to 'bar'
          data: {
            labels: topicsData,
            datasets: [
              {
                label: 'Year',
                data: yearData, // Change 'end_year' to the appropriate data property
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                suggestedMin: 2000, // Set the suggested minimum value for the y-axis
                suggestedMax: 2025, // Set the suggested maximum value for the y-axis
              },
            },
          },
        });
      }
    }
  }, [filteredData]);

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <>
      <h2>Topics Bar Chart</h2>
      <div>
        <label htmlFor="topicFilter">Filter by Topic:</label>
        <select id="topicFilter" value={selectedTopic} onChange={handleTopicChange}>
          <option value="">All Topics</option>
          {/* Add options dynamically based on available topics in data */}
          {data &&
            Array.from(new Set(data.map((item) => item.topic))).map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
        </select>
      </div>
      <div>
      <canvas id="topicChart" width="700" height="300"></canvas>

      </div>
    </>
  );
}

Topics.propTypes = {
  data: PropTypes.array,
};

export default Topics;
