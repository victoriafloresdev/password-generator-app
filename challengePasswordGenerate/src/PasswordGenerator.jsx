import { useState } from 'react'
import './PasswordGenerator.css'

function PasswordGenerator() {
  const [password, setPassword] = useState("P4$5W0rD!");

  function generatePassword() {
    // Lógica para gerar uma senha
    const newPassword = "NovaSenhaAqui"; // Substituir pela lógica de geração de senha
    setPassword(newPassword);
  }

  return (
    <>
      <div className="main-container">

        <h1>Password Generator</h1>

        <input
          type="text"
          id="password-input"
          value={password}
          readOnly
          placeholder={password}
        />


        <div id="password-generator">
           <button onClick={generatePassword}>Generate Password</button>
        </div>
       
      </div>
    </>
  );
}

export default PasswordGenerator

