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
            "LeftValue": `$ ${model.leftValue}`,
            "LeftUnit": `${model.leftUnit}`,
            "rightValue": `$ ${model.rightValue}`,
            "rightUnit": `$ ${model.rightUnit}`
        }];
}




function view(model) {
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {view}
