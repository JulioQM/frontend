import React from 'react';
// en esta parte agrego el objeto que voy a iterar
const EmpleadoList = ({ empleado ,setEmpleado,empleados, setListaRefresh}) => {

    const manejar_delete = cedula => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:5000/empleados/' + cedula, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))            
        setListaRefresh(true)

    }
    const manejar_update = cedula => {
        //validaciones de datos de entrada
        if ((empleado.cedula) === '' || (empleado.nombres) === '' || (empleado.apellidos) === '' || (empleado.telefono) === '' || (empleado.email) === '' || (empleado.ciudad) === '') {
            return alert("Todos los campos son obligatorios")
        }
        //se va ha realizar la consulta        
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empleado)
        }
        fetch('http://localhost:5000/empleados/'+cedula, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))           

        setListaRefresh(true)
    }
    
    return (
        <table className='table' style={{ width: 100 }}>
            <thead>
                <tr>
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Ciudad</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {/* realizamos un tipo forEach en este caso usamos map */}
                {/* se comunica por el estado o objeto*/}
                {empleados.map(empleado => (
                    <tr key={empleado.cedula}>
                        <td>{empleado.cedula}</td>
                        <td>{empleado.nombres}</td>
                        <td>{empleado.apellidos}</td>
                        <td>{empleado.telefono}</td>
                        <td>{empleado.email}</td>
                        <td>{empleado.ciudad}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => manejar_delete(empleado.cedula)} style={{width:100}} className='btn btn-danger'>Delete</button>

                            </div>

                            <div className='mb-3'>
                                <button onClick={() => manejar_update(empleado.cedula)} style={{width:100}} className='btn btn-dark'>Update</button>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
//Exporto la lista
export default EmpleadoList;