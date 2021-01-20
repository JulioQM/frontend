//vamos usar los huks "useState"
import React, { Fragment, useState, useEffect } from 'react';
//importamos nuestras clases
import Navbar from './Components/Navbar'
import EmpleadoList from './Components/EmpleadoList'
import Formulario from './Components/Formulario'

function App() {
  //-----------------------------GET-------------------------------//
  //Llamamos a los huks para que me permita inicializar mi lista,ademas se aprecian los Estados de los objetos o entidad
  const [empleados, setEmpleados] = useState([]);
  // huck que me permitira refrescar la lista
  const [listaRefresh, setListaRefresh] = useState(false);



  //Obtenemos la lista de los empleados  ,metodo GET
  useEffect(() => {
    const getEmpleados = () => {
      //Captamos los datos de la URL de la API
      fetch('http://localhost:5000/empleados')
        .then(res => res.json())
        /*imprimos en consola los valores de la API
        .then(res=> console.log(res))*/
        .then(res => setEmpleados(res))
    }
    getEmpleados()
    //en este apartado va actualizar la lista [] de empleados,cada vez que aga cualquier CRUD 
    setListaRefresh(false)
  }, [listaRefresh]);
  
//-----------------------------POST-------------------------------//
  //Este hub para agregar empleados
  const [empleado, setEmpleado] = useState({
    cedula: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: ''
  });

  
  //-----------------------------DELETE-------------------------------//
  

  // En este apartado muestra la pagina HTML
  return (
    <Fragment>
      <Navbar brand='fronted app' />
      {/* creamos un contenedor , ademas usamos algunos paquetes del bootstrap*/}
      <div className='container'>
        {/* creamos unas filas para la informacion*/}
        <div className='row'>

          <div className='col'>
            <h2 style={{ textAlign: 'center' }}>Registro de Empleados</h2>
            {/* agregamos mi estado o objeto*/}
            <Formulario empleado={empleado} setEmpleado={setEmpleado} />
          </div>

          {/* En esta parte damos a conocer el numero de columnas deseo que aparezca*/}
          <div className='col-8'>
            {/*agregamos un titulo y lo centramos*/}
            {/*la primera llave es para indicar es codigo de javascrip y el segundo para los objetos*/}

            <h2 style={{ textAlign: 'center' }}>Listado de Empleados</h2>
            {/* agregamos mi estado o objeto*/}
            <EmpleadoList empleado={empleado} setEmpleado={setEmpleado}  empleados={empleados} setListaRefresh={setListaRefresh}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
