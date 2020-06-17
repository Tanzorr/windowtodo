import React from "react";
import AddTask from "./AddTask.componet";
import Task from "./Task.cmponent";
import {DragDropContext,Droppable} from "react-beautiful-dnd";


const TasksSections =({addTask, cTasks})=>{
   let tasksList = cTasks.map((t,index)=><Task key={index} task ={t}/>)
   // console.log("cTasks", cTasks)
    return(
        <div className="work-area col-lg-8">
            <div className="content">
                <h1>Category Title</h1>
                <ul id="sortable">
                    {tasksList}
                </ul>
                <AddTask addT={addTask}/>
            </div>

        </div>
    )
}

export default TasksSections;