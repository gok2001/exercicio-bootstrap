import { useState } from 'react';
import FormManutencao from './components/FormManutencao';
import NavBar from './components/NavBar'
import TabelaManutencoes from './components/TabelaManutencoes';

function App() {
  const [equipamento, setEquipamento] = useState("");
  const [tipoManutencao, setTipoManutencao] = useState("");
  const [responsavelTecnico, setResponsavelTecnico] = useState("");
  const [descricao, setDescricao] = useState("");
  const [manutencoes, setManutencoes] = useState([]);
  const [erros, setErros] = useState({});
  const [abaAtiva, setAbaAtiva] = useState("registro");

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
          responsavelTecnico={responsavelTecnico}
          setResponsavelTecnico={setResponsavelTecnico}
          descricao={descricao}
          setDescricao={setDescricao}
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
