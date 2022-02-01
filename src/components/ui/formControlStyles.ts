import theme from '@/theme';

const formControlStyles = `
  background: ${theme.form.control.default.background};
  border: ${theme.form.control.default.border};
  border-radius: ${theme.form.control.borderRadius};
  box-shadow: ${theme.form.control.default.boxShadow};
  color: ${theme.form.control.default.color};
  padding: 0 ${theme.spacing[2]};
  height: ${theme.form.control.height.default};
  line-height: ${theme.form.control.height.default};
  width: 100%;
  margin: 0;
  vertical-align: middle;
  font-size: ${theme.font.size.default};
  transition: ${theme.transition.default};

  ::placeholder {
    opacity: 0.25;
  }

  &[disabled] {
    opacity: 0.5;
  }

  &:focus {
    border: ${theme.form.control.focus.border};
    background: ${theme.form.control.focus.background};
    box-shadow: ${theme.form.control.focus.boxShadow};
    color: ${theme.form.control.focus.color};
    outline: none;
  }
`;

export default formControlStyles;
