export default function TabelaManutencoes({ manutencoes }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped align-middle">

                <thead>
                    <tr>
                        <th>Equipamento</th>
                        <th>Tipo de manutenção</th>
                        <th>Técnico responsável</th>
                        <th>Descrição</th>
                    </tr>
                </thead>

                <tbody>
                    {manutencoes.map((manutencao, index) => (
                        <tr key={index}>
                            <td>{manutencao.equipamento}</td>
                            <td>{manutencao.tipoManutencao}</td>
                            <td>{manutencao.tecnicoResponsavel}</td>
                            <td>{manutencao.descricao}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    );
}