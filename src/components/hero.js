import React from 'react'
import main_img from '../images/group.png'
import Card from '../components/card'
import card1 from '../images/image1.png'
import card2 from '../images/image2.png'
import card3 from '../images/image3.png'


export default function Hero(){
    return(
        <section className='hero'>
            <img src={main_img} className="hero-img"/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <div className='card-collection'>
                <Card img = {card1} rating="5.0" reviewers={6} caption="Life lessons with Katie Zaferes" price="$136" stock="SOLD OUT"/>
                <Card img = {card2} rating="5.0" reviewers={30} caption="Learn wedding photography" price="$125" stock="ONLINE"/>
                <Card img = {card3} rating="4.8" reviewers={2} caption="Group Mountain Biking" price="$50" stock=""/>
            </div>
        </section>
       
    )
}