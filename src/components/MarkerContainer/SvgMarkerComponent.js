import React from 'react';
import MarkerContainerClasses from './MarkerContainer.module.css';

const SvgMarkerComponent = ({ mapMarker, color, border, internId }) => {
  return (
    <div>
      <svg
        width='32'
        height='44'
        viewBox='0 0 35 45'
        xmlns='http://www.w3.org/2000/svg'
        className={MarkerContainerClasses.marker}>
        <path
          d='M17.5 2.746c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.439-17.863.056-.08a15.422 15.422 0 002.343-6.112c.123-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307'
          fill={color}
          style={{ stroke: `${border}` }}></path>
        <path
          d='M17.488 2.748c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.44-17.863.055-.08a15.422 15.422 0 002.343-6.112c.124-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307m0 1.071c7.68 0 13.929 6.386 13.929 14.236 0 .685-.064 1.423-.193 2.258-.325 2.075-1.059 3.99-2.164 5.667l-.055.078-11.557 16.595L6.032 26.14l-.12-.174a14.256 14.256 0 01-2.105-5.29 14.698 14.698 0 01-.247-2.62c0-7.851 6.249-14.237 13.928-14.237'
          fill='#231f20'
          opacity='.15'></path>
        <text
          x='50%'
          y='50%'
          dominantBaseline='middle'
          textAnchor='middle'
          fontSize='15'
          fill='black'>
          {internId}
        </text>
      </svg>
      {mapMarker && <div className={MarkerContainerClasses.shadow}></div>}
    </div>
  );
};

export default SvgMarkerComponent;
