export default function FormManutencao({ 
    equipamento,
    setEquipamento,
    tipoManutencao,
    setTipoManutencao,
    responsavelTecnico,
    setResponsavelTecnico,
    descricao,
    setDescricao,
    handleSubmit,
    erros
}) {
    return (
        <form className="form-manutencao" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="equipamento">Equipamento</label>
                    <input
                        id="equipamento"
                        type="text"
                        name="equipamento"
                        value={equipamento}
                        onChange={(event) => setEquipamento(event.target.value)}
                        className={erros.equipamento ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.equipamento}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="tipo-manutencao">Tipo de manutenção</label>
                    <select
                        id="tipo-manutencao"
                        type="text"
                        name="tipo-manutencao"
                        value={tipoManutencao}
                        onChange={(event) => setTipoManutencao(event.target.value)}
                        className={erros.tipoManutencao ? "form-control is-invalid" : "form-control"}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="preventiva">Preventiva</option>
                        <option value="corretiva">Corretiva</option>
                        <option value="preditiva">Preditiva</option>
                    </select>
                    <div className="invalid-feedback">
                        {erros.tipoManutencao}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="responsavel-tecnico">Responsável técnico</label>
                    <input
                        id="responsavel-tecnico"
                        type="text"
                        name="responsavel-tecnico"
                        value={responsavelTecnico}
                        onChange={(event) => setResponsavelTecnico(event.target.value)}
                        className={erros.responsavelTecnico ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.responsavelTecnico}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="descricao">Descrição do problema/serviço</label>
                    <textarea
                        id="descricao"
                        type="text"
                        name="descricao"
                        value={descricao}
                        onChange={(event) => setDescricao(event.target.value)}
                        className={erros.descricao ? "form-control is-invalid" : "form-control"}
                    >
                    </textarea>
                    <div className="invalid-feedback">
                        {erros.descricao}
                    </div>
                </div>

                <button type="submit">Cadastrar Manutenção</button>
            </div>
        </form>
    );
}