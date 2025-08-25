import React, { useId } from "react";
import "./Wave.css"; 

export default function Wave({
 width = 1600,
  height = 198,
  startColor = "#66dfeaff",
  endColor = "#169ccdff",
  startOpacity = 0.25,
}) {
  const gradId = useId();

  const WaveShape = ({ id }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1600 198"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={id} x1="50%" x2="50%" y1="-10.959%" y2="100%">
          <stop stopColor={startColor} stopOpacity={startOpacity} offset="0%" />
          <stop stopColor={endColor} offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        fillRule="evenodd"
        d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
        transform="matrix(-1 0 0 1 1600 0)"
      />
      
    </svg>
  );

  return (
    <div className="wave-wrapper">
      
      <div className="wave-track wave-back">
        <WaveShape id={gradId + "-bg1"} />
        <WaveShape id={gradId + "-bg2"} />
      </div>

   
      <div className="wave-track wave-front">
        <WaveShape id={gradId + "-fg1"} />
        <WaveShape id={gradId + "-fg2"} />
      </div>
    </div>
  );
}