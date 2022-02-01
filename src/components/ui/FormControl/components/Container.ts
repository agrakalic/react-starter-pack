import styled from 'styled-components';
import theme from '@/theme';

export type ContainerProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  ${({ spacing }) => spacing && `margin-bottom: ${theme.spacing[spacing]};`}
`;

export default Container;
