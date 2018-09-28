import React, {Component} from 'react';
import moment from "moment";
import BigCalendar from "react-big-calendar";
import firebase from "firebase";
import {Modal, Button, Form, Input, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";

import 'moment/locale/es'

// Css
import "../CSS/Cita.css"
import "../CSS/react-big-calendar.css"

const localizer = BigCalendar.momentLocalizer(moment)

class Cita extends Component {

	state = {
		openM: false,
		openM2: false,
		events: [
			{
				id: 2,
				title: 'Simon Perez',
				allDay: false,
				// Se puede usar este tipo de dato para el calendar
				
				// start: "Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)",
				// end: "Sat Aug 10 2018 06:30:00 GMT-0400 (Venezuela Time)",

				// start: moment("Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)").toDate(),
				// end: new Date(2018, 7, 10, 8, 10, 0),
				
				start: moment("9/1/2018, 12:00:00 AM").toDate(),
				end: moment("9/2/2018, 12:40:00 AM").toDate(),
			},
		],
		timeStart:"", 
		timeEnd: "",
		citaR: {},
		hello: "",
		formDisable: false,
	}
	
	componentDidMount(){
		this.getList()
	}

	modelOpen = () => this.setState({ openM: true })
	modelOpenR = () => this.setState({ openM2: true })
	modelClose = () => this.setState({ openM: false })
	modelCloseR = () => this.setState({ openM2: false })

	// Crear list de citas
	createList = () => {
		const refList = firebase.database().ref("Citas")
		
		refList.push({
			title: `${document.querySelector("#Nombre").value} ${document.querySelector("#Apellido").value}`,
			desc: document.querySelector("#Desc").value,
			start: this.state.timeStart,
			end: this.state.timeEnd,
		})

		this.modelClose()
	}

	// Borrar la list de citas
	removeList = (item) => {
		let db = firebase.database();
		let list = firebase.database().ref("Citas").orderByKey();
		list.once("value")
			.then( snapshot => {
				snapshot.forEach(cSnapshot => {
					let pkey = cSnapshot.key;
					let cval = cSnapshot.val()

					let iStart = moment(item.start).format('M/DD/YYYY, hh:mm:ss A');
					let iEnd = moment(item.end).format('M/DD/YYYY, hh:mm:ss A');
					
					if (cval.start == iStart && cval.end == iEnd){
						let cdb = db.ref("Citas/"+pkey).key
						db.ref("Citas/"+cdb).remove()
					}
				})
			})

		let listR = firebase.database().ref("Citas");
		listR.on("child_removed", snapshot => {
			alert("Se ha eleminado la cita ;-)")
		})
	}

	// obtener la list de citas
	getList = () => {
		let lists = firebase.database().ref("Citas");
		lists.on('child_added', snapshot => {
			let value = snapshot.val();

			this.state.events.push({
				title: value.title,
				desc: value.desc,
				start: moment(value.start).toDate(),
				end: moment(value.end).toDate(),
			})

			this.forceUpdate()
		})
	}

	render(){
		return(
			<div className="cita-tattoo">

				<Modal open={this.state.openM}>
					<Modal.Content>
						<h1>Formulario</h1>

						<Form>
							<Form.Group widths="equal">
								<Form.Field control={Input} id="Nombre" label="Nombre" placeholder="Nombre"/>
								<Form.Field control={Input} id="Apellido" label="Apellido" placeholder="Apellido"/>
							</Form.Group>

							<Form.Group widths="equal">
								<Form.Field control={Input} disabled={this.state.formDisable} 
								label="timeStart" placeholder="Inicio" 
								value={this.state.timeStart}/>
								
								<Form.Field control={Input} disabled={this.state.formDisable} 
								label="timeEnd" placeholder="Fin"
								value={this.state.timeEnd}/>
							</Form.Group>

							<Form.Field control={TextArea} label="Descripción" id="Desc"
							placeholder="escribe el mensaje que quieres dejar"/>
							
							<Form.Checkbox label="¿Todo el día?" defaultChecked />

							<Button onClick={this.createList} color='green'>Guardar</Button>
							<Button onClick={this.modelClose} color='red'>cerrar</Button>
						
						</Form>

					</Modal.Content>
				</Modal>

				<Modal open={this.state.openM2}>
					<Modal.Content>
						<h1>¿Desea borrar esta cita?</h1>
						
						<Button onClick={() => {this.removeList(this.state.citaR)}} color='red'>Borrar</Button>
						<Button onClick={this.modelCloseR}>Cancelar</Button>

					</Modal.Content>
				</Modal>


				<Link to="/" className="btnBack">
					<Button>
						Volver
					</Button>
				</Link>

				<h1>Agendar Cita</h1>

				<BigCalendar
				localizer={localizer}
				events={this.state.events}
				messages={{
					allDay:"",
					month:"Mes",
					week:"Semana",
					day:"Día",
					
					previous:"<",
					today:"Hoy",
					next:">"
				}}

				/*
				*/
				min={moment('10:00am', 'h:mma').toDate()}
				max={moment('8:00pm', 'h:mma').toDate()}


				selectable={true}
				longPressThreshold={80}
				culture='es'

				onSelectEvent={cita => {
					return (
						this.setState(()=>({ 
							citaR: cita
						}), 
						() => this.modelOpenR(),
						/* 
						() => this.removeList(this.state.citaR),
						() => console.log("Hellooo") 
						*/
						)
					)
				}}

				onSelectSlot={slot => {
					if(slot.action === "click" || slot.action === "select"){
						this.modelOpen()
						
						this.setState({
							timeStart: slot.start.toLocaleString(),
							timeEnd: moment(slot.end.toLocaleString())
								.add(1, "h").add(30, "m")
								.format('M/DD/YYYY, hh:mm:ss A')
						})

						console.log(this.state.timeEnd)

					}
				}}
				/>

			</div>
		);
	}
}

export default Cita;