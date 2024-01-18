import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom/cjs/react-router-dom.min";

import MovieDetails from "../MovieDetails";

function Movies({ data }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {data.map((movie) => {
            return (
              <li>
                <NavLink key={movie.id} to={`/movies/${movie.id}`}>
                  {movie.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
