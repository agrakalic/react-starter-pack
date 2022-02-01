import React, { FunctionComponent } from 'react';
import { ContentWrapper } from '@/components/ui';
import { Actions, Container, Content, Logo, Navigation } from './components';
import { LayoutProps } from '@/components/layout/index';

export type HeaderProps = LayoutProps;

const Header: FunctionComponent<HeaderProps> = ({ type }) => {
  if (type === 'blank') return null;

  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Logo />
          <Navigation />
          <Actions />
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
