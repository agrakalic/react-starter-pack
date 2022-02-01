import React, { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Form, FormActions, FormControl, Heading, InputField } from '@/components/ui';
import Layout from '@/components/layout';
import useAuth from '@/hooks/useAuth';
import { paths } from '@/config';

const LoginForm: FunctionComponent = () => {
  const { isAuthorized, loginRedirectPath } = useAuth();

  if (isAuthorized) return <Navigate to={loginRedirectPath} />;

  return (
    <Layout>
      <Heading tag="h1" variant="h4">
        Login
      </Heading>
      <Form action={paths.LOGIN}>
        <FormControl labelHidden>
          <InputField type="text" placeholder="Username" name="username" />
        </FormControl>
        <FormControl labelHidden>
          <InputField type="password" placeholder="Password" name="password" />
        </FormControl>
        <FormActions>
          <Button type="submit">Submit</Button>
        </FormActions>
      </Form>
    </Layout>
  );
};

export default LoginForm;
