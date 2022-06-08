import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import airpod from '../../assets/product/airpod.jpeg';
import bag from '../../assets/product/bag.jpeg';
import hamzam from '../../assets/product/hamzan.jpeg';
import makbook from '../../assets/product/makbook.jpeg';
import mobile from '../../assets/product/mobile.jpeg';
import shoes from '../../assets/product/shoes.jpeg';
import watch from '../../assets/product/watch.jpeg';



import book from '../../assets/product/windows10book.jpeg';
import { Link } from "react-router-dom";
function ProductList() {
    const product=[
        {id:1,title:'لپ تاپ مک بوک اس ۱۰',image:makbook,price:'25,000,000',category:'',takhfif:''},
        {id:2,title:'لپ تاپ مک بوک اس ۱۰',image:airpod,price:'1,220,000',category:'',takhfif:''},
        {id:3,title:'لپ تاپ مک بوک اس ۱۰',image:bag,price:'345,000',category:'',takhfif:''},
        {id:4,title:'لپ تاپ مک بوک اس ۱۰',image:hamzam,price:'2,400,000',category:'',takhfif:''},
        {id:5,title:'لپ تاپ مک بوک اس ۱۰',image:mobile,price:'4,700,000',category:'',takhfif:''},
        {id:6,title:'لپ تاپ مک بوک اس ۱۰',image:shoes,price:'200,000',category:'',takhfif:''},
        {id:7,title:'لپ تاپ مک بوک اس ۱۰',image:watch,price:'300,000',category:'',takhfif:''},
        {id:8,title:'لپ تاپ مک بوک اس ۱۰',image:book,price:'200,000',category:'',takhfif:''},
    ]
    return (
        <div className={'container'} style={{display:'flex',overflowX:'auto'}}>
            <div className="row">
                {product.map((item)=>(
                //add link here <Link to='/product/id/'>
                <div className="col-12 col-md-3 col-lg-3" key={item.id}>
                <ProductCard key={item.id} image={item.image} title={item.title} price={item.price}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProductList
