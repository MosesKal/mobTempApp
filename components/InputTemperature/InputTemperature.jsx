import { style } from "./InputTemperature.style";
import { TextInput, Text , View} from "react-native";

export const InputTemperature = ({ defaultValue, onChangeText }) => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Entre une température"
        style={style.input}
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />

      <Text style={style.unit}>°C</Text>
    </View>
  );
};
