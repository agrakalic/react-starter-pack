import React, { FunctionComponent } from 'react';

type TruckProps = {
  color: string;
};

const Truck: FunctionComponent<TruckProps> = ({ color }) => {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Tierwelt-search-page_v4" transform="translate(-505.000000, -332.000000)">
            <g id="Group-12" transform="translate(143.000000, 107.000000)">
              <g id="Group-7-Copy" transform="translate(362.000000, 225.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M20,8 L17,8 L17,4 L3,4 C1.9,4 1,4.9 1,6 L1,17 L3,17 C3,18.66 4.34,20 6,20 C7.66,20 9,18.66 9,17 L15,17 C15,18.66 16.34,20 18,20 C19.66,20 21,18.66 21,17 L23,17 L23,12 L20,8 Z M19.5,9.5 L21.46,12 L17,12 L17,9.5 L19.5,9.5 Z M6,18 C5.45,18 5,17.55 5,17 C5,16.45 5.45,16 6,16 C6.55,16 7,16.45 7,17 C7,17.55 6.55,18 6,18 Z M8.22,15 C7.67,14.39 6.89,14 6,14 C5.11,14 4.33,14.39 3.78,15 L3,15 L3,6 L15,6 L15,15 L8.22,15 Z M18,18 C17.45,18 17,17.55 17,17 C17,16.45 17.45,16 18,16 C18.55,16 19,16.45 19,17 C19,17.55 18.55,18 18,18 Z"
                  id="Shape"
                  fill={color}
                  fillRule="nonzero"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Truck;
