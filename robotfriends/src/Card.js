import React,{Component} from 'react';

class Card extends Component {
	render () {
		return (
				<div className= 'bg-gold br3 dib grow ma2 pa bw2 shadow-5'>
					<img src='https://robohash.org/test?200x200' alt ='robots'  />
					<div>
					 	<h1> RoboFriends </h1>
						<p>  Mike Smith </p>
						<p>  mike.smith@gmail.com </p>
					</div>
				</div>

			);
	}
}

export default Card;