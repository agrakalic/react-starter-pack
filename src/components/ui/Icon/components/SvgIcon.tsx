import React, { FunctionComponent } from 'react';
import { Close, Collapse, Expand, Info, Left, Options, Right, Search, Truck } from './icons';

type SvgIconProps = {
  type: 'close' | 'collapse' | 'expand' | 'info' | 'left' | 'options' | 'right' | 'search' | 'truck';
  color: string;
};

const SvgIcon: FunctionComponent<SvgIconProps> = ({ color, type }) => {
  if (type === 'close') return <Close color={color} />;
  if (type === 'collapse') return <Collapse color={color} />;
  if (type === 'expand') return <Expand color={color} />;
  if (type === 'info') return <Info color={color} />;
  if (type === 'left') return <Left color={color} />;
  if (type === 'options') return <Options color={color} />;
  if (type === 'right') return <Right color={color} />;
  if (type === 'search') return <Search color={color} />;
  if (type === 'truck') return <Truck color={color} />;
};

export default SvgIcon;
