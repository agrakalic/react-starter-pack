import React, { FunctionComponent } from 'react';
import { Container, SvgIcon } from './components';
import theme from '@/theme';

type IconProps = {
  type: 'close' | 'collapse' | 'expand' | 'info' | 'left' | 'options' | 'right' | 'search' | 'truck';
  color?: string;
  margin?: string;
  onClick?: () => void;
};

const Icon: FunctionComponent<IconProps> = ({ color = theme.color.text.default, type, margin = '0', onClick }) => {
  return (
    <Container margin={margin} onClick={onClick}>
      <SvgIcon type={type} color={color} />
    </Container>
  );
};

export default Icon;
