import React from 'react'
import main_img from '../images/group.png'

export default function Hero(){
    return(
        <section className='hero'>
            <img src={main_img} className="hero-img"/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}