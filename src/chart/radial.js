import React from 'react';
import { RadialBarChart, RadialBar, /* Legend, ResponsiveContainer */ } from 'recharts';


const Radial = () => {
    const Rdata = [
        {
            name: '18-24',
            uv: 20.47,
            // pv: 2400,
            fill: '#d1d2d2',
        },
        {
            name: '25-29',
            uv: 23.69,
            // pv: 4567,
            fill: '#50ce7a',
        },
        {
            name: '30-34',
            uv: 22.00,
            // pv: 1398,
            fill: '#ff993a',
        },
        {
            name: '35-39',
            uv: 21.22,
            // pv: 9800,
            fill: '#7397f5',
        }
    ];

    return (
            <RadialBarChart radius={10} width={200} height={200} cx="50%" cy="50%" innerRadius="20%" outerRadius="95%" barSize={10} data={Rdata}>
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="uv"
                    
                    // vertical : true horizontal : true
                    // orientation={horizontal}
                />
            </RadialBarChart>
    );
}

export default Radial;