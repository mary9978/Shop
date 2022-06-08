import React from 'react'
import { Link } from "react-router-dom";
import  './categorylist.style.modue.css';
function CategoryList({item}) {
    return (
        <div className="container" dir={'rtl'}>
        <div className="row">
           <h4 className={'h4-style'}>دسته ‌بندی ‌های دیجی ‌کالا</h4>
           {item.map((category)=>(
             <div className="col-3 col-md-2 col-lg-2" key={category.id}>
               <Link to={'electronic-devices'} className={'styled-link'}>
               <img src={category.image} alt={category.name} width={200}/>
               <p className={'title_category'}>{category.name}</p>
               </Link>
             </div>
           ))}
        </div>
      </div>
    )
}

export default CategoryList
