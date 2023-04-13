import React, { useState, useEffect } from 'react';
import profileImage from './img/profile.jpg';
import BlogList from './BlogList';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Post } from './types';
import data from './data.json';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(data as Post[]); // cast the imported data to Post[]
  }, []);

  return (
    <>
      <div className="leftBanner">
        <h1>Gabor's Blog</h1>
        <img src={profileImage} alt="profil" />
        <h2>Szendrei Gábor</h2>
        <a href={"https://discordapp.com/users/328536952456609793"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href={"https://github.com/SzGabor1"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={"https://www.facebook.com/gabor.szendrei.37/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href={"https://twitter.com/SpeenSZG"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <div className='aboutMe'>
          <h2>About me</h2>
        </div>
      </div>
      <div className="content">
        <div className="blog-list">
          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
}

export default App;