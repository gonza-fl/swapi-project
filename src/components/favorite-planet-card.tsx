import styled from 'styled-components';
import { Planet } from '../interfaces/planet';
import { removeFavoritePlanet } from '../helpers';

interface Props {
  planet: Planet;
  setIsCreatingFavorite: (isCreatingFavorite: boolean) => void;
  isCreatingFavorite: boolean;
}

const FavoritePlanetCard = ({
  planet,
  setIsCreatingFavorite,
  isCreatingFavorite,
}: Props) => {
  return (
    <Card>
      <DeleteButton
        onClick={() =>
          removeFavoritePlanet(
            planet.name,
            setIsCreatingFavorite,
            isCreatingFavorite
          )
        }
      >
        X
      </DeleteButton>
      <Title>{planet.name}</Title>
      <Description>Temparate</Description>
      <Image src={'https://picsum.photos/seed/picsum/200/300'} />
      <Description>{planet.climate}</Description>
      <Description>{planet.gravity}</Description>
    </Card>
  );
};

const Card = styled.div`
  width: 250px;
  height: 350px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  position: relative;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
`;

export default FavoritePlanetCard;
