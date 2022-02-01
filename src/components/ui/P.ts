import styled from 'styled-components';
import theme from '@/theme';

type PProps = {
  color?: string;
  size?: 'default' | 'S' | 'XS' | 'M' | 'L' | 'XL';
};

const P = styled.p<PProps>`
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ size }) => (size ? theme.font.size[size] : theme.font.size['default'])};
  line-height: 1.5em;
  margin: ${theme.typography.p1.margin};
`;

export default P;
