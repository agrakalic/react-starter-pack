import styled from 'styled-components';
import formControlStyles from './formControlStyles';
import theme from '@/theme';

const Textarea = styled.textarea`
  ${formControlStyles}
  overflow: auto;
  height: calc(${theme.form.control.height.default} * 3);
  resize: vertical;
`;

export default Textarea;
