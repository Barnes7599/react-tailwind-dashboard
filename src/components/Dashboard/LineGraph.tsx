"use client"

import React from 'react'
import { FiUser } from 'react-icons/fi';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    {
      name: 'Q1 2024',
      desktop: 590,
      mobile: 800,
      users: 1400,
    },
    {
      name: 'Q2 2024',
      desktop: 868,
      mobile: 967,
      users: 1506,
    },
    {
      name: 'Q3 2024',
      desktop: 1397,
      mobile: 1098,
      users: 989,
    },
    {
      name: 'Q4 2024',
      desktop: 1480,
      mobile: 1200,
      users: 1228,
    },
    {
      name: 'Q1 2025',
      desktop: 1520,
      mobile: 1108,
      users: 1100,
    },
    {
      name: 'Q2 2025',
      desktop: 1400,
      mobile: 680,
      users: 1700,
    },
  ];


export const LineGraph = () => {
  return (
    <div className='col-span-8 overflow-hidden rounded border border-stone-300'>
        <div className='p-4'>
            <h3 className='flex item-center gap-1.5 font-medium'>
                <FiUser /> Activity
            </h3>

        </div>
        <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: -18,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="auto" />
          <YAxis />
          <Tooltip 
          wrapperClassName='rounded'/>
          <Legend />
          <Bar dataKey="mobile" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="desktop" stroke="#ff7300" />
          <Line type="natural" dataKey="users" stroke="#00267a" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    </div>

  );
};