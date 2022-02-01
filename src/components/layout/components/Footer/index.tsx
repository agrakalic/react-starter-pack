import React, { FunctionComponent, memo } from 'react';
import { ContentWrapper } from '@/components/ui';
import { Container, Copyright } from './components';
import { LayoutProps } from '@/components/layout/index';

export type FooterProps = LayoutProps;

const Footer: FunctionComponent<FooterProps> = ({ type }) => {
  if (type === 'blank') return null;

  return (
    <Container>
      <ContentWrapper>
        <Copyright />
      </ContentWrapper>
    </Container>
  );
};

export default memo(Footer);
