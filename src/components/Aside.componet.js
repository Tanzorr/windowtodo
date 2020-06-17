import React from "react";
import CategoryItem from "./TaskCatgyry.component";



const Aside=({state,changeCat})=>{
    const category = Object.keys(state);
    let categoriesList = category.map((c,index)=><CategoryItem key={index} caunt={state[c].length} chC={changeCat}  category={c}/>)

    return(

            <aside className="sidebar col-lg-4 ">
                <div>
                    <img src="./img/user.png" alt=""/><span>User Name</span>
                </div>
                <div className="categies">
                    <ul>

                        {categoriesList}

                    </ul>

                </div>
            </aside>
        
    )
}

export default Aside;