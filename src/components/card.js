import React  from 'react';
import star from '../images/Star.png'

export default function Card(props){
    return(
        <div className='card'>
                <img src={props.img} className="card-image"/>

            <div className='card-body'>
                <img src={star} className="card-star" />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewers}) . </span>
                <span className='gray'>USA</span>
            </div>
                <p>{props.caption}</p>
                <p><b>From {props.price}</b> / person</p>
        </div>

    )
}
