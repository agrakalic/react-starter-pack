import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, List, ListItem } from './components';
import { paths } from '@/config';

const Navigation: FunctionComponent = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <RouterLink to={paths.HOME}>Home</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to={paths.PAGE}>Page</RouterLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigation;
