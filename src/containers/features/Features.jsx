import React from 'react'
import './features.css';

import { GrLocationPin } from 'react-icons/ri';

const Features = () => {
  return (
    <><div className='colleges'>
          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <p class="title">HOW WAS YOUR DAY?</p>
                  </div>
                  <div class="flip-card-back">
                      <a href='https://gh.jgrimshaw.com/notes-app-tutorial/'><button class="title">MY JOURNAL</button></a>
                  </div>
              </div>
          </div>
          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <p class="title">NEW REMINDER!</p>
                  </div>
                  <div class="flip-card-back">
                      <button class="title">DRINK WATER</button>
                  </div>
              </div>
          </div>



      </div>
      <div className='reminder-tile'>
      <div class="card">
              <div class="img"></div>
              <div class="textBox">
                  <div class="textContent">
                      <p class="h1">New Reminder</p>
                      <span class="span">2 mins ago</span>
                  </div>
                  <p class="p">Write play script</p>
                  <div>
                  </div></div></div><div class="card">
              <div class="img"></div>
              <div class="textBox">
                  <div class="textContent">
                      <p class="h1">New Reminder</p>
                      <span class="span">2 min ago</span>
                  </div>
                  <p class="p">Grocery Shopping</p>
                  <div>
                  </div></div></div><div class="card">
              <div class="img"></div>
              <div class="textBox">
                  <div class="textContent">
                      <p class="h1">New Reminder </p>
                      <span class="span">2 min ago</span>
                  </div>
                  <p class="p">GDSC event at 6pm</p>
                  <div>
                  </div></div></div></div></>



  )
}

export default Features