import styled from 'styled-components';
import theme from '@/theme';

const Link = styled.a`
  &,
  &:visited {
    color: ${theme.color.text.default};
    font-weight: ${theme.font.weight.bold};
    text-decoration: none;

    @media only screen and (min-width: ${theme.breakpoint.portrait}px) {
      margin-right: ${theme.spacing[5]};
    }

    img {
      max-width: 100%;
    }
  }
`;

export default Link;
