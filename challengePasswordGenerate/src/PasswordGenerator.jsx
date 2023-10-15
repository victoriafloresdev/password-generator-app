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

        <div id='box'>

          <div>Caracter lenght</div>

          <div id='checkboxes'>
            <input type="checkbox" name="upperCaseLetters" id="upperCaseLetters" />
            <label htmlFor="upperCaseLetters">Include UpperCase Letters</label>
            <input type="checkbox" name="lowerCaseLetters" id="lowerCaseLetters" />
            <label htmlFor="lowerCaseLetters">Include LowerCase Letters</label>
            <input type="checkbox" name="numbers" id="numbers" />
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" name="symbols" id="symbols" />
            <label htmlFor="symbols">Include Symbols Letters</label>
          </div>

          <div id='strength'>Strength</div>

          <div id="div-generator">
             <button id='generate' onClick={generatePassword}>Generate Password</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default PasswordGenerator

