import React, { FunctionComponent } from 'react';

type InfoProps = {
  color: string;
};

const Info: FunctionComponent<InfoProps> = ({ color }) => {
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
          <g id="Tierwelt-search-page_v3" transform="translate(-166.000000, -384.000000)">
            <g id="Group-12" transform="translate(134.000000, 107.000000)">
              <g id="info_black_24dp" transform="translate(32.000000, 277.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M11,7 L13,7 L13,9 L11,9 L11,7 Z M11,11 L13,11 L13,17 L11,17 L11,11 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
                  id="Shape"
                  fillOpacity="0.6"
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

export default Info;
