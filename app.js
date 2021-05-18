const { printTable } = require('console-table-printer')

async function app(state, update, view) {
    
    //while(true)

    const { model, currentView } = state
    const {title, table, questions} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const { side, number, unit, toUnit } = await (questions)

    if(side === 'y')
        const updateLeft = update(number, unit, toUnit,model)
    else
         const updateRight = update(number, unit, toUnit,model)



}

module.exports = {app}