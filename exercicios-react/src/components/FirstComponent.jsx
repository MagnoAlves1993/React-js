import React from 'react'

let isCool = true

export default (props) => 
<div>
    <h1>{props.value}</h1>
    <h2>Legal? {isCool ? 'Sim' : 'Não'}</h2>
</div>

//export default () => 
//<h1>Primeiro Componente</h1>

// function first(){
//     return <h1>Primeiro Componente</h1>
// }

// export default first

// export default function(){
//     return <h1>Primeiro Componente</h1>
// }