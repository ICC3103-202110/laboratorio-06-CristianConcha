const celsiusToFahrenheit = (temperature) => ((temperature * (9/5)) + 32)
const celsiusToKelvin = (temperature) => (temperature + 273.15)

const kelvinToFahrenheit = (temperature) => ((temperature - 273.15)*(9/5)+32)
const kelvinToCelsius = (temperature) => (temperature - 273.15)

const fahrenheitToKelvin = (temperature) => ((temperature - 32)*(5/9)+273.15)
const fahrenheitToCelsius = (temperature) => ((temperature-32)*5/9)



function update(side, temperature, unit, toUnit, model) {
    
    if (unit === "Celsius" && toUnit === "Fahrenheit")
        newTemperature = celsiusToFahrenheit(Number(temperature))
    else if (unit === "Celsius" && toUnit === "Kelvin")
        newTemperature = celsiusToKelvin(Number(temperature))

    else if (unit === "Kelvin" && toUnit === "Fahrenheit")
        newTemperature = kelvinToFahrenheit(Number(temperature))
    else if (unit === "Kelvin" && toUnit === "Celsius")
        newTemperature = kelvinToCelsius(Number(temperature))

    else if (unit === "Fahrenheit" && toUnit === "Kelvin")
        newTemperature = fahrenheitToKelvin(Number(temperature))
    else if (unit === "Fahrenheit" && toUnit === "Celsius")
        newTemperature = fahrenheitToCelsius(Number(temperature))
    else
        newTemperature = temperature
    
    if(side === 'y')
        return {
            ...model,
            leftValue: temperature,
            leftUnit: unit,
            rightValue: newTemperature,
            rightUnit: toUnit
        }
    else
        return {
        ...model,
        leftValue: newTemperature,
        leftUnit: toUnit,
        rightValue: temperature,
        rightUnit: unit
    }
        

}



module.exports = {update}