import React, {useState} from 'react';
import './Formulario.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = ({orden}) => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					tel:''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
					// Validacion telefono
					if(!valores.tel){
						errores.tel = 'Por favor ingresa un numero de telefono'
					} else if(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(valores.tel)){
						errores.tel = 'Solo puede contener numeros'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 100000);
				}}
			>
				{( {errors} ) => (
					<div className='formContainer'>
					<Form className="formulario">
						<div className='formOrden'>
							{/* <h1>SU NUMERO DE ORDEN ES:</h1>
							<h2>{orden}</h2> */}
							<label htmlFor="nombre">Nombres y Apellidos</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Ingrese un nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="tel">Numero</label>
							<Field
								type="text" 
								id="tel" 
								name="tel" 
								placeholder="1234" 
							/>
							<ErrorMessage name="tel" component={() => (<div className="error">{errors.tel}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
						
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">ORDEN CONFIRMADA!
						<h1>SU CODIGO DE COMPRA ES:</h1>
							<h2>{orden}</h2></p>
						}
					</Form>
					</div>
				)}
			</Formik>
		</>
	);
}
 
export default Formulario;
