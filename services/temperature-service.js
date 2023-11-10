import { UNITS } from "../constant";

export const getOppositUnit = (unit)=>{
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

export const convertTemperatureTo = (unit, value)=>{
    if(unit === UNITS.celcius){
        return (value - 32) / 1.8;
    }else {
        return value * 1.8 + 32;
    }
}