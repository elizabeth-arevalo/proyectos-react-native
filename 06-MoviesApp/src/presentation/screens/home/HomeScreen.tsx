import React from "react";
import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalCarousel, PosterCarousel } from "../../components/movies";
import { styles } from "../../theme";

export const HomeScreen = () => {

    const {top } = useSafeAreaInsets();
    const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

    if (isLoading){
        return <Text style={styles.textPrimary}>Cargando...</Text>
    }

    return (
        <ScrollView>
            <View style={{marginTop: top, paddingBottom:30, ...styles.background, ...styles.textPrimary}}>
                <PosterCarousel movies={nowPlaying}/>

                <HorizontalCarousel 
                  movies={popular}
                  title="Populares"
                  loadNextPage={()=>console.log('fin alcanzado')
                  }/>

                <HorizontalCarousel movies={topRated} title="Mejor Calificadas"/>

                <HorizontalCarousel movies={upcoming} title="Próximamente"/>
            </View>
        </ScrollView>
    );
};
