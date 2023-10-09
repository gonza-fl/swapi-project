import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-pages';
import Favorites from './favorite-planets';
import PlanetDetails from '../components/planet-details';
import Root from './Root';
import AllPlanets from './all-planets';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'planets',
        element: <AllPlanets />,
        children: [
          {
            path: ':planetId',
            element: <PlanetDetails />,
          },
        ],
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);
