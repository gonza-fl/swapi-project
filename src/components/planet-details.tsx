import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Planet } from '../interfaces/planet';

const PlanetDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    fetch(`https://api.starwars.com/planets/${id}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data));
  }, [id]);

  return (
    <div>
      <h2>Planet Details</h2>
      {planet ? (
        <div>
          <h3>Name: {planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Population: {planet.population}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlanetDetails;
