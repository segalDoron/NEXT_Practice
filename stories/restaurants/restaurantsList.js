import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs';
import RestaurantsList from '../../pages/restaurantsList'


const stories = storiesOf('restaurants', module);
stories.add('restaurantsList', () => {
    const addressList = {
        data: [
            { AddressId:1,AddressString:'1'},
            { AddressId:1,AddressString:'2'},
            { AddressId:1,AddressString:'3'},
            { AddressId:1,AddressString:'4'},
            { AddressId:1,AddressString:'5'},
            { AddressId:1,AddressString:'6'},
            { AddressId:1,AddressString:'7'},
            { AddressId:1,AddressString:'8'},
            { AddressId:1,AddressString:'9'},
            { AddressId:1,AddressString:'10'},
        ]
    }

    const props = {
        addressList,
        header: text('restaurants header', 'Restaurants List'),
        onClick: action('select restaurant')
    };

    return (
        <RestaurantsList {...props} />
    );
});