/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */ // ! Be careful

import React, { useContext, useState } from 'react';
import { StateContext } from '../../provider/StateProvider';
import './PortUpdate.scss'
import { Link } from 'react-router-dom';
import Input from '../../../node_modules/@material-ui/core/Input';
// @ts-ignore
import "react-awesome-button/dist/styles.scss";
// @ts-ignore
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';


const { remote } = window.require('electron');
const fs = remote.require('fs')

const PortUpdate = () => {
    const { activePortHandler, activePort }: any = useContext(StateContext);
    const [newPort, newPortHandler] = useState(false)

    let submitPort = () => {
        newPortHandler(false);
    }

    let updatePort = (e) => {
        if (newPort === false) {
            newPortHandler(true);
        } else {
            activePortHandler(e.target.value);
        }
    }

if (newPort === false) return (
    <div id='port-update-footer'>
        <div id='file-update-head'>
                <AwesomeButton 
                size='small'
                type="link"
                ripple={true}
                onPress={updatePort}>
                {activePort}
                </AwesomeButton>
        </div>
  </div>
    )
else return (
    <div id='port-update-footer'>
    <div id='file-update-head'>
            <Input placeholder='8080 ' type='number' onChange={(e) => updatePort(e)} inputProps={{ 'aria-label': 'description' }} />  
            <AwesomeButton 
                size='small'
                type="primary"
                ripple={true}
                onPress={submitPort}>
                ✓
            </AwesomeButton>
    </div>
</div>
)
}

export default PortUpdate;