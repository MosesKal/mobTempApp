import { View, Text, ImageBackground } from "react-native";
import { style } from "./App.style";
import hotBackground from "./assets/cold.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";

export default function App() {
  return (
    <ImageBackground style={style.container} source={hotBackground}>
      <View style={style.workspace}>
        <View>
          <Text>Temperature</Text>
        </View>
        <InputTemperature defaultValue={"12"}/>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
