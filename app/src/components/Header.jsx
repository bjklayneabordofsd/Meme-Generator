import React from 'react';
import trollFace from '/troll-face.png';
import './Header.css';

export default function Header() {
    return (
        <div className='Header'>
            <nav>
              <img src={trollFace}/>
              <h1>Meme Generator</h1>
            </nav>
        </div>
    )
  }