import { DataModel } from "../../models/DataModel";
import { MoviesDataSource } from "../../models/MoviesDataSource";
import {useState} from 'react'
import { MovieContext } from "../../context-provider/ContextProvider";
import MovieDetail from "../movie-detail/MovieDetail";

const Movies = () => {
    const [selectedMovie,setMovie] = useState(new DataModel() );
    const [movies,setMovies] = useState( MoviesDataSource)

    const selectedMovies = (movie:DataModel):void => {
        setMovie(movie);
    }

     const updateMovie = (data:DataModel) => {
        console.log(data)
        const updateMovies:DataModel[] = movies.map(movie => {
           if(movie.id === data.id){ movie.name = data.name}
           return movie
        })

        setMovies(updateMovies)
    }

    return (
        <>
       <MovieContext.Provider value={ {...selectedMovie,updateMovie} } >
           { selectedMovie.id !==undefined && <MovieDetail key={selectedMovie.id}/> }
            <div className="card">
                <div className="card-header"> React Movies Application </div>
                <ul className="list-group list-group-flush">        
                {
                    movies.map(movie =>{
                        return (
                            <li key={movie.id} 
                                className={
                                    "list-group-item " + (selectedMovie === movie ? "active" : "")
                                }             
                                role="button"
                                onClick={() => selectedMovies(movie) }
                            >
                                <span className="badge badge-primary">{movie.id}</span> {movie.name}
                                <span className="close" role="button">x</span>
                            </li>
                        )
                    })
                }        
                </ul>
            </div>
      </MovieContext.Provider>
      </>
    )
}

export default Movies
