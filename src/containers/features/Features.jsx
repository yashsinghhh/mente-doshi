import React from 'react'
import './features.css';
import bennett from '../../assets/bennett.jpg'
import iitd from '../../assets/iitd.jpg'
import iitb from '../../assets/iitb.jpg'
// import aiims from '../../assets/aiims.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
import { GrLocationPin } from 'react-icons/ri';

const Features = () => {
  return (
    <div className='colleges'>
     <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">HOW WAS YOUR DAY?</p>
        </div>
        <div class="flip-card-back">
            <button class="title">MY JOURNAL</button>
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




  )
}

export default Features