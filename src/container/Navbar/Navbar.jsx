import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (  
    <nav>
        <div>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"></img>
        </div>
        <ul>
            {['about', 'skills'].map((item) =>(  
                <li key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
                </li>
                
            ))}
        </ul>
    </nav>


  )
}

export default Navbar