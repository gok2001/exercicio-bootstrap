export default function FormLivro({
    titulo,
    setTitulo,
    autor,
    setAutor,
    categoria,
    setCategoria,
    anoPublicacao,
    setAnoPublicacao,
    handleSubmit,
    erros
}) {
    return (
        <form className="form-livro" onSubmit={handleSubmit}>
            <div className="row">

                <div className="col-md-6">
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        name="titulo"
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                        className={erros.titulo ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.titulo}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="autor">Autor</label>
                    <input
                        id="autor"
                        type="text"
                        name="autor"
                        value={autor}
                        onChange={(event) => setAutor(event.target.value)}
                        className={erros.autor ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.autor}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={categoria}
                        onChange={(event) => setCategoria(event.target.value)}
                        className={erros.categoria ? "form-select is-invalid" : "form-select"}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="romance">Romance</option>
                        <option value="tecnico">Técnico</option>
                        <option value="infantil">Infantil</option>
                        <option value="biografia">Biografia</option>
                    </select>
                    <div className="invalid-feedback">
                        {erros.categoria}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="ano-publicacao">Ano de publicação</label>
                    <input
                        id="ano-publicacao"
                        type="number"
                        name="ano-publicacao"
                        value={anoPublicacao}
                        onChange={(event) => setAnoPublicacao(event.target.value)}
                        className={erros.anoPublicacao ? "form-control is-invalid" : "form-select"}
                    />
                    <div className="invalid-feedback">
                        {erros.anoPublicacao}
                    </div>
                </div>

            </div>

            <button type="submit">Cadastrar Livro</button>
        </form>
    );
}