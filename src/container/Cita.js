import React, {Component} from 'react';
import moment from "moment";
import BigCalendar from "react-big-calendar";
import firebase from "firebase";
import {Modal, Button, Form, Input} from "semantic-ui-react";

import 'moment/locale/es'

// Css
import "../CSS/Cita.css"
import "../CSS/react-big-calendar.css"

const localizer = BigCalendar.momentLocalizer(moment)

class Cita extends Component {

	state = {
		openM: false,
		events: [
			{
				id: 2,
				title: 'Nadaaa2',
				allDay: false,
				// start: "Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)",
				// end: "Sat Aug 10 2018 06:30:00 GMT-0400 (Venezuela Time)",
				// start: moment("Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)").toDate(),
				// end: new Date(2018, 7, 10, 8, 10, 0),
				start: moment("9/13/2018, 12:00:00 AM").toDate(),
				end: moment("9/13/2018, 12:40:00 AM").toDate(),
			},
		],
		timeStart:"", 
		timeEnd: "",

		fname: "",
		lname: "",
		
		formDisable: false,
	}

	componentDidMount(){
		this.getList()
	}

	modelOpen = () => this.setState({ openM: true })

	modelClose = () => this.setState({ openM: false })

	createList = () => {
		const newList = firebase.database().ref("Citas")
		
		newList.push({
			title: document.querySelector("#Titulo").value,
			nombre: document.querySelector("#Nombre").value,
			apellido: document.querySelector("#Apellido").value,
			start: this.state.timeStart,
			end: this.state.timeEnd,
		})

		this.modelClose()
	}

	getList = () => {
		var lists = firebase.database().ref("Citas");

		lists.on('child_added', snapshot => {

			var value = snapshot.val();

			console.log(moment(value.end).minutes(30).toDate())

			this.state.events.push({
				title: value.title,
				nombre: value.nombre,
				apellido: value.apellido,
				start: moment(value.start).toDate(),
				end: moment(value.end).hour(2).minutes(30).toDate(),
			})

		})
	}

	render(){
		return(
			<div className="cita-tattoo">

				<Modal open={this.state.openM}>
					<Modal.Content>
						<h1>Formulario</h1>

						<Form>
							<Form.Field control={Input} id="Titulo" label="Título de actividad" 
							placeholder="Escribe aquí"/>

							<Form.Group widths="equal">
								<Form.Field control={Input} id="Nombre" label="Nombre" placeholder="Nombre"/>
								<Form.Field control={Input} id="Apellido" label="Apellido" placeholder="Apellido"/>
							</Form.Group>

							{/* <Form.Checkbox label="¿Todo el día?" defaultChecked /> */}
							
							<Form.Group widths="equal">
								<Form.Field control={Input} disabled={this.state.formDisable} 
								label="timeStart" placeholder="Inicio" 
								value={this.state.timeStart}/>
								
								<Form.Field control={Input} disabled={this.state.formDisable} 
								label="timeEnd" placeholder="Fin"
								value={this.state.timeEnd}/>
							</Form.Group>

							<Button onClick={this.createList} color='green'>Guardar</Button>
							<Button onClick={this.modelClose}>cerrar</Button>
						
						</Form>

					</Modal.Content>
				</Modal>

				<Button onClick={this.getList}>GetList</Button>

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

				selectable={true}
				longPressThreshold={80}
				culture='es'

				onSelectEvent={cita => {
					alert(`
					${cita.title}
					${cita.start}
					${cita.end}
					`)
				}}

				onSelectSlot={slot => {
					if(slot.action === "click" || slot.action === "select"){
						this.modelOpen()
						
						this.setState({
							//fname: document.querySelector("#Nombre").value,
							//lname: document.querySelector("#Apellido").value,
							timeStart: slot.start.toLocaleString(),
							timeEnd: slot.end.toLocaleString()
						})

					}
				}}
				/>

			</div>
		);
	}
}

export default Cita;