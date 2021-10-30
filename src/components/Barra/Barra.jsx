import React from 'react'
import {Link} from 'react-router-dom'
import * as ImIcons from "react-icons/im"
import './barra.css'
import Cookies from 'universal-cookie'
const Barra = ({ children }) => {
    const cookie=new Cookies()
    const cerrarSesion=()=>{
        cookie.remove('user',{path:'/'});
        cookie.remove('password',{path:'/'});
        
    }
    return (
        <div>
            <div>
            <input className="chk" type="checkbox"id="check" />
            <div className="barTop">
                <div className="opcBarLeft">
                    <img className="c_logo" src="./log.png" alt="Logo" />
                    <h1>Horarios</h1>
                    <label htmlFor="check">
                        <ImIcons.ImMenu className ="Icon_Menu"/>
                    </label>
                </div>
                
                <div className="opcBarRight">
                    <Link to="/Horario"className="btnBarra" style={{ textDecoration: 'none' }} >Horario</Link>
                    <Link to="configuracion"className="btnBarra" style={{ textDecoration: 'none' }} >Configuracion</Link>
                    <Link to="/" className="btnBarra cerrar" style={{ textDecoration: 'none' }} onClick={()=>cerrarSesion()}>Cerrar Sesion</Link>
                    
                </div>
            </div>
        </div>
            {children}
        </div>
    )
}

export default Barra
