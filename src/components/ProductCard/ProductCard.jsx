import React from 'react';
import '../ProductCard/card.style.module.css';
import {BsFillCartFill} from 'react-icons/bs';
import {BsHeartFill} from 'react-icons/bs';
import { Link } from "react-router-dom";
function ProductCard({image,title,price}) {
    return (
        <div className={'product_card'} style={{
           border:'1px solid lightgray',
           padding:'20px',
           borderRadius:'20px',
           gap:'20px',
           margin:'15px',
           boxShadow:'0px 0px 10px #a1a1a133'
        }}>
             <img src={image} alt={title} width={'100%'}/>
            <p className={'title_card'}>{title}</p>
            <hr/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <small style={{textDecoration:'line-through',color:'#ee384e',fontSize:'80%',fontWeight:'400'}}>$400.99</small> 
            <p style={{fontSize:'18px',fontWeight:'600',color:'#ee384e'}}>{price}</p>
            </div>
            <div>
             <Link to={'/'} style={{color:'#e1e1e1'}}><BsFillCartFill/></Link>
             <Link to={'/'} style={{color:'#e1e1e1'}}><BsHeartFill/></Link>
            </div>
            </div>
        </div>
    )
}

export default ProductCard
