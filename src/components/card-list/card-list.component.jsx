import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

function CardList(props)  {
        return (
          <div className='card-list'>
            {props.monsters.map(value => 
            <Card key={value.id} value={value}/>
            )}
          </div>
        )
}

export default CardList
