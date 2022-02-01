import styled from 'styled-components';
import theme from '@/theme';

export type FormProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const Form = styled.form<FormProps>`
  width: 100%;
  margin-bottom: ${({ spacing }) => (spacing || spacing === 0 ? theme.spacing[spacing] : theme.marginBottom.default)};
`;

export default Form;
