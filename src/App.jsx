import { useState } from 'react'
import axios from 'a  xios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")

function handleBuscar() {

  axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data))
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))

}

// async function buscarDados(usuario){
//   var dados = await fetch(`https://api.github.com/users/${usuario}`).then(Response =>  Response.json());
//   dadosTela(dados);
// }

// function dadosTela(dados){
//   var icon = dados.avatar_url
//   document.getElementById("userIcon").src = icon
// }

  return (
    <>
 
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button onClick={handleBuscar}>Pesquisar</button>

      <div>
        <img src="" alt="Imagem do Usuário" id="userIcon"/>
      </div>
    </>
    
  )
}

export default App
