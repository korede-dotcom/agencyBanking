import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

function AreaChart2() {
    const data = [
        {
          name: 'Page A',
          uv: 1000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 1000,
          pv: 2400,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 800,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2080,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 890,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 1590,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Page H',
            uv: 2090,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page I',
            uv: 1800,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page J',
            uv: 1500,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page J',
            uv: 3000,
            pv: 4300,
            amt: 2100,
          },
      ];
  return (
    <>
      <ResponsiveContainer aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          // margin={{bottom: 20}}
        >
          <Area type="monotone" dataKey="uv" strokeL stroke="#5885F9" strokeWidth="2" fill="#E6F0FF" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default AreaChart2;
