import React from 'react'
import ai from '../../assets/ai.png';
import people from '../../assets/people.png'
import college from '../../assets/college.png'
import title from '../../assets/title.png'
import './header.css';

const Header = () => {
  return (
    <div className='header_main header_padding' id='main'>
      <div className='header_content'>
        <h1 className='title_bg'>Making the world more ADHD friendly, one step at a time.</h1>
        <p>The perfect journal to help improve focus and productivity.
With its secure platform, custom reminders, and management tools, MenteDoshi is a valuable tool for taking control of well-being and leading a more fulfilling life.</p>
        <div className='header_input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='header_people'>
          <img src={people} alt='people'/>
          <p>1600 people requested access to the site</p>
        </div>
        {/* <div className='header_ai'>
          <img src={ai} alt='ai'/>
        </div> */}
        
    </div>
    <div className='header_ai'>
          <img src={title} alt='ai'/>
        </div>
    </div>
  )
}

export default Header