import React from "react";

function Assignments(){
    return(
        <div className="assignments">
            <div className="text-center">
                <h1 style={{letterSpacing:'5px',color:'lightgrey'}}>Assignments</h1>
            </div>
            <div className="d-flex justify-content-around mt-5 container text-center flex-wrap assign">
                <button className=" p-3 w-25 m-2 rounded btn btn-warning"><a href="https://github.com/mdJasim2023/Frontend" target='_blank'>HTML</a></button>
                <button className=" p-3 w-25 m-2 rounded btn btn-info"><a href="https://github.com/mdJasim2023/HTML" target='_blank'>CSS</a></button>
                <button className=" p-3 w-25 m-2 rounded btn btn-danger"><a href="https://github.com/mdJasim2023/JavaScript-Assignments/tree/main/JS%20Assignment" target='_blank'>JavaScript</a></button>
                <button className=" p-3 w-25 m-2 rounded btn btn-primary"><a href="https://github.com/mdJasim2023/REACT" target='_blank'>ReactJS</a></button>
                <button className=" p-3 w-25 m-2 rounded btn btn-secondary"><a href="https://github.com/mdJasim2023/PURE-REDUX/tree/main/src" target='_blank'>React-Redux</a></button>
                <button className=" p-3 w-25 m-2 rounded btn btn-light"><a href="https://github.com/mdJasim2023/REDUX-TOOLKIT/branches" target='_blank'>Redux-toolkit</a></button>
            </div>
        </div>
    )
}

export default Assignments