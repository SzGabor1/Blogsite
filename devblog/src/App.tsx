import { useState } from 'react'
import profileImage from './img/profile.jpg'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <div className="leftBanner">
    
    <h1>Gabor's Blog</h1>

      <img src={profileImage} alt="profil" />
      <h2>Szendrei Gábor</h2>
    
    <a href={"https://discordapp.com/users/328536952456609793"} target="_blank" rel="noopener"><FontAwesomeIcon icon={faDiscord} /></a>
    <a href={"https://github.com/SzGabor1"} target="_blank" rel="noopener"><FontAwesomeIcon icon={faGithub} /></a>
    <a href={"https://www.facebook.com/gabor.szendrei.37/"} target="_blank" rel="noopener"><FontAwesomeIcon icon={faFacebook} /></a>
    <a href={"https://twitter.com/SpeenSZG"} target="_blank" rel="noopener"><FontAwesomeIcon icon={faTwitter} /></a>
    
    

    <div className='aboutMe'>
      <h2>About me</h2>
    </div>
    
    
    
    </div>
    <div className="content">
    <div className="searchBar">
        <form className='inputForm'>
          <br></br>
        <h1>Closed/Ongoing projects</h1>
        <br></br>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
        </form>



    <a href="/PostX">

    <div className='Blogs'>
      <div className='blogPost'>
        <h1>Create a blog site</h1>
        <img src={'data:image/png;base64,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'} alt="blogLogo"></img>
        <p> 
        I created this website using Rect.js. In the future, I will document progress on my pygame and other projects here.
        </p>
        <span>Date: 2023.04.12</span>
        </div>    
    </div>
    </a>


    </div>
    </div>

    
    
    </>
  )
}

export default App
