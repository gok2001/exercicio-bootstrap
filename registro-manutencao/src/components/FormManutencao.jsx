export default function FormManutencao({ 
    equipamento,
    setEquipamento,
    tipoManutencao,
    setTipoManutencao,
    responsavelTecnico,
    setResponsavelTecnico,
    descricao,
    setDescricao
}) {
    return (
        <form className="form-manutencao">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="equipamento">Equipamento</label>
                    <input
                        id="equipamento"
                        type="text"
                        name="equipamento"
                        value={equipamento}
                        onChange={(event) => setEquipamento(event.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="tipo-manutencao">Tipo de manutenção</label>
                    <select
                        id="tipo-manutencao"
                        type="text"
                        name="tipo-manutencao"
                        value={tipoManutencao}
                        onChange={(event) => setTipoManutencao(event.target.value)}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="preventiva">Preventiva</option>
                        <option value="corretiva">Corretiva</option>
                        <option value="preditiva">Preditiva</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="responsavel-tecnico">Responsável técnico</label>
                    <input
                        id="responsavel-tecnico"
                        type="text"
                        name="responsavel-tecnico"
                        value={responsavelTecnico}
                        onChange={(event) => setResponsavelTecnico(event.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="descricao">Descrição do problema/serviço</label>
                    <textarea
                        id="descricao"
                        type="text"
                        name="descricao"
                        value={descricao}
                        onChange={(event) => setDescricao(event.target.value)}
                    >
                    </textarea>
                </div>
            </div>
        </form>
    );
}