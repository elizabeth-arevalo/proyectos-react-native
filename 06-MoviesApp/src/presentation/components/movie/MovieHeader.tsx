import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme';
import { IconButton } from '../shared';

interface Props {
    //movie: FullMovie;
    poster: string;
    originalTitle: string;
    title: string;
}

export const MovieHeader = ({poster, originalTitle, title}: Props) => {
    const {height: screenHeight} =useWindowDimensions();
    const navigation = useNavigation();
  return (
    <View style={{...styles.imageContainer, height: screenHeight * .7}}>
        <View style={styles.imageBorder}>
            <Image style={styles.imagePoster} source={{ uri: poster }}/>
        </View>   

        <View style={styles.marginContainer}>
          <Text style={styles.textSecondary}>{ originalTitle }</Text>
          <Text style={styles.textPrimary}>{ title }</Text>

        </View> 

        <View style={styles.backButton}>
          <IconButton onPress={()=> navigation.goBack()} icon='arrow-back' />
        </View>
    </View>
  )
}


