import React  from 'react';
import card1 from '../images/image1.png'
import card2 from '../images/image2.png'
import card3 from '../images/image3.png'
import star from '../images/Star.png'

export default function Card(){
    return(
        <div className='card'>
                <img src={card1} className="card-image"/>

            <div className='card-body'>
                <img src={star} className="card-star" />
                <span>5.0</span>
                <span className='gray'>(6) . </span>
                <span className='gray'>USA</span>
            </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
        </div>

    )
}
