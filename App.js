import { View, Text, ImageBackground } from "react-native";
import { style } from "./App.style";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";
import BoutonConvert from "./components/BoutonConvert/BoutonConvert";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
} from "./services/temperature-service";


export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground style={style.container} source={hotBackground}>
      <View style={style.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          defaultValue={DEFAULT_TEMPERATURE}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <BoutonConvert unity={currentUnit} onPress={()=>{
          setCurrentUnit(oppositeUnit)
        }}/>
      </View>
    </ImageBackground>
  );
}
