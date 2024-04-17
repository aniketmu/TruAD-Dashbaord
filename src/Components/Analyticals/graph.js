// import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";

// const years = [
//   new Date(1990, 0, 1),
//   new Date(1991, 0, 1),
//   new Date(1992, 0, 1),
//   new Date(1993, 0, 1),
//   new Date(1994, 0, 1),
//   new Date(1995, 0, 1),
//   new Date(1996, 0, 1),
//   new Date(1997, 0, 1),
//   new Date(1998, 0, 1),
//   new Date(1999, 0, 1),
//   new Date(2000, 0, 1),
//   new Date(2001, 0, 1),
//   new Date(2002, 0, 1),
//   new Date(2003, 0, 1),
//   new Date(2010, 0, 1),
//   new Date(2011, 0, 1),
//   new Date(2012, 0, 1),
//   new Date(2013, 0, 1),
//   new Date(2014, 0, 1),
//   new Date(2015, 0, 1),
//   new Date(2016, 0, 1),
//   new Date(2017, 0, 1),
//   new Date(2018, 0, 1),
//   new Date(2019, 0, 1),
//   new Date(2020, 0, 1),
//   new Date(2021, 0, 1),
//   new Date(2022, 0, 1),
//   new Date(2023, 0, 1),
//   new Date(2024, 0, 1),
// ];

// // const FranceGDPperCapita = [
// //   28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645,
// //   30341.807, 31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03,
// //   35093.824, 35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727,
// //   36691, 36571, 36632, 36527, 36827, 37124, 37895, 38515.918,
// // ];

// const UKGDPperCapita = [
//   26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
//   29259.764, 30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426,
//   34865.78, 35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473,
//   34971, 35185, 35618, 36436, 36941, 37334, 37782.83, 38058.086,
// ];

// // const GermanyGDPperCapita = [
// //   25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
// //   30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44,
// //   35528.715, 36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582,
// //   43189, 43320, 43413, 43922, 44293, 44689, 45619.785, 46177.617,
// // ];

// const lineChartsParams = {
//   series: [
//     // {
//     //   label: "French GDP per capita",
//     //   data: FranceGDPperCapita,
//     //   showMark: false,
//     // },
//     // {
//     //   label: "German GDP per capita",
//     //   data: GermanyGDPperCapita,
//     //   showMark: false,
//     // },
//     // {
//     //   label: "UK GDP per capita",
//     //   data: UKGDPperCapita,
//     //   showMark: false,
//     // },
//     {
//       label: "TruAD",
//       data: UKGDPperCapita,
//       showMark: false,
//     },
//   ],

//   height: 400,
// };

// const yearFormatter = (date) => date.getFullYear().toString();
// const currencyFormatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// }).format;

// export default function Formatting() {
//   return (
//     <div
//       className="rounded pt-4"
//       style={{ backgroundColor: "rgba(234, 231, 231, 1)", height: "100%", }}
//     >
//       <LineChart
//         {...lineChartsParams}
//         xAxis={[
//           { data: years, scaleType: "time", valueFormatter: yearFormatter },
//         ]}
//         series={lineChartsParams.series.map((serie) => ({
//           ...serie,
//           valueFormatter: currencyFormatter,
//         }))}
//       />
//     </div>
//   );
// }

import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
];

export default function Combining() {
  return (
    <ChartContainer
    sx={{backgroundColor:"rgba(234, 231, 231, 0.98)", borderRadius:"0.5rem", width: "100%", height:"100%"}}
      series={series}
      width={360}
      height={460}
      xAxis={[
        {
          id: 'years',
          data: [2020, 2021, 2022, 2023, 2024],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
     <BarPlot />
      {/* <LinePlot /> */}
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Results" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
  );
}
