const {initModel} = require('./model')
const { app } = require('./app')
const {updateLeft, updateRight} = require('./update')
const {view} = require('./view')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, updateLeft, updateRight, view)
