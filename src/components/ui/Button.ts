import styled from 'styled-components';
import theme from '@/theme';

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.button.default.background};
  border: ${theme.button.default.border};
  border-radius: ${theme.button.borderRadius};
  color: ${theme.button.default.color};
  padding: 0 ${theme.spacing[3]};
  height: ${theme.button.height.default};
  line-height: ${theme.button.height.default};
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none !important;
  box-shadow: ${theme.button.default.boxShadow};
  font-size: ${theme.font.size.default};
  font-weight: ${theme.font.weight.bold};
  font-style: normal;
  transition: ${theme.transition.default};

  &:hover {
    background: ${theme.button.hover.background};
    border: ${theme.button.hover.border};
    color: ${theme.button.hover.color};
    box-shadow: ${theme.button.hover.boxShadow};
  }
`;

export default Button;
