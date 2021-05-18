const { printTable } = require('console-table-printer')

async function app(state, update, view) {
    
    //while(true)

    const { model, currentView } = state
    const {title, table, questions} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const { side, number, unit } = await (questions)
    //const update = update(side, number, unit, model)




}

module.exports = {app}