import styled from 'styled-components';
import theme from '@/theme';

const SubHeader = styled.div`
  border-bottom: ${theme.border.default};
  padding: ${theme.spacing[3]} 0;

  @media only screen and (min-width: ${theme.breakpoint.portrait}px) {
    padding: ${theme.spacing[5]} 0;
  }
`;

export default SubHeader;
