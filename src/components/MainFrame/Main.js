import React from 'react';
import {Helmet} from 'react-helmet';
import TimeInput from '../TimeInput/TimeInput'
import Button from "../Button/Button"
import Text from "../Text/Text"
import styles from './index.module.css';


function Main() {
    return (
        <div className = {styles.mainFrame}>
            <Helmet bodyAttributes={{style: 'background-color : #8797EB'}}/>  
            <Text textStyle={0} color_name={'white'}>#TORELAX</Text>
            <div className = {styles.mainFrame__timer}>
                <Text textStyle={1} color_name={'white'}> I have</Text>
                <div className = {styles.circle}>
                    <TimeInput></TimeInput>
                </div>
                <Text textStyle={1} color_name={'white'}>minutes to relax</Text>  
            </div>
            <Button onClick = {(event) => {console.log("click")}} inversed={true}>
                Go to my activities
            </Button>     
        </div>
    )
}
export default Main