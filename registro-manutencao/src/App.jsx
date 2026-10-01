import { useState } from 'react';
import FormManutencao from './components/FormManutencao';
import NavBar from './components/NavBar'
import TabelaManutencoes from './components/TabelaManutencoes';

function App() {
  const [equipamento, setEquipamento] = useState("");
  const [tipoManutencao, setTipoManutencao] = useState("");
  const [tecnicoResponsavel, setTecnicoResponsavel] = useState("");
  const [descricao, setDescricao] = useState("");
  const [manutencoes, setManutencoes] = useState([]);
  const [erros, setErros] = useState({});
  const [abaAtiva, setAbaAtiva] = useState("registro");

  function handleSubmit(event) {
    event.preventDefault();

    const erros = validar();

    if (Object.keys(erros).length > 0) {
      return;
    }

    setManutencoes([
      ...manutencoes, 
      {
        "equipamento": equipamento,
        "tipoManutencao": tipoManutencao,
        "tecnicoResponsavel": tecnicoResponsavel,
        "descricao": descricao
      }
    ]);

    setEquipamento("");
    setTipoManutencao("");
    setTecnicoResponsavel("");
    setDescricao("");
  }

  function validar() {
    const erros = {};

    if (equipamento.length < 3) {
      erros.equipamento = "Equipamento deve ter pelo menos 3 caracteres";
    }

    if (!tipoManutencao) {
      erros.tipoManutencao = "É preciso escolher um tipo de manutenção";
    }

    if (tecnicoResponsavel.length < 3) {
      erros.tecnicoResponsavel = "Responsável técnico deve ter pelo menos 3 caracteres";
    }

    if (descricao.length < 10) {
      erros.descricao = "Descrição deve ter pelo menos 10 caracteres";
    }

    setErros(erros);

    return erros;
  }

  return (
    <div>

      <NavBar
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
      />

      {abaAtiva === "registro" && (
        <div>

          <FormManutencao
          equipamento={equipamento}
          setEquipamento={setEquipamento}
          tipoManutencao={tipoManutencao}
          setTipoManutencao={setTipoManutencao}
          tecnicoResponsavel={tecnicoResponsavel}
          setTecnicoResponsavel={setTecnicoResponsavel}
          descricao={descricao}
          setDescricao={setDescricao}
          handleSubmit={handleSubmit}
          erros={erros}
          />

          <h2>Manutenções cadastradas</h2>

          <div className="table-responsive">
            <table className="table table-striped align-middle">

                <thead>
                  <tr>
                    <th>Equipamento</th>
                    <th>Tipo de manutenção</th>
                  </tr>
                </thead>

                <tbody>
                  {manutencoes.map((manutencao, index) => (
                    <tr key={index}>
                      <td>{manutencao.equipamento}</td>
                      <td>{manutencao.tipoManutencao}</td>
                    </tr>
                  ))}
                </tbody>
  
            </table>
          </div>

        </div>
      )}

      {abaAtiva === "historico" && (
        <div>

          <h2>Histórico de manutenções</h2>

          <TabelaManutencoes manutencoes={manutencoes} />

        </div>
      )}
    </div>
  );
}

export default App
