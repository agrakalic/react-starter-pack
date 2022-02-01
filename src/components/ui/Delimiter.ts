import styled from 'styled-components';

type DelimiterProps = {
  color?: string;
  variant?: 'dashed' | 'dotted' | 'solid';
};

const Delimiter = styled.hr<DelimiterProps>`
  ${({ color }) =>
    color &&
    `
    border-top-color: ${color};
  `}
  ${({ variant }) =>
    variant &&
    `
    border-top-style: ${variant};
  `}
`;

export default Delimiter;
