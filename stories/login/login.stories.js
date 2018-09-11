import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs';
import Login from '../../pages/login'

import { Provider } from 'react-redux'
import createStore from '../../createStore'

import { REDUX_STYLE_TYPES, REDUX_STYLE_TYPES_NAMES } from '../../common/consts'

const chosenReduxStyleType = REDUX_STYLE_TYPES.REDUX_TOOLBELT_THUNK

const { bindedActions, store } = createStore(chosenReduxStyleType)
const title = `Running using ${REDUX_STYLE_TYPES_NAMES[chosenReduxStyleType]}.`


const stories = storiesOf('login', module);
stories.add('login', () => {
    const props = {
        header: text('login header', 'Login'),
        user: object('user object', { data: null }),
        loading: boolean('is selected', false),
        onClick: {
            login: action('action login'),
            signUp: action('action sign up'),
            register: action('action register'),
            forget: action('action forget')
        },
    };

    return (
        <Provider store={store}>
            <Login {...props} actions={bindedActions} />
        </Provider>
    );
});