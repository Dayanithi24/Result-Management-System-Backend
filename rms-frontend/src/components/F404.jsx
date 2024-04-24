import React from 'react'
import { useNavigate } from 'react-router-dom'

const F404 = () => {
    const navigator=useNavigate()
    function exit(){
        navigator("/")
    }
  return (
    <div>
      <h1>404</h1>
      <br/>
      <h2>Student Not Found</h2>
      <button className='btn btn-primary btn-lg' style={{position:"absolute",left:"45%",top:"50%"}} onClick={exit}>Back</button>
    </div>
  )
}

export default F404
