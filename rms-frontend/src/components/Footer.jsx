import React from 'react'
import styled from 'styled-components'

const Foot=styled.footer`
position:absolute;
bottom:0;
width:100%;
height:50px;
background-color:#212529;
text-align:center;
color:white;
`
const Footer = () => {
  return (
    <div>
      <Foot> Result Management System</Foot>
    </div>
  )
}

export default Footer
