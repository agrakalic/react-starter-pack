import styled from 'styled-components';
import theme from '@/theme';

type FlexGridBreakpoint = number | 'min' | 'max';

type FlexGridProps = {
  breakpoint?: FlexGridBreakpoint;
};

const calculateBreakpoint = (breakpoint: FlexGridBreakpoint) => {
  if (breakpoint === 'min') return 10;
  if (breakpoint === 'max') return 10000;
  if (breakpoint < 10) return 10;
  return breakpoint;
};

const FlexGrid = styled.div<FlexGridProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ breakpoint }) => `
    @media only screen and (max-width: ${
      breakpoint ? calculateBreakpoint(breakpoint) - 1 : theme.breakpoint.portrait - 1
    }px) {
      flex-direction: column;
      & > * {
        flex-grow: 1 !important;
        width: 100%  !important;
        margin: 0 !important;
      }
    }
    
    @media only screen and (min-width: ${breakpoint ? calculateBreakpoint(breakpoint) : theme.breakpoint.portrait}px) {
      flex-direction: row;
    }
  `}
`;

export default FlexGrid;
