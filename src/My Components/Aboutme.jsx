import React from "react";

function Aboutme(){
    return(
        <div className="aboutme container w-50">
            <div className="text-center">
                <h1 style={{letterSpacing:'5px',color:'lightgrey'}}>About me</h1>
            </div>
            <div className="mt-5 container">
                <div className=" p-5 rounded abtme">
                    <h6>Trained in ReactJS for creating web-applications.</h6>
                        <ul>
                            <li>Proficient in frontend technologies like HTML and CSS.</li>
                            <li>Comfortable in designing responsive webpages using Bootstrap library.</li>
                            <li>Proficient in Javascript for designing interactive websites.</li>
                            <li> Familiarity with Typescript.</li>
                            <li>Proficient in using ReactJS Components and Event handling.</li>
                            <li>Good knowledge in using ReactJS Hooks like useState, useEffect, useRef, etc...</li>
                            <li>Proficient in handling forms using Formik library.</li>
                            <li>Expert in Routing using React-routerV6.</li>
                            <li>Adequate knowledge in state management in ReactJS applications using Redux and Redux Toolkit</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
export default Aboutme