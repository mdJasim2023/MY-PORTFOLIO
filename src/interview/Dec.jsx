import React from 'react'

function Dec(props) {

   const dec= function (){
        props.setInitialvalue(props.initialvalue-1)
    }

  return (
    <div>
      
        <button  onClick={()=>{dec()}}>decrement</button>
    </div>
  )
}

export default Dec;