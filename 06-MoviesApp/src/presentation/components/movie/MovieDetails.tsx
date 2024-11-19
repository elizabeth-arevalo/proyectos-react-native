import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entitie';
import { Formatter } from '../../../config/helpers/formatter';
import { colors, styles } from '../../theme';

interface Props{
  movie: FullMovie
}

export const MovieDetails = ({movie}: Props) => {
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
        <Text style={styles.text}>{ Formatter.currency(movie.budget) }</Text>
      </View>

      
    </>
  )
}
