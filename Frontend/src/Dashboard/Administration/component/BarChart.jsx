import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
    const chartRef = useRef(null); // Reference to the canvas element
    const chartInstanceRef = useRef(null); // Reference to the Chart.js instance

    useEffect(() => {
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy(); // Destroy existing chart instance before creating a new one
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar', // Type of chart
            data: {
                labels: ['Jan', 'Feb', 'March', 'Apr', 'May' ,'June' , 'Jul' , 'Aug' , 'sep' , 'Nov' , 'Dec'],
                datasets: [
                    {
                        label: 'Sales Data',
                        data: [53, 19, 34, 50, 27 , 50 , 40 , 60 , 35 , 45 , 39 ,53],
                        backgroundColor: [      
                            'rgba(54, 162, 235)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235)',
                        ],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'Monthly Sales Data',
                    },
                },
            },
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy(); // Cleanup on component unmount
            }
        };
    }, []); // Runs once when the component mounts

    return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
