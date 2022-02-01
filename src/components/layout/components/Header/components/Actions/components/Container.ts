import styled from 'styled-components';
import theme from '@/theme';

const Container = styled.div`
  display: flex;

  @media only screen and (min-width: ${theme.breakpoint.portrait}px) {
    margin-left: auto;

    > * {
      margin-bottom: 0;
    }
  }
`;

export default Container;
