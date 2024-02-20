import React from 'react'
import svg from '../../Images/not.gif'
import '../NotFound/NotFound.css'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <>
  <div className='cont-404'>
    <h2>404</h2>
    <img src={svg} alt='notFound' />
    <Link to="/">
    <Button className="go-back-btn">Go Back Earth</Button></Link>
  </div>

    </>
  )
}

export default NotFound