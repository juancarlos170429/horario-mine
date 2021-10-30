import React ,{useEffect}from 'react'

import {usuario} from '../../views/Horario/Datos'
import './login.css'
import Cookies from 'universal-cookie/es6'
const Login = (props) => {
    const cookies=new Cookies()
    const login=()=>{
        if(usuario[0].user==="170429" && usuario[0].password==="73880073"){
            cookies.set('user',usuario[0].user)
            cookies.set('password',usuario[0].password)
            props.history.push('/Horario');
        }
        else{
            alert("error")
        }
    }
    useEffect(()=>{
        if(cookies.get('user')){
            props.history.push('/');
        }
    })
    return (
        <div className="login">
            <div className="card">
                <img className="img1"src="./a.png" alt="" />
                <div className="partLogin">
                    <img className="imgPro" src="./profile.png" alt="" />
                    <input className="inputLogin" type="text" placeholder="usuario"/>
                    <input className="inputLogin" type="password" placeholder="password"/>
                    <button className="btnLogin" onClick={login}>ingresar</button>
                </div>
            </div>
        </div>
    )
}
export default Login
