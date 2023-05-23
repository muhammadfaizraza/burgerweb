import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import me from '../../assets/ceo.jpeg'

const About = () => {
  return (
  <section className='about'>
<main>


<h1>About Us</h1>
<article>

    <h4>The Burger Shop</h4>
<p>We Are The Burger Shop.We are a hub of taste</p>
<p>Explore the Various type of food and burger.Click below to see 
    the menu </p>

    <Link to='/'>

    <RiFindReplaceLine/>
    </Link>
</article>

<div>
<h2>Founder</h2>
<article>

    <div>
<img src={me} alt=''/>
<h3>Faiz Raza</h3>
    </div>
    <p>I am faiz raza , the founder of the burger shop  </p>
</article>


</div>


</main>


  </section>
  
  
    )
}

export default About