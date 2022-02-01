import styled from 'styled-components';
import theme from '@/theme';

const TD = styled.td`
  padding: ${theme.spacing[2]};
  line-height: ${theme.lineHeight.default};
  vertical-align: top;
  border-bottom: ${theme.border.default};
`;

export default TD;
