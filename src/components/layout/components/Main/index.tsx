import React, { FunctionComponent } from 'react';
import { ContentWrapper } from '@/components/ui';
import { Container } from './components';
import { LayoutProps } from '@/components/layout/index';

export type MainProps = LayoutProps;

const Main: FunctionComponent<MainProps> = ({ type = 'default', children }) => {
  if (type === 'fullwidth') return <>{children}</>;

  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default Main;
