import React, {Component} from 'react';
import Parallax from 'parallax-js';

import '../CSS/home.css';

//Components
import Frame from '../components/frame';
import Nav from '../components/nav';

//Data
const Data = [{img: require('../assets/tattos/1.jpg')},{img: require('../assets/tattos/2.jpg')},{img: require('../assets/tattos/3.jpeg')},{img: require('../assets/tattos/4.jpeg')},{img: require('../assets/tattos/5.jpeg')},{img: require('../assets/tattos/6.jpeg')},{img: require('../assets/tattos/7.jpeg')},{img: require('../assets/tattos/8.jpeg')},{img: require('../assets/tattos/9.jpeg')},{img: require('../assets/tattos/10.jpeg')},{img: require('../assets/tattos/11.jpeg')},{img: require('../assets/tattos/12.jpeg')},{img: require('../assets/tattos/13.jpeg')},{img: require('../assets/tattos/14.jpeg')},{img: require('../assets/tattos/15.jpeg')},{img: require('../assets/tattos/16.jpeg')},{img: require('../assets/tattos/17.jpeg')},{img: require('../assets/tattos/18.jpeg')},{img: require('../assets/tattos/19.jpeg')},{img: require('../assets/tattos/20.jpeg')},{img: require('../assets/tattos/21.jpeg')},{img: require('../assets/tattos/22.jpeg')},{img: require('../assets/tattos/23.jpeg')},{img: require('../assets/tattos/24.jpeg')},{img: require('../assets/tattos/25.jpeg')},{img: require('../assets/tattos/26.jpeg')},{img: require('../assets/tattos/27.jpeg')},{img: require('../assets/tattos/28.jpeg')},{img: require('../assets/tattos/29.jpeg')},{img: require('../assets/tattos/30.jpeg')},{img: require('../assets/tattos/31.jpeg')},{img: require('../assets/tattos/32.jpeg')},{img: require('../assets/tattos/33.jpeg')},{img: require('../assets/tattos/34.jpeg')},{img: require('../assets/tattos/35.jpeg')},{img: require('../assets/tattos/36.jpeg')},{img: require('../assets/tattos/37.jpeg')},{img: require('../assets/tattos/38.jpeg')},{img: require('../assets/tattos/39.jpeg')},{img: require('../assets/tattos/40.jpeg')},{img: require('../assets/tattos/41.jpeg')},{img: require('../assets/tattos/42.jpeg')},{img: require('../assets/tattos/43.jpeg')}
]


class Home extends Component {

	state={
		nav: false,
		name: "",
		email: "",
		asunto: "",
		desc: "",
		phone: "",
	}
	
	componentDidMount()
	{
		// this.readData();

		//PARALLAX
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);


		//LISTENER
		window.addEventListener('scroll',()=>{
			let frontHeight = this.refs.front.scrollHeight;
			let wind = window.scrollY;
			if(wind > frontHeight)
			{
				this.setState({nav: true})
			}else {
				this.setState({nav:false})
			}
		})
		
	}

	handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
		
		this.setState({
			[name]: value
		});
	}

	sendForm = (event) => {
		event.preventDefault();
	}

	sendMail = () => { 
		// var myEmail = "snsimonescobar@gmail.com"  // var link = `mailto:${this.state.email}` // 					+ `?cc=${}` // 					+ "?from=" + escape(`${myEmail}`) // 					+ "&subject=" + escape(`${this.state.asunto}`) // 					+ "&body=" + escape(`${this.state.desc}`) // ; // window.location.href = link;

		var template_params = {
			desc: this.state.desc,
			name: this.state.name,
			phone: this.state.phone,
			asunto: this.state.asunto,
			email: this.state.email,
		}
		
		var service_id = "gmail";
		var template_id = "nelson_tattoo";

		window.emailjs.send(service_id, template_id, template_params, 'user_EVcJ5zcUWEVqBVD57YumL')
		.then(
			(res) => {
				console.log("Success", res.status, res.text)
			},
			(err) => { 
				alert("Ha ocurrido un error, por favor revise su conexión o intente de nuevo.")
				console.log("Failed", err)}
		)

		alert("Enviado")
		this.setState({name: "",desc: "",phone: "",asunto: "",})
	}

// readData = () => {var database = firebase.database().ref();database.on("value", snapshot => {var name = snapshot.val().name;console.log(name);this.setState({name: name,})});}

	render(){
		return(
			<div>
				{
					this.state.nav ? <Nav /> : null
				}
				
				<div className='front' ref='front' >
					
					<header className='navBar' >
						<div className="contactBar">
							<button className="socialButton" id="socialButton"><i className="fab fa-whatsapp"></i> </button>
							<button className="socialButton" id="socialButton"><i className="fab fa-facebook"></i></button>
							<button className="socialButton" id="socialButton"><i className="fab fa-instagram"></i></button>
							<button className="socialButton" id="socialButton"><i className="fas fa-envelope"></i></button>
						</div>
						<button className='PlaneaTatto' onClick={()=> this.props.history.push('planea')} >Planea tu tattoo</button>
					</header>

					<div className='scene' id="scene">
						<img data-depth='1.1' src={require("../assets/logo.png")} className='logo-img' alt="lobito"/>
						<h1 data-depth='0.5'>Rusinky Tattoo </h1>
					</div>
				
				</div>

				<div className="gallery">

					<h1 className="g-title">Galeria de Tattoo</h1>
					<div className="g-grid">
					   {
						   Data.map((img,i)=>{
							   return <Frame src={img.img} key={i} alt='tattoo' />
						   })
					   }
					</div>
				</div>
				<footer>

					<p className='fo-title' >Contactame por:</p>
					<div className="f-solcialContain">

							<a href="#" target="_blank" rel="noopener noreferrer">
								<button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-whatsapp"></i> </button>
							</a>

							<a href="#" target="_blank" rel="noopener noreferrer">
								<button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-facebook"></i></button>
							</a>

							<a href="#" target="_blank" rel="noopener noreferrer">
								<button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-instagram"></i></button>
							</a>
							
							<a href="#" target="_blank" rel="noopener noreferrer">
								<button className="fo-socialButton" id="fo-socialButton"><i className="fas fa-envelope"></i></button>
							</a>
					
					</div>

					<p className='fo-title' >Dejame un correo:</p>

					<br/>
					<form className="fo-form" id="ContactForm" method="POST" name="ContactForm" onSubmit={this.sendForm} >
						
						<div className="sr">
							<textarea name="desc" id="" cols="30" rows="13"
							placeholder="Dí algo por aquí"
							value={this.state.desc}
							onChange={this.handleChange}
							></textarea>
						</div>

						<div className="sf">
							<input type="text" name="name" id="nombre" placeholder="nombre" value={this.state.name} onChange={this.handleChange}/>
							<input type="tel" name="phone" id="phone" placeholder="teléfono" value={this.state.phone} onChange={this.handleChange}/>							
							{/* <input type="email" name="email" id="correo" placeholder="correo" value={this.state.email} onChange={this.handleChange}/>							 */}
							<input type="text" name="asunto" id="asunto" placeholder="asunto" value={this.state.asunto} onChange={this.handleChange}/>
							<button type="submit" onClick={this.sendMail}>Enviar</button>
						</div>
					
					</form>


				</footer>
				<div className="fo-name">
					Rusinsky Tattoo
				</div>
			</div>
		);
	}
}
export default Home