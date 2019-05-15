import React from 'react';

const MediaCard = ({title, body, imageURL}) => {
	
	return (
	<div>
		<h2>{title}</h2>
		<p>{body}</p>
		<img src={imageURL} alt=""/>
	</div>
	);
};

const Answer = ({isCorrect}) =>{
	return isCorrect? <p>Yes</p> : <p>No</p>
};

const Lesson2 = () =>{
	return(
	<div>
		<MediaCard 
		title= "Lesson 2"
		body= "good job learning lesson2"
		imageURL = "uuuu"/>
		<Answer isCorrect = "Yes"/>
		</div>
	); 

};

export  default Lesson2;