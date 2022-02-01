import React, { FunctionComponent } from 'react';

type LeftProps = {
  color: string;
};

const Left: FunctionComponent<LeftProps> = ({ color }) => {
  return (
    <>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g>
          <g transform="rotate(90, 12, 12)" fillRule="evenodd" fill="none" id="Page-1">
            <g id="Group-12">
              <g id="Group-8">
                <g
                  transform="translate(77, 12) scale(1, -1) translate(-77, -12) translate(65)"
                  id="expand_less_black_24dp"
                >
                  <polygon points="-65,0 -41,0 -41,24 -65,24 " id="Path" />
                  <polygon
                    points="-53,8 -59,14 -57.59002685546875,15.410003662109375 -53,10.829986572265625 -48.40997314453125,15.410003662109375 -47,14 "
                    fillRule="nonzero"
                    fill={color}
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Left;
