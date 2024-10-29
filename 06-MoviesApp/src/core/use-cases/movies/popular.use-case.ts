import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBMovieResponse>("/popular");

        // return popular.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - PopularUseCase`);
    }
};
