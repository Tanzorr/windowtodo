import React from "react";

const CategoryItem =({category,caunt, chC})=>{


    return(
        <li className='row justify-content-between'>
            <div>
                <span className="mr-2"><i className="fa fa-bars" aria-hidden="true"></i></span>
                <span><a onClick={()=>{chC(category)}}>{category}</a></span>
            </div>
            <span>{caunt}</span>
        </li>
    )
}

export default CategoryItem;
