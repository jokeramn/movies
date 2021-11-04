import { ChooseGenre } from "../components/ChooseGenre";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";

export const Main = ({
  movies,
  onSearchMovie,
  handleChangeType,
  valueOfType,
}) => {
  return (
    <main className="content">
      <Search onSearchMovie={onSearchMovie} />
      <ChooseGenre
        handleChangeType={handleChangeType}
        valueOfType={valueOfType}
      />
      <MoviesList data={movies} />
    </main>
  );
};
