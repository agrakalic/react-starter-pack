import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '@/theme';

type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  onClick?: () => void;
};

type HProps = {
  headingStyle: string;
  color: string;
};

const variants = {
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: theme.typography.h4,
  h5: theme.typography.h5,
  h6: theme.typography.h6,
};

const H = styled.h1<HProps>`
  ${(props) => props.headingStyle}
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
`;

const Heading: FunctionComponent<HeadingProps> = ({ tag, variant, color = 'inherit', onClick, children }) => {
  const style = variant ? variants[variant] : variants[tag];
  return (
    <H headingStyle={style} color={color} as={tag} onClick={onClick}>
      {children}
    </H>
  );
};

export default Heading;
