import { MovieItem } from "./MovieItem";
import { Preloader } from "./Preloader";

export const MoviesList = ({ data }) => {
  const content = data.length ? (
    data.map(({ Title, Year, Poster, imdbID }) => {
      return (
        <MovieItem title={Title} year={Year} poster={Poster} key={imdbID} />
      );
    })
  ) : (
    <Preloader />
  );

  return <div className="movies">{content}</div>;
};
