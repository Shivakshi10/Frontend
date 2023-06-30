import React from 'react'
import "./home.css"
import Card from '../components/Card'
import CircleIcon from '@mui/icons-material/Circle';
import Reviews from '../components/Reviews';
import Category from '../components/Category';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Home = () => {
const {ref,inView} = useInView();
const {ref2,inView2} = useInView();
const {ref3,inView3} = useInView();
const animation = useAnimation();
const animation2 = useAnimation();
const animation3 = useAnimation();


useEffect(()=>{
    console.log("Inview =",inView);
    if(inView){
        animation.start({
            x:0,
            transition:{
                type:'spring',duration:1,bounce:0.2
            }
        });
    }
    if(!inView){
        animation.start({
            x:'-100vw'
        })
    }
},[inView])



useEffect(()=>{
    console.log("Inview =",inView2);
    if(inView2){
        animation.start({
            x:0,
            transition:{
                type:'spring',duration:1,bounce:0.2
            }
        });
    }
    if(!inView){
        animation.start({
            x:'-100vw'
        })
    }
},[inView2])


const veggie = [
    {
        id:"1",
        title:"Comfort Congee",
        desc:"An Asian favorite",
        img:"assets/meat.jpg",
        price:"20.00"
    },
    {
        id:"2",
        title:"Spicy Laksa",
        desc:"Hearty with a zing",
        img:"assets/veg.jpg",
        price:"21.50"
    },
    {
        id:"3",
        title:"Vegan Feast",
        desc:"Healthy & Wholesome",
        img:"assets/veg2.png",
        price:"19.00"
    },
    {
        id:"4",
        title:"Spicy Laksa",
        desc:"Hearty with a zing",
        img:"assets/veg.jpg",
        price:"21.50"
    },
]

const reviews = [
    {
        id:1,
        text:"Kitchen Comforts brought true comfort to our table.These CIY Meal Kits are incredible!",
        acc:"@REALLYGREATSITE"
    },
    {
        id:2,
        text:"I never knew I could cook dishes like these. It's truly easy- and my family is grateful!",
        acc:"@REALLYGREATSITE"
    },
    {
        id:3,
        text:"I admire businesses that evolve with the times, and Kitchen Comforts did it so deliciously!",
        acc:"@REALLYGREATSITE"
    }

]

const menu = [
    {
        id:1,
        img:"assets/dai3.webp",
        desc:"Hearty, wholesome meals for the whole family",
        text:"TRY OUR FAMILY FEAST KITS"
    },
    {
        id:2,
        img:"assets/dai2.webp",
        desc:"Vegan favorites with a delicious twist",
        text:"VIEW OUR VEGAN OPTIONS"
    },
    {
        id:3,
        img:"assets/dai1.jpg",
        desc:"Asian delights to take you on a culinary trip",
        text:"EAT YOUR WAY TO ASIA"
    },

]


  return (
    <div className='homeContainer'>
        <div className='titleContainer'>
            <img className='titlebg' src='assets/bg12.jpg' alt=''></img>
            
            <div className='titleHead'>
                <span className='titleh'>Freshlo</span>
                <span className='titledesc'>Get Fresh Groceries Delivered Right to Your Doorstep!</span>
            </div>
        </div>
        <div className='AboutContainer' ref={ref}>
            <div className='about'>
                <div className='aleft'  >
                    <div  className='bg'></div>
                    <img className='aimg' src='assets/img1.jpg' alt=''></img>
                </div>
                <motion.div className='aright'
               animate={animation}
                >
                    <span className='ahead'>About</span>
                    <span className='adesc'>
                        At Freshlo, we are passionate about delivering the freshest groceries to your doorstep. Our mission is to proivde a seamless online shopping experience,
                        making it easy for you to access high quality products and enjoy the convenience of home delivery. With out commitment to freshness , quality, and 
                        customer satisfaction, Freshlo is your trusted partner for all your grocery needs.
                    </span>
                    <span className='adesc'>
                        At Freshlo, we are passionate about delivering the freshest groceries to your doorstep. Our mission is to proivde a seamless online shopping experience,
                        making it easy for you to access high quality products and enjoy the convenience of home delivery. With out commitment to freshness , quality, and 
                        customer satisfaction, Freshlo is your trusted partner for all your grocery needs.
                        At Freshlo, we are passionate about delivering the freshest groceries to your doorstep. Our mission is to proivde a seamless online shopping experience,
                        making it easy for you to access high quality products and enjoy the convenience of home delivery. With out commitment to freshness , quality, and 
                        customer satisfaction, Freshlo is your trusted partner for all your grocery needs.
                    </span>
                </motion.div>

            </div>
        </div>
        <div className='WorkContainer' ref={ref2}>
            <img className='workimg' src='assets/bg77.webp' alt='' ></img>
            <div className='whead'>HOW IT WORKS</div>
            <motion.div className='wboxes' animate={animation}>
                <div className='welements'>
                    <div className="number">1</div>
                    <span className='wdesc'>Visit freshlo.ca to browse our available Fresh Groceries</span>
                </div>
                <div className='welements'>
                <div className="number">2</div>
                    <span className='wdesc'>Select your chosen Groceries, input your delivery address, and pay securely online</span>
                </div>
                
                <div className='welements'>
                <div className="number">3</div>
                    <span className='wdesc'>The Fresh Groceries will be at your doorstep at your chosen time the following day</span>
                </div>
                </motion.div>
            </div>
            <div className='PriceContainer'>
                <div className='pHEAD'>
                      <span className='Phead'>PRICING</span>
                </div>
              
                <div className='pelements'>
                    {veggie.map((item) =>{
                        return (
                            <Card key={item.id} data={item}/>
                        )
                    })}
                 
                   
                </div>
            </div>

         <div className='insideContainer'>
         <div className='inside'>
               <div className='ileft'>
                <img src='assets/vbox.avif' alt='' className='iimg'></img>
               </div>
               <div className="iright">
                <div className='right'>
                       <span className='ihead'>What's inside each box</span>
                <div className="list">
                    <span className='listitem'><CircleIcon fontSize='small' className='circle'/>Illustrated step-by-step recipes </span>
                    <span className='listitem'><CircleIcon fontSize='small'className='circle'/>Ready to cook ingredients </span>
                    <span className='listitem'><CircleIcon fontSize='small'className='circle'/>QR codes for real-time videos </span>
                    <span className='listitem'><CircleIcon fontSize='small'className='circle'/>Guaranteed delicious meals! </span>
                </div>
                <div className='buttons'>
                    <button className='ibutton'>BROWSE OUR KITS</button>
                </div>
                </div>
             
               </div>
            </div>   
        </div>

        <div className='ReviewContainer' >
            <div className='header'>
                <span className='rhead'>REVIEWS</span>
                <span className='rdesc'>Hear from our new home chefs</span>
            </div>
            <div className='reviewbox' animate={animation}>
                {reviews.map((item =>{
                    return (
<Reviews key={item.id} data={item}/>
                    )
                }))}
                
            </div>
        </div>
        <div className='CatContainer'>
            <div className='catdiv'>
                <div className='catleft'>FRESHLO</div>
                <div className="catright">
                    <div className='cattext'>
                    Take home the kitchen Comforts experience. Try our Meal Kits and unleash your inner chef!
                    </div>
                   
                    </div>
            </div>
            <div className='catelements'>
                <div className='items'>
                      {menu.map((m)=>{
                    return (
                        <Category key={m.id} data={m}/>
                    )
                })}
             
                </div>
              
            </div>
        </div>
<Footer />
        </div>
     
    
  )
}

export default Home
