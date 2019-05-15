import React, {Component} from 'react';
import './App.css';
import Card from './card/card';
import Nextcard from './nextcard/nextcard';



class App extends Component {
	constructor(props){
		super(props);
		this.updateCard = this.updateCard.bind(this);
		
		
		this.state={
			cards:[
			{id:1,food:'asparagus', foodChoices:"Go!" , backgroundColor:"green"},
			{id:2,food:"peanuts", foodChoices:"Slow!", backgroundColor:'orange'},
			{id:3,food:"tomato", foodChoices:"Go!", backgroundColor:'green'},
			{id:4,food:"carrots", foodChoices:"Go!", backgroundColor:'green'},
			{id:5,food:"banana", foodChoices:"Go!", backgroundColor:'green'},
			{id:6,food:"regular soda", foodChoices:"Whoa!", backgroundColor:'red'},
			],
			currentCard:{}
		}
	}
	componentWillMount(){
		const currentCards = this.state.cards;
		this.setState({
			cards:currentCards,
			currentCard:this.getRandomCard(currentCards)
			
		});
		
	}
	
	getRandomCard(currentCards){
		const card= currentCards[Math.floor(Math.random()* currentCards.length)]
		//var index = (currentCards.length === 1 ? 0 : Math.floor(Math.random() * currentCards.length));
        //return currentCards.splice(index, 1)[0];
		return(card);
	}
	
	updateCard(){
		const currentCards = this.state.cards;
		this.setState({
			currentCard: this.getRandomCard(currentCards)
		})
		
	}
	
	render(){
		  return (
			<div className="App">
			<h1><span style={{color:'green'}}>Go</span>,<span style={{color:'orange'}}> slow</span>, <span style={{color:'red'}}>and whoa!</span></h1>
			<p>Use these flashcards to think in terms of GO, SLOW, and WHOA when making food choices</p>
			
			
					<div className="cardRow">
						
						<Card food={this.state.currentCard.food} 
						foodChoices={this.state.currentCard.foodChoices}
						backgroundColor={this.state.currentCard.backgroundColor}
						/>
					</div>
					<div className="buttonRow">
						<Nextcard nextCard= {this.updateCard}/>
					</div>
			</div>
		  );
	}
}

export default App;
