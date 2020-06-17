import React,{useReducer,useEffect} from 'react';
import './App.css';
import Aside from "./components/Aside.componet";
import TasksSections from "./components/TaskSections.component";

let INITIAL_STATE ={
        myDay:[],
        Important:[],
        Planned:[],
        AssignedToYou:[],
        Tasks:[],
        ToDo:[],
        MoviesToWatch:[],
        Travel:[],
        Private:[],
        Date:[],
        Work:[],
        TasksC:[],
        current:"myDay"

}

const reducer = (state,action)=>{
    console.log("action",action)
    switch (action.type) {

        case 'SET_CATEGORY':
            let keyy = String(action.payload)
            console.log('Key',String(keyy))
            return {...state, current:action.payload, TasksC:state["myDay"]};
        case 'myDay':
            return {...state, myDay:[...state.myDay, action.payload]};
        case 'Important':
            return {...state, Important:[...state.Important, action.payload]};
        case 'Planned':
            return {...state, Planned:[...state.Planned, action.payload]};
            default:
            return state;
    }
};



function App() {
    const setTask = (task)=>({
        type:state.current,
        payload:task,

    })

    const setCurrentCat = (category)=>({
        type:"SET_CATEGORY",
        payload:category
    })
    const [state, dispatch] =useReducer(reducer, INITIAL_STATE);

    const addTask =(task )=>{
        dispatch(setTask(task))
    }

    const changeCat =(cat )=>{
        dispatch( setCurrentCat(cat))
    }

    useEffect(()=>{
        addTask("task")
    },[])

    useEffect(()=>{
       changeCat(" Important")
    },[])

    let cur =state.current
    var ts =["fsnnf","sfajf"]

    if(cur){
        console.log('cur',cur)

    }

    return (
    <div className="App ">
      <div className="container h-100">
        <div className="row h-100">
            <Aside state ={state} changeCat ={changeCat} />
            <TasksSections addTask ={addTask} cTasks={ts}/>

        </div>
      </div>

    </div>
  );
}

export default App;
