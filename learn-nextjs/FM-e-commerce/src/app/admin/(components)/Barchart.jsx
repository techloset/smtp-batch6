// downlOAD  npm install --save chart.js react-chartjs-2
"use client"
import { React, useEffect, useState } from 'react'
// Importing necessary components from chart.js
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// Registering components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
    const [chartdata, setchartdata] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});
    useEffect(()=>{
        setchartdata({
            labels:["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4',
                  }, ]
    
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
      }, [])
    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-black'>
                <Bar data={chartdata} options={chartOptions} />
            </div>
        </>
    )
}

export default Barchart
