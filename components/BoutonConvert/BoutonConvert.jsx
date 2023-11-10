import { TouchableOpacity, Text} from "react-native"
import { style } from "./BoutonConvert.Style"

const BoutonConvert = ({onPress,unity}) => {
  return (
    <TouchableOpacity style={style.bouton} onPress={onPress}>
        <Text style={style.text}>Convertir en {unity}</Text>
    </TouchableOpacity>
  )
}

export default BoutonConvert