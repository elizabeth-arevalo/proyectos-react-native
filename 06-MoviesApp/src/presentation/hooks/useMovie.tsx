import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'
import { FullMovie } from '../../core/entities/movie.entitie'

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  
  useEffect(() => {
    loadMovie();
  }, [movieId])

  const loadMovie = async () =>{
    setIsLoading(true);
    const fullMovie = await UseCases.getByIdUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false);

    console.log({fullMovie});
    
  }
  
  return {
    isLoading,
    movie
  }
}
