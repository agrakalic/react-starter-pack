import React, { FunctionComponent } from 'react';
import { Heading, P } from '@/components/ui';
import Layout from '@/components/layout';

const Page: FunctionComponent = () => {
  return (
    <Layout>
      <Heading tag="h1" variant="h4">
        Page
      </Heading>
      <P>This is restricted Page.</P>
    </Layout>
  );
};

export default Page;
