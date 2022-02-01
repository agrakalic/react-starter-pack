import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './components';
import useAuth from '@/hooks/useAuth';
import { paths } from '@/config';
import { List, ListItem } from '@/components/ui';

const Actions: FunctionComponent = () => {
  const { isAuthorized } = useAuth();

  return (
    <Container>
      <List direction="horizontal">
        <ListItem>
          {isAuthorized ? <Link to={paths.LOGOUT}>Logout</Link> : <Link to={paths.LOGIN_FORM}>Login</Link>}
        </ListItem>
      </List>
    </Container>
  );
};

export default Actions;
