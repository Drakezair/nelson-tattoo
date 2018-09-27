import React, {Component} from 'react';

import '../CSS/Planea.css';

class Planea extends Component {

	render(){
		return(
			<div className="planea-tattoo">

				<h1>Rusinky Tattoo </h1>

				<div className="btns">
					<button className="cotiza">Cotiza tu tattoo</button>
					<button className="cita" 
					onClick={()=> this.props.history.push('Cita')}
					>Agendar Cita</button>
				</div>

				{/* <img src={require('../assets/markLogo.png')} alt=""/> */}

			</div>
		);
	}
}

export default Planea;