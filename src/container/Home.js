import React, {Component} from 'react';
import '../CSS/home.css';

class Home extends Component {


    render(){
        return(
            <div>
                <div className='front' >
                    <header className='navBar' >
                        <div className="contactBar">
                            <button className="socialButton" id="socialButton"><i className="fab fa-whatsapp"></i> </button>
                            <button className="socialButton" id="socialButton"><i className="fab fa-facebook"></i></button>
                            <button className="socialButton" id="socialButton"><i className="fab fa-instagram"></i></button>
                            <button className="socialButton" id="socialButton"><i className="fas fa-envelope"></i></button>
                        </div>
                        <button className='PlaneaTatto'>Planea tu tattoo</button>
                    </header>
                    <img src={require("../assets/tired_wolf.png")} alt="lobito"/>
                    <h1>Rusinky Tattoo </h1>
                </div>
            </div>
        );
    }
}
export default Home