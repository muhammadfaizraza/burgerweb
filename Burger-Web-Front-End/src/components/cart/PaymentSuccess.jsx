import React from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'

const PaymentSuccess = () => {

    const colors=	['#f70776','#32C704','#450101','#ec3521','#e5cb7a']
  return (
 <section className='paymentSuccess'>
     
 <main>
    <Confetti opacity={0.6} color={'fff'}/>
<h1>Order Confirmed</h1>
<p>Order Placed Successfully , You Can Check Order Status </p>
<Link to= "/myorders">
    <button>
    Check Status
    </button>
    </Link>
 </main>
 </section>
 
 
 
    )
}

export default PaymentSuccess