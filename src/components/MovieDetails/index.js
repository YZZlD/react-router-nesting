import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({ data }) {
  const { movieId } = useParams();
  const movieChoice = data.find((x) => movieId == x.id);
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
    </div>
  );
}

export default MovieDetails;
