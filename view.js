const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Unit Converter App',{horizontalLayout: 'full'}
        )
    )
}

function getTable(model) {
    return [
        {
            "LeftValue":  model.leftValue,
            "LeftUnit": model.leftUnit,
            "rightValue": model.rightValue,
            "rightUnit": model.rightUnit
        }];
}

function questions(model) {

    const question1 = 'Left temperature is source?'
    const question2 = 'Temperature value to convert?'
    const question3 = 'From'
    const choices = ["Celsius", "Fahrenheit", "Kelvin"]

    return  inquirer.prompt([
        {
            type: 'input',
            name: 'side',
            message: question1,
            default: "(Y/n)",            
        },
            
        {
            type: 'input',
            name: 'temperature',
            message: question2,
            default: 0 // change
        },
        {
            type: 'list',
            name: 'unit',
            message: question3,
            default: 'Use arrow keys',
            choices: choices
        },
        {
            type: 'list',
            name: 'toUnit',
            message: question3,
            default: 'Use arrow keys',
            choices: choices
        }
        
    ])

}


function view(model) {
    return {
        title: getTitle(),
        table: getTable(model),
    }
}

module.exports = {
    view,
    questions
}
