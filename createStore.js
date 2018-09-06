import { compact } from 'lodash'

import { createStore, applyMiddleware, bindActionCreators } from 'redux'

import { REDUX_STYLE_TYPES } from './common/consts'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as toolbeltThunkActions from './redux-toolbelt-thunk/actions'
import toolbeltThunkReducers from './redux-toolbelt-thunk/reducers'


const reducerVsReduxStyleMap = {
  [REDUX_STYLE_TYPES.REDUX_TOOLBELT_THUNK]: {
    actions: toolbeltThunkActions,
    reducers: toolbeltThunkReducers
  }
}

export default function(chosenReduxStyleType){
  const { actions, reducers } = reducerVsReduxStyleMap[chosenReduxStyleType]

  const middlewares = compact([
    thunk,
    createLogger(),
    
  ])

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

  const store = createStoreWithMiddleware(reducers)

  return {
    store,
    bindedActions: bindActionCreators(actions, store.dispatch)
  }
}
