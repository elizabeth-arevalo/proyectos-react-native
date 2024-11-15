import { FullMovie } from '../../../core/entities/movie.entitie'
import { Image, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme';

interface Props {
    movie: FullMovie;
}

export const MovieHeader = ({movie}:Props) => {
    const {height: screenHeight} =useWindowDimensions();
    const navigation = useNavigation();
  return (
    <View style={{...styles.imageContainer, height: screenHeight * .7}}>
        <View style={styles.imageBorder}>
            <Image source={{uri: movie.poster}}/>
        </View>    
    </View>
  )
}


