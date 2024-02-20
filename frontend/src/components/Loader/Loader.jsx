import React from 'react'
import './Loader.css'
import { Audio } from 'react-loader-spinner'
const Loader = () => {
  return (
    <>
    <div className="loadingPage">
    <Audio
  height="90"
  width="90"
  radius="9"
  color="rgb(77, 0, 0)"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
<h3>Loading</h3>
    </div>

    </>
  )
}

export default Loader

