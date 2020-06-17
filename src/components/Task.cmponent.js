import React from "react";


const Task = ({task})=>{
    return(
        <li className='row justify-content-between'>
            <div className="row justify-content-between">
                <div className="circle"></div>
                <span>
                    {task}
                </span>
            </div>
            <i className="fa fa-star" aria-hidden="true"></i>
        </li>
    )
}


export default Task;