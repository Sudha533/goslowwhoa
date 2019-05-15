import React from 'react';

const QuestionCount = ({counter,total}) => {
	return(
	<div className="QuestionCount">
		<span>{counter}</span> of <span>{total}</span>
	</div>
	);
}

export default QuestionCount;