import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entitie'
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';
import { styles } from '../../theme';
import { useRef } from 'react';
interface Props{
    movies: Movie[];
    title?: string;
    color?: string;
    loadNextPage?: ()=> void;
}

export const  HorizontalCarousel = ({movies, title, color, loadNextPage}:Props) =>{

  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{
    if(isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached = (contentOffset.x + layoutMeasurement.width +600) >= contentSize.width
    
    if ( !isEndReached ) return;
    isLoading.current=true;
    
    loadNextPage && loadNextPage();
  }
    return (
      <View 
        style={{height: title ? 260:220, }}>
        {
            title && (
                <Text
                  style={{
                    ...styles.textPrimary,
                    fontSize: 30,
                    fontWeight: '300', 
                    marginLeft: 10,
                    marginBottom: 10
                  }}>
                    {title}
                </Text>
            )
        }

        <FlatList 
          data={movies}
          renderItem={({ item }) => (
            <MoviePoster movie={ item } width={140} height={200}/>
          )}
          keyExtractor={( item ) => item.id.toString()}
          horizontal
          showsVerticalScrollIndicator={false}
          onScroll={ onScroll }
        />
      </View>
    )
}