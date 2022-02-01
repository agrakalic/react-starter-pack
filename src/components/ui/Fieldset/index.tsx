import React, { FunctionComponent } from 'react';
import { Container, Legend } from './components';

type FieldsetProps = {
  legend?: string;
};

const Fieldset: FunctionComponent<FieldsetProps> = ({ legend, children }) => {
  return (
    <Container>
      {legend && <Legend>{legend}</Legend>}
      {children}
    </Container>
  );
};

export default Fieldset;
