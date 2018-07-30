import React from "react";

const BarChart = (props) => {
    const {data, independent, dependent} = props
    const x = dependent // Because it's a horizontal bar chart
    const y = independent

  return (
    <g>
      {data.map((obj,idx) => (
        <g key={obj[y]}>
        <rect
          x="0"
          y={idx*30}
          height="30"
          width={obj[x] * 100}
          style={{
            fill: "#0474C8"
          }}
        />
        <text x="5" y={idx*30+20} style={{fill: "white"}}>{obj[y]}</text>
        <text x={obj[x]*100-20} y={idx*30+20} style={{fill: "white"}}>{obj[x]}</text>
        </g>
      ))}
    </g>
  );
}

export default BarChart;
