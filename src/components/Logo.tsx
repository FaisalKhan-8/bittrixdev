import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="B" transform="translate(35.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M10 4h8c2.5 0 4.5 1 6 2.5C26.5 8.5 27 10 27 12c0 2-0.5 3.5-1.5 4.5-1 1-2.5 1.5-4 2 2 0.5 3.5 1.5 4.5 3 1 1.5 1.5 3 1.5 5 0 2-0.5 4-2 5.5-1.5 1.5-3.5 2.5-6 2.5h-8V4zm4 3v7h4c1.5 0 2.5-0.5 3-1.5 0.5-1 0.5-1.5 0-2.5-0.5-1-1.5-1.5-3-1.5h-4zm0 10v8h4c1.5 0 2.5-0.5 3-1.5 0.5-1 0.5-2 0-3-0.5-1-1.5-1.5-3-1.5h-4z"
          />
        </g>
        <path
          stroke="#fe5930"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
