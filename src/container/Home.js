import React, {Component} from 'react';
import Parallax from 'parallax-js'
import '../CSS/home.css';

//Components
import Frame from '../components/frame';
import Nav from '../components/nav';

//Data
const Data = [
    {img: require('../assets/tattos/1.jpg')},
    {img: require('../assets/tattos/2.jpg')},
    {img: require('../assets/tattos/3.jpeg')},
    {img: require('../assets/tattos/4.jpeg')},
    {img: require('../assets/tattos/5.jpeg')},
    {img: require('../assets/tattos/6.jpeg')},
    {img: require('../assets/tattos/7.jpeg')},
    {img: require('../assets/tattos/8.jpeg')},
    {img: require('../assets/tattos/9.jpeg')},
    {img: require('../assets/tattos/10.jpeg')},
    {img: require('../assets/tattos/11.jpeg')},
    {img: require('../assets/tattos/12.jpeg')},
    {img: require('../assets/tattos/13.jpeg')},
    {img: require('../assets/tattos/14.jpeg')},
    {img: require('../assets/tattos/15.jpeg')},
    {img: require('../assets/tattos/16.jpeg')},
    {img: require('../assets/tattos/17.jpeg')},
    {img: require('../assets/tattos/18.jpeg')},
    {img: require('../assets/tattos/19.jpeg')},
    {img: require('../assets/tattos/20.jpeg')},
    {img: require('../assets/tattos/21.jpeg')},
    {img: require('../assets/tattos/22.jpeg')},
    {img: require('../assets/tattos/23.jpeg')},
    {img: require('../assets/tattos/24.jpeg')},
    {img: require('../assets/tattos/25.jpeg')},
    {img: require('../assets/tattos/26.jpeg')},
    {img: require('../assets/tattos/27.jpeg')},
    {img: require('../assets/tattos/28.jpeg')},
    {img: require('../assets/tattos/29.jpeg')},
    {img: require('../assets/tattos/30.jpeg')},
    {img: require('../assets/tattos/31.jpeg')},
    {img: require('../assets/tattos/32.jpeg')},
    {img: require('../assets/tattos/33.jpeg')},
    {img: require('../assets/tattos/34.jpeg')},
    {img: require('../assets/tattos/35.jpeg')},
    {img: require('../assets/tattos/36.jpeg')},
    {img: require('../assets/tattos/37.jpeg')},
    {img: require('../assets/tattos/38.jpeg')},
    {img: require('../assets/tattos/39.jpeg')},
    {img: require('../assets/tattos/40.jpeg')},
    {img: require('../assets/tattos/41.jpeg')},
    {img: require('../assets/tattos/42.jpeg')},
    {img: require('../assets/tattos/43.jpeg')}
]

class Home extends Component {

    state={
        nav: false
    }
    
    componentDidMount()
    {

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
                        <img data-depth='1' src={require("../assets/logo.png")} className='logo-img' alt="lobito"/>
                        <h1 data-depth='0.4'>Rusinky Tattoo </h1>
                    </div>
                </div>
                <div className="gallery">
                    <h2 className="g-title">Galeria de Tattoo</h2>
                    <div className="g-grid">
                       {
                           Data.map((img,i)=>{
                               return <Frame src={img.img} key={i} alt='tattoo' />
                           })
                       }
                    </div>
                </div>
                <footer>
                    <p className='fo-title' >Contactame</p>
                    <div className="f-solcialContain">
                            <button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-whatsapp"></i> </button>
                            <button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-facebook"></i></button>
                            <button className="fo-socialButton" id="fo-socialButton"><i className="fab fa-instagram"></i></button>
                            <button className="fo-socialButton" id="fo-socialButton"><i className="fas fa-envelope"></i></button>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Home