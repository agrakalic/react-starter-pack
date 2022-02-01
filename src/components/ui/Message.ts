import styled from 'styled-components';
import theme from '@/theme';

type MessageProps = {
  type?: 'info' | 'error' | 'success' | 'warning';
};

const Message = styled.div<MessageProps>`
  background: #e9f7fe;
  color: #0295cc;
  display: block;
  line-height: inherit;
  padding: ${theme.spacing[3]};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: ${theme.borderRadius.default};
  margin-bottom: ${theme.marginBottom.default};

  ${({ type }) =>
    type === 'error' &&
    `
    background: #ffe9e9;
    color: #ca3d3d;
    `}

  ${({ type }) =>
    type === 'success' &&
    `
    background: #ebf6e0;
    color: #5f9025;
    `}
  
  ${({ type }) =>
    type === 'warning' &&
    `
    background: #fbfadd;
    color: #8f872e;
    `}
`;

export default Message;
