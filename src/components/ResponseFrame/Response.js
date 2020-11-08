import {Provider} from 'react-redux'
import {connect} from "react-redux";
import ActivitiesElemPresentation from '../ActivitiesFrame/ActivitiesElem/ActivitiesElemPresentation'  
import styles from './index.module.css';
import React from 'react';
import Text from '../Text/Text'

function getMinutes(time) {
    return parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3, 5));
}

function getResponse(data, request) {
    let max = getMax(data, getMinutes(request));
    return max.data;
}

function getMax(data, minutes) {
    if (data.length === 0) {
        return {
            data: [],
            sum: 0
        };
    }
    let max_sum = 0;
    let max_data = [];
    data.forEach((item, index, array)=> {
        let curr_data = data.slice();
        let removed = curr_data.splice(index, 1);
        let curr_minutes = getMinutes(removed[0].time);
        if (curr_minutes <= minutes) {
            console.log("curr_minutes", curr_minutes)
            let curr = getMax(curr_data, minutes - getMinutes(removed[0].time))
            console.log("curr", curr)
            if (curr.sum + removed[0].rating > max_sum) {
                console.log("updating max data")
                max_sum = curr.sum;
                max_data = removed.concat(curr.data)
                console.log("max data", max_data)
            }
        }
    });
    console.log("max_data", max_data)
    return {
        data: max_data,
        sum: max_sum
    };
}



function Response(props) {
    const request = props.request
    const response = getResponse(props.data, request)
    return (
        <div>
            <Text>{request}</Text>
            <Text>{getMinutes(request)}</Text>
            <div className = {styles.activities_list}>
                {response.map(elem =>
                        <ActivitiesElemPresentation key = {elem.id} props={elem}>
                        </ActivitiesElemPresentation>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      data: state.data    
    }
  };

export default connect(mapStateToProps)(Response)