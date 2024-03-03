import React from "react";

function Skills(){
    return(
        <div>
            <div className="text-center skills">
                <h1 style={{letterSpacing:'5px',color:'lightgrey'}}>Skills</h1>
            </div><br /><br />
            <div className="d-flex justify-content-around container m-5">
                <img width='100px' className="skillsicons rounded" src="html.png" alt="" />
                <img width='100px' className="skillsicons rounded" src="css.png" alt="" />
                <img width='100px' className="skillsicons rounded" src="js.png" alt="" />
                <img width='100px' className="skillsicons rounded" src="React.png" alt="" />
                <img width='100px' className="skillsicons rounded" src="https://redux-toolkit.js.org/img/redux_white.svg" alt="" />
            </div>
        </div>
    )
}

export default Skills