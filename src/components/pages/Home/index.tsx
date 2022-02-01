import React, { FunctionComponent } from 'react';
import { Heading, P } from '@/components/ui';
import Layout from '@/components/layout';

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Heading tag="h1" variant="h4">
        Homepage
      </Heading>
      <P>This is homepage.</P>
    </Layout>
  );
};

export default Home;
