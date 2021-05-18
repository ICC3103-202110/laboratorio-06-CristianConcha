const celsiusToFahrenheit = (temperature) => Number((temperature * (9/5)) + 32)
const celsiusToKelvin = (temperature) => Number(temperature + 273.15)

const kelvinToFahrenheit = (temperature) => Number((temperature - 273.15)*(9/5)+32)
const kelvinToCelsius = (temperature) => Number(temperature - 273.15)

const fahrenheitToKelvin = (temperature) => Number((temperature - 32)*(5/9)+273.15)
const fahrenheitToCelsius = (temperature) => Number((temperature-32)*5/9)



function updateLeft(temperature, unit, toUnit, model) {
    
    if (unit === "Celsius" && toUnit === "Fahrenheit")
        newTemperature = celsiusToFahrenheit(temperature)
    else if (unit === "Celsius" && toUnit === "Kelvin")
        newTemperature = celsiusToKelvin(temperature)

    else if (unit === "Kelvin" && toUnit === "Fahrenheit")
        newTemperature = kelvinToFahrenheit(temperature)
    else if (unit === "Kelvin" && toUnit === "Celsius")
        newTemperature = kelvinToCelsius(temperature)

    else if (unit === "Fahrenheit" && toUnit === "Kelvin")
        newTemperature = fahrenheitToKelvin(temperature)
    else if (unit === "Fahrenheit" && toUnit === "Celsius")
        newTemperature = fahrenheitToCelsius(temperature)
    
    return {
        ...model,
        leftValue: temperature,
        leftUnit: unit,
        rightValue: newTemperature,
        rightUnit: toUnit
    }

}

function updateRight(temperature, unit, toUnit, model) {
    
    if (unit === "Celsius" && toUnit === "Fahrenheit")
        newTemperature = celsiusToFahrenheit(temperature)
    else if (unit === "Celsius" && toUnit === "Kelvin")
        newTemperature = celsiusToKelvin(temperature)

    else if (unit === "Kelvin" && toUnit === "Fahrenheit")
        newTemperature = kelvinToFahrenheit(temperature)
    else if (unit === "Kelvin" && toUnit === "Celsius")
        newTemperature = kelvinToCelsius(temperature)

    else if (unit === "Fahrenheit" && toUnit === "Kelvin")
        newTemperature = fahrenheitToKelvin(temperature)
    else if (unit === "Fahrenheit" && toUnit === "Celsius")
        newTemperature = fahrenheitToCelsius(temperature)
    
    return {
        ...model,
        leftValue: newTemperature,
        leftUnit: toUnit,
        rightValue: temperature,
        rightUnit: unit
    }

}

module.exports = {
    updateLeft,
    updateRight
}