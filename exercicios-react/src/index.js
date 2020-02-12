import React from 'react'
import ReactDOM from 'react-dom'
//import BlaComponent from './components/FirstComponent'
//import {CompA, CompB as CCompB} from './components/TwoComponents'
import MultiElement from './components/MultiElements'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElement />
        {/* <CompA value="Olá eu sou o A" />
        <CCompB value="B está aqui!!!"/>
        <BlaComponent value="Bom dia"/> */}
    </div>
    , element
)