import React from 'react';

import { storiesOf } from '@storybook/react';
import Loading from '../../pages/loading'
import { text, number } from '@storybook/addon-knobs';


const stories = storiesOf('login', module);
stories.add('loading', () => {
    const props = {
        text: text('Label', 'Laoding'),
    };

    return (
        <Loading {...props} />
    );
});