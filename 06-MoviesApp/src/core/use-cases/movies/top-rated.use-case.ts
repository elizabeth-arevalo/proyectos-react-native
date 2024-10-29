import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBMovieResponse>("/top_rated");

        // return topRated.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - topRatedUseCase`);
    }
};
