import React from "react";
import TypeWriter from "react-typewriter";
import Swal from "sweetalert2";

import "./styles.css";

function App() {

  const handleEmail = e => {
    e.preventDefault();
    Swal.fire({
      html: '<span className="alert"> Meu Email: gabriel.nbds@gmail.com </span>'
    })
  }

  return (
    <div className="container">
      <div className="json">
        <span className="pink">let</span> gabriel_nascimento{" "}
        <span className="pink"> = </span> {"{"} <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Nome": </span>{" "}
          <span className="yellow"> "Gabriel Nascimento Barbosa de Souza"</span>,
        </TypeWriter>
        <br/>
        <TypeWriter typing={1}>
          <span className="pink mgl">"Funcao": </span>{" "}
          <span className="yellow"> "Desenvolvedor FullStack Javascript (FrontEnd / Backend)"</span>,
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Idade": </span>{" "}
          <span className="purple"> 18</span>,
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Contato": </span> [ 
          <a href="https://github.com/GabrielNBDS" target="_blank" className="yellow" rel="noopener noreferrer">GitHub</a>, {" "}
          <a href="https://www.linkedin.com/in/gabrielnbds/" target="_blank" className="yellow" rel="noopener noreferrer">LinkedIn</a>, {" "}
          <a href="#" title="gabriel.nbds@gmail.com" onClick={handleEmail} title="gabriel.nbds@gmail.com" className="yellow" rel="noopener noreferrer">Email</a>],
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Habilidades": </span> [
          <span className="yellow">HTML</span>,
          <span className="yellow"> CSS</span>,
          <span className="yellow"> SASS</span>,
          <span className="yellow"> Javascript</span>],
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Stack": </span> [
          <span className="yellow">ReactJS</span>,
          <span className="yellow"> ReactNative</span>,  
          <span className="yellow"> NodeJS</span>],
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Banco_de_dados": </span> [
          <span className="yellow">MongoDB</span>, 
          <span className="yellow"> PostgreSQL</span>],
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Formacao": </span>{" "}
          <span className="yellow"> "Técnico em informática IFMT"</span>,
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Possibilidade_de_mudanca": </span>{" "}
          <span className="yellow"> "Total, só que por causa do COVID pode haver complicações"</span>,
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Experiencia": </span>{" "}
          <span className="yellow"> "Ainda não tenho experiência, procuro meu primeiro emprego!"</span>,
        </TypeWriter>
        <br />
        <TypeWriter typing={1}>
          <span className="pink mgl">"Procuro": </span>{" "}
          <span className="yellow"> "Um lugar que me de chances de me aprimorar profissionalmente"</span>,
        </TypeWriter>
        <br />{"};"}
      </div>

    </div>
    
  
  );
}

export default App;
