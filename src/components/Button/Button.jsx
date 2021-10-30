import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div>
            <a href={props.link} style={{ textDecoration: 'none'}}target="_blank"><button className="c_btn" >{props.value}</button></a>
            
        </div>
    )
}

export default Button
