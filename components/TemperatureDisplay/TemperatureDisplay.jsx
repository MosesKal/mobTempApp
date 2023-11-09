import { Text } from "react-native"
import { style } from "./TemperatureDisplay.style"

const TemperatureDisplay = ({value, unit}) => {
  return (
    <Text style={style.text}>
        {value} {unit}
    </Text>
  )
}

export default TemperatureDisplay