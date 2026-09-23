import { useState } from 'react';
import FormLivro from './components/FormLivro';
import './App.css';

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");
  const [livros, setLivros] = useState([]);
  const [erros, setErros] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    setTitulo("");
    setAutor("");
    setCategoria("");
    setAnoPublicacao("");
  }

  return (
    <div>
      <FormLivro
        titulo={titulo}
        setTitulo={setTitulo}
        autor={autor}
        setAutor={setAutor}
        categoria={categoria}
        setCategoria={setCategoria}
        anoPublicacao={anoPublicacao}
        setAnoPublicacao={setAnoPublicacao}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App
