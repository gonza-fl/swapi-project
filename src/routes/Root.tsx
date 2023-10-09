import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../components/side-bar';
import { useEffect } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr 1fr;
`;

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate('/planets');
  }, [navigate]);

  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default Root;
