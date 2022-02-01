import styled from 'styled-components';
import theme from '@/theme';

type TagProps = {
  active?: boolean;
};

const Tag = styled.div<TagProps>`
  background: ${theme.tag.default.background};
  border: ${theme.tag.default.border};
  border-radius: ${theme.tag.borderRadius};
  color: ${theme.tag.default.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.tag.height};
  padding: 0 ${theme.spacing[4]};
  margin: ${theme.spacing[2]} ${theme.tag.spacing} ${theme.spacing[2]} 0;
  transition: ${theme.transition.default};
  font-weight: ${theme.font.weight.bold};
  cursor: pointer;

  &:hover {
    background: ${theme.tag.hover.background};
    border: ${theme.tag.hover.border};
    color: ${theme.tag.hover.color};
  }

  ${({ active }) =>
    active &&
    `
    background: ${theme.tag.active.background} !important;
    border: ${theme.tag.active.border};
    color: ${theme.tag.active.color} !important;
    `}
`;

export default Tag;
