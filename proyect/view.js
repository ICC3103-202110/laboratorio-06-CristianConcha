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
    const question4 = 'To'
    const choices = ["Celsius", "Fahrenheit", "Kelvin"]

    return  inquirer.prompt([
        {
            type: 'autocomplete',
            name: 'side',
            message: question1,
            default: "y/n",
            transformer: function (value) {
                if (value === 'y')
                    return 'Yes'
                else if(value === 'n')
                    return 'No'
                else
                    return ''
            }
        },
        {
            type: 'input',
            name: 'temperature',
            message: question2,
            default: model.leftValue
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
            message: question4,
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
