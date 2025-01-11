import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const DonutChart = ({ data }) => {
  const chartRef = useRef(null);  // To reference the canvas element
  const chartInstance = useRef(null);  // To store the chart instance

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy any previous chart instance before creating a new one
    }

    // Create a new chart instance
    chartInstance.current = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        // labels: ['Emergency', 'ICU', 'General', 'Outpatients'],
        datasets: [
          {
            data: data,
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33B8'],
            hoverBackgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33B8'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `Patients: ${tooltipItem.raw}`; // Custom tooltip text
              },
            },
          },
        },
        cutout: '70%',  // Makes it a donut shape
      },
    });

    return () => {
      // Clean up the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);  // Re-run the effect when the data changes

  return <canvas ref={chartRef} width={300} height={300}></canvas>;
};

export default DonutChart;