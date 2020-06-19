import React, { Component } from 'react'
import '../card/card.styles.css'
import ReactCardFlip from 'react-card-flip';
import FlipComponent from './flip-component';


class Card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isFlipped: false
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    

    render() {
        return (

    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

        <div onClick={this.handleClick}  className='card-container'>
        <FlipComponent/>
        <img src={`https://robohash.org/${this.props.value.id}?set=set2`} alt='monsters'></img>
        <h2> {this.props.value.name} </h2>
        <h3> email: {this.props.value.email}</h3>
        </div>

 
        <div onClick={this.handleClick} className='card-container'>
        
        <h4> {this.props.value.name} </h4>
        <h2 style={{'fontSize': "20px"}}> username: {this.props.value.username}</h2>
        <h3> city: {this.props.value.address.city}</h3>
        <h3> phone: {this.props.value.phone}</h3>
        <h3> job description: {this.props.value.company.bs}</h3>
        <h4> {this.props.value.company.catchPhrase}</h4>
        </div>
    </ReactCardFlip>
        )
    }
}

export default Card;
