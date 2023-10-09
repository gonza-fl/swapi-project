import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../components/side-bar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Root = () => (
  <Container>
    <SideBar />
    <Outlet />
  </Container>
);

export default Root;
