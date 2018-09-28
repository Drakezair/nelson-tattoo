import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../CSS/nav.css'

class Nav extends Component {

	render(){
		return(
			<div>   
				<header className='nav' >
						
					<div className="contactBarNav">
						<button className="socialButtonNav" id="socialButtonNav"><i className="fab fa-whatsapp"></i> </button>
						<button className="socialButtonNav" id="socialButtonNav"><i className="fab fa-facebook"></i></button>
						<button className="socialButtonNav" id="socialButtonNav"><i className="fab fa-instagram"></i></button>
						<button className="socialButtonNav" id="socialButtonNav"><i className="fas fa-envelope"></i></button>
					</div>
					
					<div className="navImgContain">
						<img src={require('../assets/logo.png')} className='navImg' alt=""/>
						<p>Rusinsky Tattoo</p>
					</div>
					
					<button className='PlaneaTatto'>
						<Link to="/planea">
							Planea tu tattoo
						</Link>
					</button>

				</header>
			</div>
		);
	}
}

export default Nav;