import styled from 'styled-components';
import theme from '@/theme';

type FlexGridItemProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  width?: string;
  grow?: string;
};

const FlexGridItem = styled.div<FlexGridItemProps>`
  ${({ width, grow }) =>
    !width &&
    `
      flex-basis: 0;
      flex-grow: ${grow ? grow : '1'};
      flex-shrink: 1;
      `}
  width: ${({ width }) => (width ? width : 'auto')};
  margin: 0 ${({ spacing }) => (spacing ? theme.spacing[spacing] : theme.spacing[2])};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default FlexGridItem;
