import styled from 'styled-components';
import theme from '@/theme';

export type ContentWrapperProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const ContentWrapper = styled.div<ContentWrapperProps>`
  margin: 0 auto;
  width: ${theme.layout.width};
  max-width: ${theme.layout.maxWidth};
  text-align: left;
  position: relative;
  ${({ spacing }) => spacing && `padding: ${theme.spacing[spacing]} 0;`}
`;

export default ContentWrapper;
