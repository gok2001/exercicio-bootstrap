import { useState } from 'react';
import FormManutencao from './components/FormManutencao';
import NavBar from '../../cadastro-livros/src/components/NavBar';

function App() {
  const [equipamento, setEquipamento] = useState("");
  const [tipoManutencao, setTipoManutencao] = useState("");
  const [responsavelTecnico, setResponsavelTecnico] = useState("");
  const [descricao, setDescricao] = useState("");
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
          />

        </div>
      )}
    </div>
  );
}

export default App
