import React, { useState } from 'react';
import profileImage from './img/profile.jpg';
import BlogList from './BlogList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Create a blog site',
      date: 'April 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim quis eros euismod dignissim.'
    },
    {
      id: 2,
      title: 'How to write clean code',
      date: 'March 25, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim quis eros euismod dignissim.'
    },
    {
      id: 3,
      title: '10 tips for better productivity',
      date: 'March 18, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim quis eros euismod dignissim.'
    }
  ]);

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
      <h1>Post finder</h1>
        <div className="searchBar">
          <form className='inputForm'>
          <input type='text' placeholder='Search blog posts' />
      <button className='inputButton' type='submit'>Search</button>
    </form>
    </div>
    <BlogList posts={posts} />
  </div>
</>
);
}

export default Blog;