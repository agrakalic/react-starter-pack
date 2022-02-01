import styled from 'styled-components';
import theme from '@/theme';

export type LabelProps = {
  labelFor?: string;
  labelText?: string;
  labelHidden?: boolean;
};

const Label = styled.label<LabelProps>`
  display: ${({ labelText, labelHidden }) => (labelText !== '' && labelHidden === false ? 'block' : 'none')};
  margin-bottom: ${theme.spacing[2]};
`;

export default Label;
