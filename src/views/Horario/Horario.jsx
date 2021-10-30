import React,{useEffect} from 'react'
import './Horario.css'
import Button from '../../components/Button/Button'
import Cookies from 'universal-cookie'
import Barra from '../../components/Barra/Barra'
import {horas,cursosLunes,cursosMartes,cursosMiercoles,cursosJueves,cursosViernes,cursosSabado,meses} from './Datos'
const current = new Date();
const mes=(mes)=>{
    switch (mes) {
        case 1:
            return meses[0]
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            
        case 2:
            return meses[1]
            
        case 3:
            return meses[2]
            
        case 4:
            return meses[3]
            
        case 5:
            return meses[4]
            
        case 6:
            return meses[5]
            
        case 7:
            return meses[6]
            
        case 8:
            return meses[7]
            
        case 9:
            return meses[8]
            
        case 10:
            return meses[9]
            
        case 11:
            return meses[10]
            
        case 12:
            return meses[11]
        default:
            return "error"
        }
}
const dia=(dias)=>{
    switch (dias) {
        case 0:
            return "Domingo"           
        case 1:
            return "Lunes"
            
        case 2:
            return "Martes"
            
        case 3:
            return "Miercoles"
            
        case 4:
            return "Jueves"
            
        case 5:
            return "Viernes"
            
        case 6:
            return "Sabado"
        default:
            return "error"
        }
}
const date = `${dia(current.getUTCDay())} ${current.getDate()} de ${mes(current.getMonth()+1)} del ${current.getFullYear()}`;

const Horario = (props) => {
    const cookie =new Cookies();
    useEffect(()=>{
        if(!cookie.get('user')){
            props.history.push('/');
        }
    })
    return (
        <div>
            <Barra/>
            <div className="Date">{date}</div>
            <div className="cont_horario">
                <div className="Horas">
                    {
                        horas.map((dato)=>(
                            <div className="hora">{dato}</div>
                        ))
                    }
                </div>
                <div className="Lunes">
                    <div className="lblHorario">LUNES</div>
                    {
                        
                        cursosLunes.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
                <div className="Martes">
                <div className="lblHorario">MARTES</div>
                    {
                        
                        cursosMartes.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
                <div className="Miercoles">
                <div className="lblHorario">MIERCOLES</div>
                    {
                        
                        cursosMiercoles.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
                <div className="Jueves">
                <div className="lblHorario">JUEVES</div>
                    {
                        
                        cursosJueves.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
                <div className="Viernes">
                <div className="lblHorario">VIERNES</div>
                    {
                        
                        cursosViernes.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
                <div className="Sabado">
                <div className="lblHorario">SABADO</div>
                    {
                        
                        cursosSabado.map((datos)=>(
                            <Button value={datos.curso} link={datos.link}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Horario
