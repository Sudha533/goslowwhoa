import React, {Component} from 'react';
import './nextcard.css';


class Nextcard extends Component{
	constructor(props){
		super(props);
		this.nextCard = this.nextCard.bind(this);
	}
	
	nextCard(){
		this.props.nextCard();
	}
	render(props){
		return(
			<div className='buttonContainer'>
				<button className='btn' onClick={this.nextCard}>Next Card
				</button>
			
			</div>
		);
	}
}
export default Nextcard;