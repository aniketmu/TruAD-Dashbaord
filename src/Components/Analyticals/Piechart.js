import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <div className='rounded ps-2 pt-3' style={{width:"100%", height:"100%", backgroundColor:"rgba(234, 231, 231, 0.98)"}}>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label:"dgs"},
            { id: 1, value: 15, label:"dgs"},
            { id: 2, value: 20, label:"dgs"},
          ],
        },
      ]}
      width={350}
      height={300}
    />
    </div>
  );
}