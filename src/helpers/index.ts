import { Planet } from '../interfaces/planet';

export const removeFavoritePlanet = (name: string, setIsCreatingFavorite: (isCreatingFavorite: boolean) => void, isCreatingFavorite: boolean) => {
  const favorites = localStorage.getItem('favoritePlanets');
  if (favorites) {
    const planets = JSON.parse(favorites).filter(
      (e: Planet) => e.name !== name
    );
    setIsCreatingFavorite(!isCreatingFavorite);
    localStorage.setItem('favoritePlanets', JSON.stringify(planets));
  }
};

export const addFavoritePlanet = (planet: Planet, setIsCreatingFavorite: (isCreatingFavorite: boolean) => void, isCreatingFavorite: boolean) => {
  const favorites = localStorage.getItem('favoritePlanets');
  let favoritePlanets: Planet[] = [];

  if (favorites) {
    favoritePlanets = JSON.parse(favorites);
  }
  setIsCreatingFavorite(!isCreatingFavorite);
  favoritePlanets.push(planet);
  localStorage.setItem('favoritePlanets', JSON.stringify(favoritePlanets));
  setIsCreatingFavorite(!isCreatingFavorite);
};