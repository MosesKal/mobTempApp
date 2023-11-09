import { View, Text } from "react-native";
import { style } from "./App.style";

export default function App() {
  return (
    <>
      <View style={style.container}>
        <View style={style.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
          <View>
            <Text>Input</Text>
          </View>
          <View>
            <Text>Button</Text>
          </View>
        </View>
      </View>
    </>
  );
}
