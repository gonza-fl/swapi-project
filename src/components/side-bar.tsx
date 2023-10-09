import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = styled.div`
  background-color: #154064;
  color: #e0e0e0;
  height: 100vh;
  padding: 2.5em;
  width: 12.5em;
`;

const NavLink = styled(Link)`
  color: inherit;
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #1c5686;
  }
`;

const SideBar = () => {
  return (
    <Sidebar>
      <h1>PlanetsApp</h1>
      <nav>
        <NavLink to={'/planets'}>Planets</NavLink>
        <NavLink to={'/favorites'}>Favorites</NavLink>
      </nav>
    </Sidebar>
  );
};

export default SideBar;
