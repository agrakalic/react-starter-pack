import styled from 'styled-components';
import theme from '@/theme';

const ListContainer = styled.div`
  @media only screen and (min-width: ${theme.breakpoint.portrait}px) {
    text-align: right;
  }
`;

export default ListContainer;
