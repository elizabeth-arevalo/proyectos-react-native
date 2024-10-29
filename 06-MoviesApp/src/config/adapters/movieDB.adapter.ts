import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({baseUrl:'https://api.themoviedb.org/3/movie', params:{
    api_key:'27aa98f2c71e68275d1602365ae4053c',
    language: 'es'
}})