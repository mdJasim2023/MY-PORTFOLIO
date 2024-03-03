import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="d-flex justify-content-between align-items-center container nav">
            <div className="p-2">
                <h4><span className="text-danger">JASIM</span> MOHAMMAD</h4>
            </div>
            <ul className="d-flex">
                <Link to='/'><li className="list-group-item m-3">Home</li></Link>
                <Link to='/projects'><li className="list-group-item m-3">Projects</li></Link>
                <Link to='/assignments'><li className="list-group-item m-3">Assignments</li></Link>
                <Link to='/aboutme'><li className="list-group-item m-3">About me</li></Link>
                <Link to='/skills'><li className="list-group-item m-3">Skills</li></Link>
            </ul>
        </div>
    )
}

export default Nav