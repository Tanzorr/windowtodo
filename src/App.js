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

        current:"myDay"

}

const reducer = (state,action)=>{
    console.log("action",action)
    switch (action.type) {

        case 'SET_CATEGORY':
            return {...state, current:action.payload};
        case 'AddmyDay':
            return {...state, myDay:[...state.myDay, action.payload]};
        case 'RemmyDay':
            return {...state, myDay:state.myDay.filter(t=>t!==action.payload)};
        case 'AddImportant':
            return {...state, Important:[...state.Important, action.payload]};
        case 'RemImportant':
            return {...state, Important:state.Important.filter(t=>t!==action.payload)};
        case 'AddPlanned':
            return {...state, Planned:[...state.Planned, action.payload]};
        case 'RemPlanned':
            return {...state, Planned:state.Planned.filter(t=>t!==action.payload)};
        case 'AddAssignedToYou':
            return {...state, AssignedToYou:[...state.AssignedToYou, action.payload]};
        case 'RemAssignedToYou':
            return {...state, AssignedToYou:state.AssignedToYou.filter(t=>t!==action.payload)};
        case 'AddTasks':
            return {...state, Tasks:[...state.Tasks, action.payload]};
        case 'RemTasks':
            return {...state, Tasks:state.Tasks.filter(t=>t!==action.payload)};
        case 'AddToDo':
            return {...state, ToDo:[...state.ToDo, action.payload]};
        case 'RemToDo':
            return {...state, ToDo:state.ToDo.filter(t=>t!==action.payload)};
        case 'AddMoviesToWatch':
            return {...state, MoviesToWatch:[...state.MoviesToWatch, action.payload]};
        case 'RemMoviesToWatch':
            return {...state, MoviesToWatch:state.MoviesToWatch.filter(t=>t!==action.payload)};
        case 'AddTravel':
            return {...state, Travel:[...state.Travel, action.payload]};
        case 'RemTravel':
            return {...state, Travel:state.Travel.filter(t=>t!==action.payload)};
        case 'AddPrivate':
            return {...state, Private:[...state.Private, action.payload]};
        case 'RemPrivate':
            return {...state, Private:state.Private.filter(t=>t!==action.payload)};
        case 'AddDate':
            return {...state, Date:[...state.Date, action.payload]};
        case 'RemDate':
            return {...state, Date:state.Date.filter(t=>t!==action.payload)};
        case 'AddWork':
            return {...state, Work:[...state.Work, action.payload]};
        case 'RemWork':
            return {...state, Work:state.Work.filter(t=>t!==action.payload)};

        default:
            return state;
    }
};



function App() {
    const setTask = (task)=>({
        type:"Add"+state.current,
        payload:task,

    })

    const remTask = (task)=>({
        type:"Rem"+state.current,
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

    const removeTask =(task)=>{
        dispatch(remTask(task))
    }

    const changeCat =(cat )=>{
        dispatch( setCurrentCat(cat))
    }



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
            <TasksSections addTask ={addTask} remTask={removeTask} state={state} catTitle={cur}/>
        </div>
      </div>

    </div>
  );
}

export default App;
