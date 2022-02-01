import styled from 'styled-components';
import theme from '@/theme';

const Link = styled.a`
  &,
  &:visited {
    color: ${theme.color.text.default};
    text-decoration: none;
  }
`;

export default Link;
