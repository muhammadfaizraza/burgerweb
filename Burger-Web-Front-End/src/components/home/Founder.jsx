import React from 'react'
import '../../style/Founder.scss'
import Ceo from '../../assets/ceo.jpeg'
import {motion} from 'framer-motion'

const Founder = () => {
  return (
 <section className='founder'>
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
<img src={Ceo}  alt='founder' width={200} height={200}/>
<h3>Muhammad Faiz Raza    </h3>
<p>
I am the Founder of The Burger Hub <br/>
for creating A new World of Taste

</p>

    </motion.div>




 </section>
  )
}

export default Founder