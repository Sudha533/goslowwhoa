import React from 'react'; 
import './card.css';


const Card = (props) => {
	return(
		<div className="card-container">
			<div className="card">
				<div className="front">
					<div className="food" >
					<img src={require('./images/' + props.food + '.jpg')} alt="" />
					<p style={{textTransform:'capitalize'}}>{props.food}</p>
					</div>
				</div>
				<div className="back" style={{backgroundColor:props.backgroundColor}} >
					<div className="foodChoices">{props.foodChoices}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;