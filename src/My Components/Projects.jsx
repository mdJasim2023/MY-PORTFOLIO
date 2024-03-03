import React from "react";

function Project(){
    return(
        <div className="text-center project" style={{textDecoration:'justify'}}>
            <div className="text-center projects">
                <h1 style={{letterSpacing:'5px',color:'lightgrey'}}>Projects</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-between mt-5 container projectAnchors">
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">Todo-List</h1><br />
                    <div>
                        <span>"Thrilled to present my TodoList project!Seamlessly blending Bootstrap's aesthetics with the power of React and Redux for efficient task handling. Check it out! #React #Redux #Bootstrap"</span>
                        <div>
                            <button className="btn btn-success m-1"><a href="https://jasim-todolist.netlify.app/" target='_blank'>Live Demo</a></button>
                            <button className="btn btn-warning m-1"><a href="https://github.com/mdJasim2023/React-JSX/tree/main/TodoLists">Source Code</a></button>
                        </div>
                    </div>
                </div>
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">E-commerce</h1><br />
                    <div>
                        <span>"Proud to present my e-commerce project! Seamless add-to-cart features, stunning Bootstrap design, and the efficiency of React + Redux. Experience the future of online shopping now! #ECommerce #React #Bootstrap"</span>
                        <div>
                            <button className="btn btn-success m-1">Live Demo</button>
                            <button className="btn btn-warning m-1"><a href="https://github.com/mdJasim2023/PURE-REDUX/tree/Redux-Products-AddCart">Source Code</a></button>
                        </div>
                    </div>
                </div>
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">Calculator</h1><br />
                    <div>
                        <span>"Math made cool with my Bootstrap, React, and Redux-powered calculator!Explore a sleek interface and efficient functionality. Perfect for quick calculations and number crunching. #Calculator #React #Bootstrap"</span>
                        <div>
                            <button className="btn btn-success m-1"><a href="https://calculatorbyjasim.netlify.app/">Live Demo</a></button>
                            <button className="btn btn-warning m-1">Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">Software Website</h1><br />
                    <div>
                        <span>"Launching our software institute website! Bridging the gap between ambition and expertise. Explore a world of coding excellence and innovation. Join us on the journey to success! #SoftwareInstitute #CodingSkills"</span>
                        <div>
                            <button className="btn btn-success m-1">Live Demo</button>
                            <button className="btn btn-warning m-1">Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">Counter</h1><br />
                    <div>
                        <span>"Thrilled to share my latest creation - a dynamic Counter application! Dive into the world of front-end development as I bring functionality and style together."</span>
                        <div>
                            <button className="btn btn-success m-1">Live Demo</button>
                            <button className="btn btn-warning m-1">Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="w-25 border p-4 mt-5 container rounded m-2">
                    <h1 className="text-center">Restaurant</h1><br />
                    <div>
                        <span>" Excited to unveil my restaurant application, a delightful blend of HTML and CSS! Explore a visually appetizing interface and seamless design, creating a digital dining experience. Visit my portfolio for a taste of my front-end development skills."</span>
                        <div>
                            <button className="btn btn-success m-1">Live Demo</button>
                            <button className="btn btn-warning m-1">Source Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project