import React from "react";
import AddTask from "./AddTask.componet";
import Task from "./Task.cmponent";



const TasksSections =({addTask, remTask, catTitle, state})=>{


    console.log("ren Task", remTask)
    let tasksList2 = state[catTitle].map((t,index)=><Task key={index} rmT={remTask} task ={t}/>)

    return(
        <div className="work-area col-lg-8">
            <div className="content">
                <h1>{catTitle}</h1>
                <ul id="sortable">
                    {tasksList2}
                </ul>
                <AddTask addT={addTask}/>
            </div>

        </div>
    )
}

export default TasksSections;