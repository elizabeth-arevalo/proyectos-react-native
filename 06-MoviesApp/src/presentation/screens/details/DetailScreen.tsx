import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RootStackParams } from "../../routes/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { styles } from '../../theme/app-theme';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailScreen = ({route}: Props) => {

    const { movieId } = route.params;
    // const { movieId } = useRoute().params;
    // console.log( {movieId} );
    const {isLoading, movie} = useMovie(movieId)
    if (isLoading){
        return <Text>Loading</Text>
    }
    

    return (
        <ScrollView style={styles.backgroudCard}>
            {/* Header */}
            <MovieHeader 
              title={movie!.title} 
              originalTitle={movie!.originalTitle}
              poster={movie!.poster}/>
            {/* Details */}

            <MovieDetails  
              movie={movie!}
              />
        </ScrollView>
    );
};
