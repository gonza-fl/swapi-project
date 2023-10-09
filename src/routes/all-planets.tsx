import React, { useEffect, useState } from 'react';
import Planets from '../components/planet-table';
import { Planet } from '../interfaces/planet';
import { Outlet } from 'react-router-dom';

const AllPlanets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isCreatingFavorite, setIsCreatingFavorite] = useState(false);

  useEffect(() => {
    try {
      fetch('https://swapi.dev/api/planets/')
        .then((response) => response.json())
        .then((data) => setPlanets(data.results));
    } catch (error) {
      console.log('🚀 ~ file: planet-table.tsx:21 ~ useEffect ~ error:', error);
    }
  }, []);

  return (
    <>
      <Planets
        planets={planets}
        title='Planets'
        isCreatingFavorite={isCreatingFavorite}
        setIsCreatingFavorite={setIsCreatingFavorite}
      />
      <Outlet />
    </>
  );
};

export default AllPlanets;
