export const MovieItem = ({ title, year, poster }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt={title}
          />
        ) : (
          <img className="activator" src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
      </div>
    </div>
  );
};
