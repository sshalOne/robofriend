import React,{Component} from 'react';

class Card extends Component {
	
	render () {

		return (
				<div className= 'bg-gold br3 dib grow ma2 pa bw2 shadow-5 tc'>
				<img alt = 'robots' src = {`https://robohash.org/${this.props.id}?200x200`} />
					<div>
						<p> {this.props.name} </p>
						<p> {this.props.email} </p>
					</div>
				</div>
			);
	}		 
}

export default Card;