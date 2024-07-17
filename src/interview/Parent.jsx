import React from 'react';
import Inc from './Inc';
import Dec from './Dec';


function Parent(){

    const [initialvalue, setInitialvalue] =React.useState(0)
    
    return(
        <div>
            <h1>{initialvalue}</h1>
            <Inc  initialvalue={initialvalue} setInitialvalue={setInitialvalue}> </Inc>
 <Dec initialvalue={initialvalue} setInitialvalue={setInitialvalue}></Dec>
        </div>
    )
}



// function Parent(){

//     var [firstvalue, setFirstvalue]= React.useState(0)
   

//     return<>
// <h1>{firstvalue}</h1>
// <Inc  firstvalue={firstvalue} setFirstvalue={setFirstvalue}> </Inc>
// <Dec firstvalue={firstvalue} setFirstvalue={setFirstvalue}></Dec>

//     </>
// }

export default Parent;