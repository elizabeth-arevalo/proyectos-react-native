import { Image, Text, View } from "react-native"
import { Cast } from "../../../core/entities"
import { styles } from "../../theme"

interface Props {
    actor: Cast;
}
export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.actorConteiner}>
        <Image 
           source={{ uri: actor.avatar }}
           style={styles.actorImage}/>
        <View style={styles.actorInfo}>
            <Text style={styles.text}>{actor.name}</Text>
            <Text style={styles.text}>{actor.character}</Text>
        </View>
    </View>
  )
}
