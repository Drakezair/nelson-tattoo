import React, {Component} from 'react';

class Frame extends Component{

	render(){
		return(
			<img src={this.props.src} alt="" className='f-img' />
		)
	}

}

export default Frame;