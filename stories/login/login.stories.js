import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs';
import Login from '../../pages/login'


const stories = storiesOf('login', module);
stories.add('login', () => {
    const props = {
        header: text('login header', 'Login'),
        user: object('user object', { data: null }),
        loading: boolean('is selected', false),
        onClick: action('action clicked'),
    };

    return (
        <Login {...props} />
    );
});