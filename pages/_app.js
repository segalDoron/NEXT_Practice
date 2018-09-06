import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import createStore from '../createStore'
import Index from './index'


// import { initializeStore } from '../store'

import { REDUX_STYLE_TYPES, REDUX_STYLE_TYPES_NAMES } from '../common/consts'

const chosenReduxStyleType = REDUX_STYLE_TYPES.REDUX_TOOLBELT_THUNK

const { bindedActions, store } = createStore(chosenReduxStyleType)
const title = `Running using ${REDUX_STYLE_TYPES_NAMES[chosenReduxStyleType]}.`

// export default withRedux(initializeStore)(class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//         return {
//             pageProps: (Component.getInitialProps ? {} : ctx)
//         }
//     }

//     render() {
//         const { Component, pageProps } = this.props
//         return <Container>
//             <Provider store={store}>
//                 <Component {...pageProps} actions={bindedActions} title={title} />
//             </Provider>
//         </Container>
//     }
// })

export default () => (
    <Provider store={store}>
        <Index actions={bindedActions} title={title} />
    </Provider>
)


