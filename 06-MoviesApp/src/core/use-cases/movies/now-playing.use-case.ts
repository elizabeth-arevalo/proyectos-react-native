import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entitie";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>("/now_playing");

        console.log({ nowPlaying });

        return [];
    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - NowPlaying`);
    }
};
