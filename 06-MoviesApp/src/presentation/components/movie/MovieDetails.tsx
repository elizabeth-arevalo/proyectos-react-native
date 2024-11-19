import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entitie';
import { Formatter } from '../../../config/helpers/formatter';
import { colors, styles } from '../../theme';
import { Cast } from '../../../core/entities/cast.entitie';
import { CastActor } from '../cast/CastActor';

interface Props{
  movie: FullMovie
  cast: Cast[]
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20, ...styles.textPrimary}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{movie.rating}</Text>
          <Text style={{ marginLeft: 5, ...styles.text }}>
            - {movie.genres.join(', ')}
          </Text>
        </View>

        <Text style={{ marginTop: 10, ...styles.textPrimary }}>
          Historia
        </Text>
        <Text style={styles.text}>{ movie.description }</Text>
        <Text style={{  marginTop: 10, ...styles.textPrimary }}>
          Presupuesto
        </Text>
        <Text style={{...styles.text}}>{ Formatter.currency(movie.budget) }</Text>

        
      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>
        {/* Casting */}
        <Text style={{  marginTop: 10, ...styles.textPrimary }}>
          Actores
        </Text>
        <FlatList 
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal 
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item}/> }
          />
      </View>

      
    </>
  )
}
