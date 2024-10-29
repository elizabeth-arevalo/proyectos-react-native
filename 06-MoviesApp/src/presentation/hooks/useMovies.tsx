import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entitie'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

export const useMovies = () => {
    const [isLoading, setisLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);


    useEffect(() => {
      initialLoad();
    }, []);

    const initialLoad = async() =>{
        const nowPlayingPromise =  UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise =  UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise =  UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise =  UseCases.moviesUpcomingUseCase(movieDBFetcher);

        const [
          nowPlayingMovies,
          popularMovies,
          topRatedMovies,
          upcomingMovies
        ] = await Promise.all([
          nowPlayingPromise, 
          popularPromise, 
          topRatedPromise, 
          upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setisLoading(false);
        //console.log(nowPlaying[0]);

        // console.log(nowPlayingMovies,
        //   popularMovies,
        //   topRatedMovies,
        //   upcomingMovies);
        
        
    }
    
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming
  };
};
