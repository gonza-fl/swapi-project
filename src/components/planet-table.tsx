import styled from 'styled-components';
import { Planet } from '../interfaces/planet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { addFavoritePlanet, removeFavoritePlanet } from '../helpers';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid black;
  padding: 5px;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 5px;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 5px;
`;

interface Props {
  planets: Planet[];
  remove?: (name: string) => void;
  add?: (planet: Planet) => void;
  title: string;
  setIsCreatingFavorite: (isCreatingFavorite: boolean) => void;
  isCreatingFavorite: boolean;
}

const Planets = ({
  planets,
  title,
  isCreatingFavorite,
  setIsCreatingFavorite,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Climate</Th>
            <Th>Diameter</Th>
            <Th>Population</Th>
            <Th>Favorite</Th>
          </tr>
        </thead>
        <tbody>
          {planets?.map((planet, index) => (
            <tr key={index}>
              <Td>{planet.name}</Td>
              <Td>{planet.climate}</Td>
              <Td>{planet.diameter}</Td>
              <Td>{planet.population}</Td>
              <Td>
                {((): boolean => {
                  let bool: boolean = false;
                  const favorites = localStorage.getItem('favoritePlanets');
                  let planets: Planet[] = [];
                  if (favorites) {
                    planets = JSON.parse(favorites);
                    bool = !!planets.find((e) => e.name === planet.name);
                  }
                  return bool;
                })() ? (
                  <Button
                    onClick={() =>
                      removeFavoritePlanet(
                        planet.name,
                        setIsCreatingFavorite,
                        isCreatingFavorite
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faStar} color='gold' />
                  </Button>
                ) : (
                  <button
                    onClick={() =>
                      addFavoritePlanet(
                        planet,
                        setIsCreatingFavorite,
                        isCreatingFavorite
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Planets;
