import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ff0000;
`;
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #000000;
`;
const Button = styled(Link)`
  background-color: #000000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Title>Error 404</Title>
      <Subtitle>Page not found</Subtitle>
      <Button to='/'>Go back to home</Button>
    </Container>
  );
};

export default ErrorPage;
