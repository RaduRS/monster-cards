import React from 'react'
import '../card/card.styles.css'

function Card(props) {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.value.id}?set=set2`} alt='monsters'></img>
            <h2> {props.value.name} </h2>
            <h3> email: {props.value.email}</h3>
        </div>
    )
}

export default Card;
