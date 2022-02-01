import React, { FunctionComponent } from 'react';

type CollapseProps = {
  color: string;
};

const Collapse: FunctionComponent<CollapseProps> = ({ color }) => {
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
          <g id="Tierwelt-search-page_v4" transform="translate(-707.000000, -333.000000)">
            <g id="Group-12" transform="translate(143.000000, 107.000000)">
              <g id="Group-8" transform="translate(499.000000, 226.000000)">
                <g id="expand_less_black_24dp" transform="translate(65.000000, 0.000000)">
                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                  <polygon
                    id="Path"
                    fill={color}
                    fillRule="nonzero"
                    points="12 8 6 14 7.41 15.41 12 10.83 16.59 15.41 18 14"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Collapse;
