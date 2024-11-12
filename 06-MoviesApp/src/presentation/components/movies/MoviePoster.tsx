
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entitie';
import { styles } from '../../theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/Navigation';
interface Props{
    movie: Movie;
    height?: number;
    width?: number;

}

export const MoviePoster = ({movie, height=420, width=300}: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
    <Pressable 
        onPress={() => navigation.navigate('Details', {movieId: movie.id})}
        style={({pressed}) => ({
            width, 
            height,
            marginTop: 20,
            marginHorizontal: 5,
            paddingBottom: 20,
            paddingHorizontal: 5,
            opacity: pressed ? 0.9 : 1.0
        })
    }
    >
        <View style={styles.imagePosterContainer}>
            <Image
                style={styles.imagePoster} 
                source={{uri: movie.poster}}/>
        </View>
    </Pressable>
  )
}
