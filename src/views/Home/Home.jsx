import React from 'react';
import Electronic from '../../assets/digital.png';
import Zibaii from '../../assets/zibaii.png';
import khodro from '../../assets/khodro.png';
import modvaposhak from '../../assets/modvaposhak.png';
import asbabbazi from '../../assets/asbabbazi.png';
import supermarketi from '../../assets/supermarketi.png';
import khane from '../../assets/khane.png';
import tahrir from '../../assets/tahrir.png';
import  varzesh from '../../assets/varzesh.png';
import bomi from '../../assets/bomi.png';
import CategoryList from '../../components/CategoryList/CategoryList';
//this is home page
function Home() {
  const categoryList=[
    {id:1,name:'کالای دیجیتال',image:Electronic,link:'/electronic-devices'},
    {id:2,name:'کالای دیجیتال',image:khodro,link:'/electronic-devices'},
    {id:3,name:'کالای دیجیتال',image:modvaposhak,link:'/electronic-devices'},
    {id:4,name:'کالای دیجیتال',image:asbabbazi,link:'/electronic-devices'},
    {id:5,name:'کالای دیجیتال',image:supermarketi,link:'/electronic-devices'},
    {id:6,name:'کالای دیجیتال',image:Zibaii,link:'/electronic-devices'},
    {id:7,name:'کالای دیجیتال',image:khane,link:'/electronic-devices'},
    {id:8,name:'کالای دیجیتال',image:tahrir,link:'/electronic-devices'},
    {id:9,name:'کالای دیجیتال',image:varzesh,link:'/electronic-devices'},
    {id:10,name:'کالای دیجیتال',image:bomi,link:'/electronic-devices'},
  ]
  return (
    <>
    <div>this is banner</div>
    <CategoryList item={categoryList}/>
    </>
  )
}

export default Home