import React, { Fragment } from 'react'
import '../../style/home.scss'
import {motion} from 'framer-motion'
import Founder from './Founder'
import Menu from '../home/Menu'
import '../../style/menu.scss'

const Home = () => {
const option ={
initial : {
x: '-100%',
opacity:0,


},
whileInView : {
  x: '0',
  opacity:1,
  
  
  },


}

  return (
<Fragment>
<section className='home'>
<div>
<motion.h1 {...option}>The Burger Shop</motion.h1>
<motion.p{...option} transition={{delay:0.4}}>The House of Taste</motion.p>
<a href='#menu'>

 Explore Menu 

</a>


</div>


  
</section>
<Founder/>  
<Menu/>
</Fragment>
)
}

export default Home