import {createStore} from 'redux'
import {Provider} from 'react-redux'
import activitiesListReducer from '../../reducers/activities/activitiesList'
import {setDataAction} from "../../actions/user/user"
import ActivitiesList from './ActivitiesList/ActivitiesList';
import React from 'react';
import {connect} from "react-redux";
  

function Activities(props) {
    const store = createStore(activitiesListReducer, props.data)
    let set_data = (data) => {
        console.log(data)
        console.log(props.email)
        props.setData(data, props.email)
    }
    return (
        <Provider store={store}>
            <ActivitiesList set_data = {set_data}/>
        </Provider>
    )
}

const mapStateToProps = (state) => {
    return {
      data: state.data, 
      email: state.user.email
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setData: (...args) => dispatch(setDataAction(...args))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Activities)