import React,{useState} from "react";

const AddTask =({addT})=>{
    console.log("add T", addT)
    const [task, setTask]=useState('');
    const add=(task)=>{
        addT(task)
        setTask('')
    }

    return(
        <div className="add_task">
            <p>
                <label htmlFor="">Add new Task</label>
            </p>
            <input type="text" onChange={(e)=>{setTask(e.target.value)}} value={task}/>
            <input type="button" value="add" onClick={()=>{add(task)}}/>
        </div>
    )
}


export default AddTask;