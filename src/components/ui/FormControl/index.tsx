import React, { FunctionComponent } from 'react';
import { Caption, Container, Label } from './components';
import { ContainerProps } from './components/Container';
import { CaptionProps } from './components/Caption';
import { LabelProps } from './components/Label';

type FormControlProps = ContainerProps & LabelProps & CaptionProps;

const FormControl: FunctionComponent<FormControlProps> = ({
  captionText = '',
  captionState,
  labelText = '',
  labelHidden = false,
  labelFor,
  children,
  spacing = 3,
}) => {
  return (
    <Container spacing={spacing}>
      <Label htmlFor={labelFor} labelHidden={labelHidden}>
        {labelText}
      </Label>
      {children}
      <Caption captionText={captionText} captionState={captionState}>
        {captionText}
      </Caption>
    </Container>
  );
};

export default FormControl;
