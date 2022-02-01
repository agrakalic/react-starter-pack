import styled from 'styled-components';

type ContainerProps = {
  margin: string;
};

const Container = styled.span<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin};
`;

export default Container;
