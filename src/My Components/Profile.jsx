import React from "react";

function Profile(){
    return(
            <div className="container  d-flex justify-content-between align-items-center profile">
                <div>
                    <h3>Hi , I'm <b className="text-warning">Jasim</b> Mohammad</h3>
                    <h1>I'm a <span className="text-warning">Front-end</span> Developer</h1><br />
                    &nbsp;<a href="https://www.linkedin.com/in/jasim-mohammad-b01538258/" target="_blank"><i className="bi bi-linkedin icon "></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <a href="https://github.com/mdJasim2023" target="_blank"><i className="bi bi-github icon "></i></a><br />
                    <button className="btn btn-warning mt-3"><a href="jasim1.pdf" target="_blank">Download CV</a></button>
                </div>
                <div>
                    <img src="p3.png" alt=""/>
                </div>
            </div>
    )
}

export default Profile