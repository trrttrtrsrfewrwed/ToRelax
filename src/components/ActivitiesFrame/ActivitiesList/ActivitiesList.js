import styles from './index.module.css';
import {connect} from 'react-redux'
import ActivitiesElem from '../ActivitiesElem/ActivitiesElem'
import {fetchMAXIMIZING, fetchMINIMIZING, fetchSET, fetchREMOVE} from '../../../actions/activities/activitiesList'
import React, {useState} from 'react';
import Text from '../../Text/Text'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import ChangingElem from '../ChangingElem/ChangingElem'


function ActivitiesList(props) {
    const [changing, setChanging] = useState({
        flg: false,
        id: Date.now(),
        name: "",
        category: "",
        description: "",
        time: "",
        rating: 1
    })

    const changeElem = (id, data) => {
        if (data) {
            setChanging({
                flg: true,
                id: id,
                name: data.name,
                category: data.category,
                description: data.description,
                time: data.time,
                rating: data.rating,
                })
        } else {
            setChanging({ 
                flg: true,
                id: id,
                name: "",
                category: "",
                description: "",
                time: "",
                rating: 1})
        }
    }
    const onCancel = () => {
        setChanging({flg: false,
                     id: Date.now(),
                     name: "",
                     category: "",
                     description: "",
                     time: "",
                     rating: 1})
    }
    const onSubmit = (data) => {
        props.dispatch(fetchSET(changing.id, data))
        onCancel()
    }
    const {list} = props
    const expand = (id) => props.dispatch(fetchMAXIMIZING(id))
    const contract = (id) => props.dispatch(fetchMINIMIZING(id))
    const remove = (id) => props.dispatch(fetchREMOVE(id))
    return (
        <div>
            <div className = {styles.header}>
                    <Text textStyle={1} color_name={"blue"}>My activities</Text>
                    <div className = {styles.brow1}>  
                        <Input placeholder="Search"/>
                        <Button buttonStyle = {2} onClick = {() => {changeElem(Date.now(), 0)}}>+</Button>
                    </div> 
            </div>

            <div className = {styles.activities_list}>
                {list.map(elem =>
                        <ActivitiesElem key = {elem.id} props={elem} expand={expand} contract={contract} change = {() => {changeElem(elem.id, elem)}} remove = {() => remove(elem.id)}>
                        </ActivitiesElem>)}
            </div>
            {changing.flg && 
            <ChangingElem data = {{
                name: changing.name,
                category: changing.category,
                description: changing.description,
                time: changing.time,
                rating: changing.rating
            }} onCancel = {onCancel} onSubmit = {onSubmit}/>}
        </div>
    )
}

const mapStateToProps = function(store) {
    return {list: store}
}

export default connect(mapStateToProps)(ActivitiesList);