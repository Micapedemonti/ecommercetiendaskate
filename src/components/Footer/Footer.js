import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer= ()=>{
    return(
        <div className="footer-container">
            <a href= './' className="link-footer ">Ufo Skateshop</a>
            <p className="">
            © Micaela Pedemonti {new Date().getFullYear()}.Todos los derechos reservados
            </p>
        </div>
    )
}
 export default Footer