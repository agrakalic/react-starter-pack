import styled from 'styled-components';
import theme from '@/theme';

type ListProps = {
  direction?: 'vertical' | 'horizontal';
};

const List = styled.ul<ListProps>`
  margin: 0 0 ${theme.marginBottom.default} 0;
  padding: 0;

  ${({ direction }) =>
    direction === 'horizontal' &&
    `
    li {
      display: inline-block;
      margin-right: ${theme.spacing[3]};

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;

export default List;
