const { printTable } = require('console-table-printer')
const {questions} = require('./view')

async function app(state, updateLeft, updateRight, view) {
    
    while (true) {

        const { model, currentView } = state
        const { title, table } = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const { side, temperature, unit, toUnit } = await (questions(model))

        if (side === 'y')
            updatedModel = updateLeft(temperature, unit, toUnit, model)
        else
            updatedModel = updateRight(temperature, unit, toUnit, model)
    
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }


}

module.exports = {app}