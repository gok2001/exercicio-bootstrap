import { useState } from 'react';
import FormManutencao from './components/FormManutencao';

function App() {
  const [equipamento, setEquipamento] = useState("");
  const [tipoManutencao, setTipoManutencao] = useState("");
  const [responsavelTecnico, setResponsavelTecnico] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
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
  );
}

export default App
