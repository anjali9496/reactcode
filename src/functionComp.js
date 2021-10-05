import React from 'react';
import ClassComp  from './classComp';
function FunctionComp (props) {


    if(props.value === "set")
    return <h4>Other Call</h4>
    else
return (
    <>   
    <h1>Funtion Component. {props.value}</h1>
    <ClassComp value="Class Comp"/>
    </>
)
}

export default FunctionComp ; 