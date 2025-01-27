import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,];
const pData = [3400, 1398, 3800, 3908, 4000, 3800, 4300,4000, 3000, 2000, 2780, 1890, 2390, 3490,4000, 3000, 2000, 2780, 1890, 2390, 3490,4000, 3000, 2000, 2780, 1890, 2390, 3490,2780, 1890, 2390, 3490];
const xLabels = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
];

function GraphDashbord() {
  const [select, setSelect] = useState('month');

  return (
    <div className="w-full h-full relative">

      <div className="h-12 flex items-center border-b-2">
        <p className="ml-5 font-bold text-[20px]">Company Growth</p>
      </div>

      {/* Content Area */}
      <div className="w-full h-full">
      <BarChart
      width={370}
      height={300}
      series={[
        { data: pData,  id: 'pvId' },
        // { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
      </div>


      <div className="bottom-0 w-full absolute h-[70px] flex justify-around items-center">

        <div
          onClick={() => setSelect('month')}
          className={`${select === 'month' ? 'bg-[#199FB1] text-white' : 'bg-white'
            } hover:cursor-pointer border-[1px] border-[#199FB1] rounded-md w-[65px] h-[44px] flex items-center justify-center`}
        >
          Month
        </div>

        {/* Year Button */}
        <div
          onClick={() => setSelect('year')}
          className={`${select === 'year' ? 'bg-[#199FB1] text-white' : 'bg-white'
            } hover:cursor-pointer border-[1px] border-[#199FB1] rounded-md w-[65px] h-[44px] flex items-center justify-center`}
        >
          Year
        </div>

        {/* 2 Year Button */}
        <div
          onClick={() => setSelect('2year')}
          className={`${select === '2year' ? 'bg-[#199FB1] text-white' : 'bg-white'
            } hover:cursor-pointer border-[1px] border-[#199FB1] rounded-md w-[65px] h-[44px] flex items-center justify-center`}
        >
          2 Year
        </div>

        {/* 3 Year Button */}
        <div
          onClick={() => setSelect('3year')}
          className={`${select === '3year' ? 'bg-[#199FB1] text-white' : 'bg-white'
            } hover:cursor-pointer border-[1px] border-[#199FB1] rounded-md w-[65px] h-[44px] flex items-center justify-center`}
        >
          3 Year
        </div>
      </div>
    </div>
  );
}

export default GraphDashbord;
