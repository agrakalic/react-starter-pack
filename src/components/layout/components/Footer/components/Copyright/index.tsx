import React, { FunctionComponent, memo } from 'react';
import { FlexGrid, FlexGridItem, List, ListItem } from '@/components/ui';
import { Container, ListContainer } from './components';

const Copyright: FunctionComponent = () => {
  return (
    <Container>
      <FlexGrid>
        <FlexGridItem>&copy; {new Date().getFullYear()}</FlexGridItem>
        <FlexGridItem>
          <ListContainer>
            <List direction="horizontal">
              <ListItem>...</ListItem>
            </List>
          </ListContainer>
        </FlexGridItem>
      </FlexGrid>
    </Container>
  );
};

export default memo(Copyright);
