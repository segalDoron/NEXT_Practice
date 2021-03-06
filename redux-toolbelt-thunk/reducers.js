import { makeReducer, makeAsyncReducer, composeReducers } from 'redux-toolbelt'
import { updateObjectProperties } from 'redux-toolbelt-immutable-helpers'
import { loadCustomers, loadOrders, loadProfile, changeUserName, logout ,changeUserPassword} from './actions'

export default composeReducers(
  {
    profile: makeAsyncReducer(loadProfile),
    customers: makeAsyncReducer(loadCustomers),
    orders: makeAsyncReducer(loadOrders),
    userName: makeReducer(changeUserName, { defaultState: 'user' }),
    password: makeReducer(changeUserPassword, { defaultState: '' })
  },
  makeReducer(logout, (state, { type, payload }) =>
    updateObjectProperties(state,
      ['profile', 'customers', 'orders'],
      { loading: false, data: null }
    )
  )
)
