import styled from 'styled-components';
import theme from '@/theme';

export type CaptionProps = {
  captionText?: string;
  captionState?: 'default' | 'error';
};

const Caption = styled.span<CaptionProps>`
  color: ${({ captionState }) =>
    captionState === 'error' ? theme.color.notification.error : theme.color.text.secondary};
  display: ${({ captionText }) => (captionText !== '' ? 'block' : 'none')};
  font-size: ${theme.font.size.S};
  margin-top: ${theme.spacing[2]};
`;

export default Caption;
