import React from 'react'
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom'

const N0tfound = () => {
  return (
    <section className='notFound'>
<main>
<div>

<MdError/>
<h1>404</h1>
</div>
<h6>Page Not Found,Click below to go to Home page</h6>
<Link to ="/"> Go To Home </Link>
</main>



    </section>
  )
}

export default N0tfound