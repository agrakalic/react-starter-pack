import React, { FunctionComponent } from 'react';
import { Container, Footer, Header, Main } from './components';

export type LayoutProps = {
  type?: 'default' | 'fullwidth' | 'blank';
};

const Layout: FunctionComponent<LayoutProps> = ({ type = 'default', children }) => {
  return (
    <Container>
      <Header type={type} />
      <Main type={type}>{children}</Main>
      <Footer type={type} />
    </Container>
  );
};

export default Layout;
