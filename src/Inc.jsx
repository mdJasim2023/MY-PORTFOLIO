import React from 'react'

function Inc(props) {

    const inc = ()=>{
       
props.setInitialvalue(props.initialvalue+1)
    }


  return (
    <div>
        
        <button  onClick={()=>{inc()}}>increment</button>
    </div>
  )
}

export default Inc