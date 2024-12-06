import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <h1>Movie</h1>
      <hr />
      <Outlet />
    </>
  );
};

export default Movies;