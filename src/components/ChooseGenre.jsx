
export const ChooseGenre = ({ handleChangeType, valueOfType }) => {
  const onChangeType = (e) => {
    handleChangeType(e.target.value);
  };

  return (
    <>
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            value="all"
            onChange={onChangeType}
            checked={valueOfType === "all"}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            value="movie"
            onChange={onChangeType}
            checked={valueOfType === "movie"}
          />
          <span>Movie</span>
        </label>
      </p>
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            value="series"
            onChange={onChangeType}
            checked={valueOfType === "series"}
          />
          <span>Series</span>
        </label>
      </p>
    </>
  );
};
