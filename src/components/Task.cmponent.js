import React from "react";


const Task = ({task, rmT})=>{
    return(
        <li className='row justify-content-between' onClick={()=>{rmT(task)}}>
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