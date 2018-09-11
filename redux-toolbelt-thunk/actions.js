import { makeActionCreator } from 'redux-toolbelt'
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk'
import axios from 'axios'

import { fetchUserProfile, fetchCustomers, fetchOrders,login } from '../common/services/api'

export const changeUserName = makeActionCreator('CHANGE_USERNAME')
export const changeUserPassword = makeActionCreator('CHANGE_PASSWORD')

export const logout = makeActionCreator('LOGOUT')

export const loadProfile = makeThunkAsyncActionCreator('LOAD_PROFILE', fetchUserProfile)
export const loadCustomers = makeThunkAsyncActionCreator('LOAD_CUSTOMERS', fetchCustomers)
export const loadOrders = makeThunkAsyncActionCreator('LOAD_ORDERS', fetchOrders)

export const login = makeThunkAsyncActionCreator('LOG_IN',login)

// export const login = makeThunkAsyncActionCreator('LOGIN', (e, {dispatch, getState}) => {
//   axios.get('https://www.10bis.co.il/api/login?username=doron@10bis.co.il&password=Spot5564')
//   const { userName } = getState()
//   return Promise.all([
//     dispatch(loadProfile(userName)),
//     dispatch(loadCustomers(userName)),
//     dispatch(loadOrders(userName))
//   ])
// })
