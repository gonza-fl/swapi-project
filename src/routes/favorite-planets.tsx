import { useEffect, useState } from 'react';
import { Planet } from '../interfaces/planet';
import FavoritePlanetCard from '../components/favorite-planet-card';
import styled from 'styled-components';

const getFavorites = (): Planet[] => {
  const favorites = localStorage.getItem('favoritePlanets');
  if (favorites) {
    return JSON.parse(favorites);
  } else {
    return [];
  }
};

const Favorites = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isCreatingFavorite, setIsCreatingFavorite] = useState(false);

  useEffect(() => {
    const favoritePlanets = getFavorites();
    setPlanets(favoritePlanets);
  }, [isCreatingFavorite]);

  return (
    <Container>
      {planets.map((planet, index) => (
        <FavoritePlanetCard
          key={index}
          planet={planet}
          isCreatingFavorite={isCreatingFavorite}
          setIsCreatingFavorite={setIsCreatingFavorite}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Favorites;
