const {initModel} = require('./model')
const { app } = require('./app')
const {update} = require('./update')
const {view} = require('./view')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, update, view)
