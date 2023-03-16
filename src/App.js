import { useState } from 'react';
import jpIMG from './assets/jp.svg'

import './style.css'

function App() {
  const[email, setEmail] = useState("")
  const[password, setPassoword] = useState("")

  return (
    <div className="container">
      <div className="container-login">    
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo</span>
            <span className="login-form-title">
              <img src={jpIMG} alt="Jovem Programador"/>
              </span>

                <div className="wrap-input">
                 <input
                  className={email !== "" ? 'has-val input' : 'input'} 
                  type="email" 
                  value={email}
                  onChange={ e => setEmail(e.target.value)}
                  />
                 <span className="focus-input" data-placeholder="Email"></span>
                  </div>

                  <div className="wrap-input">
                 <input
                  className={password !== "" ? 'has-val input' : 'input'}
                  type="password"
                  value={password}
                  onChange={ e => setPassoword(e.target.value)}
                  />
                 <span className="focus-input" data-placeholder="Password"></span>
                  </div>

                  <div className="container-login-form-btn">
                    <button className="login-form-btn">login</button>
                  </div>

                  <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <a className="txt2" href="#">Criar Conta.</a>
                  </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
