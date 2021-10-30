import React,{useEffect} from 'react'
import './Configuracion.css'
import Cookies from 'universal-cookie'
import Barra from '../../components/Barra/Barra'
const Configuracion = (props) => {
    const cookie =new Cookies();
    useEffect(()=>{
        if(!cookie.get('user')){
            props.history.push('/');
        }
    })
    return (
        <div>
            <Barra  />
        <div className="CBack">
            
            <h1>Pagina no disponible</h1>
        </div>
        </div>
    )
}

export default Configuracion
