import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'
import { Cast, FullMovie } from '../../core/entities';


export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>()
  
  useEffect(() => {
    loadMovie();
  }, [movieId])

  const loadMovie = async () =>{
    setIsLoading(true);
    const fullMoviePromise = UseCases.getByIdUseCase(movieDBFetcher, movieId);
    const castPromise = UseCases.getMovieCaseUseCast(movieDBFetcher, movieId);
    
    const [fullMovie, cast] = await Promise.all([ fullMoviePromise, castPromise])
    
    setMovie(fullMovie);
    setCast(cast)
    setIsLoading(false);

    // console.log({cast});
    
  }
  
  return {
    isLoading,
    movie, 
    cast
  }
}
