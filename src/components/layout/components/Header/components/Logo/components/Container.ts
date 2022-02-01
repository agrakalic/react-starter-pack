import styled from 'styled-components';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing[4]};

  @media only screen and (min-width: ${theme.breakpoint.portrait}px) {
    margin-right: ${theme.spacing[5]};
  }
`;

export default Container;
