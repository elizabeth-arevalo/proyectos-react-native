
import React from 'react'
import { HttpAdapter } from '../../../config/adapters/http/http_adapter';
import { FullMovie } from '../../entities/movie.entitie';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { MovieDBMovie } from '../../../infraestructure/interfaces/movie-db.responses';

export const getByIdUseCase = async (
    fetcher: HttpAdapter, 
    movieId: number
):Promise<FullMovie> => {
  
    try {

        //fecher
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        //mapeo
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie)
        //return
        return fullMovie
        
        
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
        
    }
}
