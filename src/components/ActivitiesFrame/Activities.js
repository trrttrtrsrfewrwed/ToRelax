import {createStore} from 'redux'
import {Provider} from 'react-redux'
import activitiesListReducer from '../../reducers/activities/activitiesList'
import ActivitiesList from './ActivitiesList/ActivitiesList';
import React from 'react';

function Activities() {
    const store = createStore(activitiesListReducer)
    return (
        <Provider store={store}>
            <ActivitiesList/>
        </Provider>
    )
}

export default Activities