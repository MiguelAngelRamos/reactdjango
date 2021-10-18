import React, { useState } from 'react';
import './stylelogin.css';
import { loginApi } from '../../api/auth';


const Login = ({ history }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const [valid, setValid] = useState(true);



  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    if (!email || !password) {
      console.log('todos los campos son obligatorios')
 
      setValid(false);
      return;
    } else {
      console.log('login')
      loginApi({email, password}).then( user=> {
        localStorage.setItem('token', user.access);
    
      }).catch(error => console.log(error))
     
        history.replace('/');
      
    
    }
  
  }
  return (
    <div className="mt-5 wrapper fadeInDown">
      <div>

        <h3 className="card-title">
          <img src="assets/img/login.png" alt="" width="40" />
          Inventory People</h3>
      </div>
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}

        {/* <!-- Icon --> */}
        <div className="fadeIn first">
          <span>Entrar</span>
        </div>

        {/* <!-- Login Form --> */}
        <form onSubmit={onSubmit} onChange={onChange}>
          <div className="formulario-group">
            <input type="text" id="email" className="fadeIn second is-invalid" name="email" placeholder="Correo" />
          </div>

          <div className="formulario-group">
            <input type="password" id="password" className="fadeIn third is-invalid" name="password" placeholder="Contraseña" />
          </div>

          <button type="submit" className="fadeIn fourth">Entrar</button>

        </form>

        {!valid && (
          <div className="alert alert-danger" role="alert">
            Todos los campos son Obligatorios
          </div>
        )}

      </div>
    </div>
    // 
  )
}

export default Login
