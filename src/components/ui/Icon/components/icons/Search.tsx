import React, { FunctionComponent } from 'react';

type SearchProps = {
  color: string;
};

const Search: FunctionComponent<SearchProps> = ({ color }) => {
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
          <g id="Tierwelt-search-page_v3" transform="translate(-776.000000, -183.000000)">
            <g id="Group-12" transform="translate(134.000000, 107.000000)">
              <g id="Group-6" transform="translate(622.000000, 64.000000)">
                <g id="search-24px" transform="translate(20.000000, 12.000000)">
                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z"
                    id="Shape"
                    fill={color}
                    fillRule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Search;
