import React from 'react';

//rfc y enter o tab genero el codigo
//agrego los parametros de los huks
const Formulario = ({ empleado, setEmpleado }) => {
    //creo el metodo que me permitira cambiar de estado 
    const manejar_cambio = obj => {
        setEmpleado({
            // los tres puntos me sirve para asignar el valor de entrada a cada una de las entidades
            ...empleado,
            //en esta parte capturo las entidades y asigno el valor de la entrada
            [obj.target.name]: obj.target.value

        })

    }
    const manejar_envio = () => {
        //validaciones de datos de entrada
        if ((empleado.cedula) === '' || (empleado.nombres) === '' || (empleado.apellidos) === '' || (empleado.telefono) === '' || (empleado.email) === '' || (empleado.ciudad) === '') {
            return alert("Todos los campos son obligatorios")

        }
        //se va ha realizar la consulta        
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empleado)
        }
        fetch('http://localhost:5000/empleados', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <form onSubmit={manejar_envio}>
            {/*agregamos una clase de bootstrap*/}
            <div className='mb-3'>
                <label htmlFor='cedula' className='form-label'>Cédula</label>
                <input name='cedula' onChange={manejar_cambio} type='text' id='cedula' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='nombres' className='form-label'>Nombres</label>
                <input name='nombres' type='text' onChange={manejar_cambio} id='nombres' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='apellidos' className='form-label'>Apellidos</label>
                <input name='apellidos' type='text' onChange={manejar_cambio} id='apellidos' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='telefono' className='form-label'>Telefono</label>
                <input name='telefono' type='text' onChange={manejar_cambio} id='telefono' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input name='email' type='text' onChange={manejar_cambio} id='email' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='ciudad' className='form-label'>Ciudad</label>
                <input name='ciudad' type='text' onChange={manejar_cambio} id='ciudad' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}
export default Formulario;
