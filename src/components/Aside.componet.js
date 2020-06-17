import React from "react";
import CategoryItem from "./TaskCatgyry.component";
import User from "../img/user.png"



const Aside=({state,changeCat})=>{
    const category = Object.keys(state);
    let categoriesList = category.map((c,index)=><CategoryItem key={index} caunt={state[c].length} chC={changeCat}  category={c}/>)

    return(

            <aside className="sidebar col-md-4 ">
                <h2 className='text-center'>
                    <img src={User} alt="user"/><span>User Name</span>
                </h2>
                <div className="categories">
                    <ul>
                        {categoriesList}
                    </ul>

                </div>
            </aside>
        
    )
}

export default Aside;