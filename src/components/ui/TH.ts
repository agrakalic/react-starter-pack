import styled from 'styled-components';
import theme from '@/theme';

const TH = styled.th`
  font-weight: ${theme.font.weight.bold};
  padding: ${theme.spacing[2]};
  line-height: ${theme.lineHeight.default};
  vertical-align: top;
  border-bottom: ${theme.border.default};
`;

export default TH;
