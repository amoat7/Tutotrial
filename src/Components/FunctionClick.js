import React from 'react'

const clickHandler = () =>{

    console.log('Button clicked')

}

function FunctionClick() {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
