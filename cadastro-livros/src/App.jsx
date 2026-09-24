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

    const erros = validar();

    if (Object.keys(erros).length > 0) {
      return;
    }

    setLivros([
      ...livros, 
      {
        "titulo": titulo,
        "autor": autor,
        "categoria": categoria,
        "anoPublicacao": anoPublicacao
      }
    ]);

    setTitulo("");
    setAutor("");
    setCategoria("");
    setAnoPublicacao("");
  }

  function validar() {
    const erros = {};
    const dataAtual = new Date();

    if (titulo.length < 3) {
      erros.titulo = "Título deve ter pelo menos 3 caracteres";
    }

    if (autor.length < 3) {
      erros.autor = "Autor deve ter pelo menos 3 caracteres";
    }

    if (!categoria) {
      erros.categoria = "É preciso escolher uma categoria";
    }

    if (!anoPublicacao) {
      erros.anoPublicacao = "Ano não pode ser vazio";
    } else if (anoPublicacao <= 1900) {
      erros.anoPublicacao = "Ano deve ser maior que 1900";
    } else if (anoPublicacao > dataAtual.getFullYear()) {
      erros.anoPublicacao = "Ano não pode ser maior que o ano atual";
    }

    setErros(erros);

    return erros;
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
        erros={erros}
      />

      <h2>Livros Cadastrados</h2>

      <div className="table-responsive">
        <table className="table table-striped align-middle">

            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
              </tr>
            </thead>

            <tbody>
              {livros.map((livro, index) => (
                <tr key={index}>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                </tr>
              ))}
            </tbody>

        </table>
      </div>

    </div>

  );
}

export default App;
