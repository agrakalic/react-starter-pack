import styled from 'styled-components';
import theme from '@/theme';

const Container = styled.footer`
  color: #2d383e;
  margin-top: auto;
  padding-top: ${theme.spacing[5]};
  background: ${theme.color.background.surface};

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default Container;
