import "./Formulario2.scss"

import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { useState } from 'react'

const Formulario2 = ()=>{
    const { user, setUser } = useContext(UserContext);
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(39.00)

    function restar(){
        if (count > 0) {
            setCount(count - 1)
        }else{
            setCount(0) 
        }
    }

    return (
        <>
            <section id="Formulario2">

                
                <div id="btn-formulario2">
                    <Link to={``} >  </Link>                                 
                </div>
            </section>
        </>
    )
}

export default Formulario2;