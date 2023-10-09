import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface Planet {
  name: string;
  climate: string;
  diameter: string;
  population: string;
}

const PlanetDetails: React.FC = () => {
  const { planetId } = useParams<{ planetId: string }>();
  const [planet, setPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${planetId}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data));
  }, [planetId]);

  return (
    <Sidebar>
      {planet ? (
        <Card>
          <h2>Planet Details</h2>
          <h3>Name: {planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Population: {planet.population}</p>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: #154064;
  height: 100vh;
  padding: 2.5em;
  width: 12.5em;
`;

const Card = styled.div`
  height: 40%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export default PlanetDetails;
