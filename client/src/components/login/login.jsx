import React from "react";
import { NavLink} from "react-router-dom"
import './login.css'

export default function Login () {
let [input,setInput] = React.useState ({txtLogin:"", txtPw1:"", txtPw2:"",actual:"btnLogin"});

    function updateInput(e){
        setInput ((statePrev)=>({...statePrev,[e.target.className]:e.target.value}));
        
        if (e.target.className==="txtLogin"){
            if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value)) {
                document.getElementById ("lblLogin").innerText = "Correo correcto";
                document.getElementById ("lblLogin").className = "true";
            }
            else{
                document.getElementById ("lblLogin").innerText = "Correo electronico incorrecto";
                document.getElementById ("lblLogin").className = "false";
            }
        }
        else if (e.target.className==="txtPw1"){
            if (/^([0-9])*$/.test(e.target.value)&&e.target.value.length===4) {                
                if (e.target.value === input.txtPw2){
                    document.getElementById ("lblPw1").innerText = "Clave correcta";
                    document.getElementById ("lblPw1").className = "true";
                    document.getElementById ("lblPw2").innerText = "Clave correcta";
                    document.getElementById ("lblPw2").className = "true";
                }
                else{document.getElementById ("lblPw1").innerText = "Clave correcta";
                     document.getElementById ("lblPw1").className = "true";
                     if (input.actual === "btnRegistro"){
                        document.getElementById ("lblPw2").innerText = "Las dos claves no coinciden";
                        document.getElementById ("lblPw2").className = "false"; 
                     }                                                          
                }   
            }
            else{
                document.getElementById ("lblPw1").innerText = "Ingrese número de 4 dígitos";
                document.getElementById ("lblPw1").className = "false";
            }
        }
        else if (e.target.className==="txtPw2"){
            if (/^([0-9])*$/.test(e.target.value)&&e.target.value.length===4) {
                if (e.target.value === input.txtPw1){
                    document.getElementById ("lblPw2").innerText = "Clave correcta";
                    document.getElementById ("lblPw2").className = "true";
                }
                else{
                    document.getElementById ("lblPw2").innerText = "Las dos claves no coinciden";
                    document.getElementById ("lblPw2").className = "false";                    
                }   
            }
            else{
                document.getElementById ("lblPw2").innerText = "Ingrese número de 4 dígitos";
                document.getElementById ("lblPw2").className = "false";
            }
        }
        if (input.actual ==="btnLogin"){
            if (document.getElementById ("lblLogin").innerText==="Correo correcto"&& document.getElementById ("lblPw1").innerText === "Clave correcta"){
                document.getElementById ("btnAceptar").className = "btnAceptarTrue";
            }
            else {
                document.getElementById ("btnAceptar").className  = "btnAceptarFalse";
            }

        }
        else {
            if (document.getElementById ("lblLogin").innerText==="Correo correcto"&& document.getElementById ("lblPw1").innerText === "Clave correcta"&& document.getElementById ("lblPw2").innerText === "Clave correcta"){
                document.getElementById ("btnAceptar").className = "btnAceptarTrue";
            }
            else {
                document.getElementById ("btnAceptar").className  = "btnAceptarFalse";
            }
        }   
        
        

    
    }
    function clicBtnAceptar (e){        
        e.preventDefault();
        if (document.getElementById ("btnAceptar").className === "btnAceptarTrue"&&input.actual ==="btnLogin"){
            window.location.href = "/home";
        }
        else if (document.getElementById ("btnAceptar").className === "btnAceptarTrue"){
            setInput ((prev)=>({...prev,txtLogin:"",txtPw1:"",txtPw2:"",actual:"Autenticar"}));
            document.getElementById("LblAcceso").innerText = "Autenticar";
            let txtLogin = document.getElementById ("lblLogin");
            let txtPw1 = document.getElementById ("lblPw1");
            let txtPw2 = document.getElementById ("lblPw2");
            let btnAceptar = document.getElementById ("btnAceptar");
            txtLogin.className="false";
            txtPw1.className="false";
            txtPw2.className="false";
            txtLogin.innerText="Correo electronico incorrecto";
            txtPw1.innerText="Ingrese número de 4 dígitos";
            txtPw2.innerText="Ingrese número de 4 dígitos";        
            btnAceptar.className = "btnAceptarFalse";            
        }
    }
    function roll(e){
        let LblAcceso = document.getElementById("LblAcceso");
        setInput((prev)=>({...prev,actual:e.target.className}));
        e.target.className === "btnLogin"? LblAcceso.innerText = "Autenticar":LblAcceso.innerText = "Registrarse";
    }                                           
    return(
        <React.Fragment>
            <div className="contLogin">
                <div className="login">
                    <h1 className ="lblTitle" >RECETAS HENRY FOOD PI</h1>
                    <form className="formLogin" onSubmit={(e)=>{clicBtnAceptar (e);}}>
                        <h2 id="LblAcceso">Autenticar</h2>        
                        <input  type="text" className="txtLogin" value={input.txtLogin} placeholder = "Correo electronico" onChange={(e)=>updateInput(e)} />
                        <label  className="false" id="lblLogin">Correo electronico incorrecto</label><br />
                        <input  type="text" className="txtPw1" value={input.txtPw1} placeholder = "Nueva clave"  onChange={(e)=>updateInput(e)}/>
                        <label  className="false" id="lblPw1">Ingrese número de 4 digitos</label><br />                        
                        {
                        input.actual === "btnRegistro"? 
                        <><input  type="text" className="txtPw2" value={input.txtPw2} placeholder = "Confirme clave" onChange={(e)=>updateInput(e)}/>
                        <label  className="false" id="lblPw2">Ingrese número de 4 digitos</label></>:null
                        }
                        <div>
                            <input id="btnAceptar" className="btnAceptarFalse" type="submit" value="Aceptar"></input>
                        </div>                                        
                    </form>
                    <div className="contParrafo">
                        "No lo piense más,
                        ¡Ingresa ya!.
                    </div>
                    <button className="btnLogin" onClick={(e)=>{roll(e)}}>- Autenticar</button>
                    <button className="btnRegistro" onClick={(e)=>{roll(e)}}>- Registrarse</button>
                    <NavLink className="btnDirecto" to="/home" >Ingresar sin registro</NavLink>
                </div>
                <div className="contParrafo1">
                "Puedo aceptar el fracaso, todos fracasan. Pero no puedo rendirme y dejar de jugar.".
                </div> 
                <p className="contParrafo2">
                      Michael Jordan.
                </p>
            </div>                     
        </React.Fragment>
    )    
}