export default function FormLivro({
    titulo,
    setTitulo,
    autor,
    setAutor,
    categoria,
    setCategoria,
    anoPublicacao,
    setAnoPublicacao,
    handleSubmit
}) {
    return (
        <form className="form-livro" onSubmit={handleSubmit}>
            <label htmlFor="titulo">Título</label>
            <input
                id="titulo"
                type="text"
                name="titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
            />

            <label htmlFor="autor">Autor</label>
            <input
                id="autor"
                type="text"
                name="autor"
                value={autor}
                onChange={(event) => setAutor(event.target.value)}
            />

            <label htmlFor="categoria">Categoria</label>
            <select
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
            >
                <option value="romance">Romance</option>
                <option value="tecnico">Técnico</option>
                <option value="infantil">Infantil</option>
                <option value="biografia">Biografia</option>
            </select>

            <label htmlFor="ano-publicacao">Ano de publicação</label>
            <input
                id="ano-publicacao"
                type="number"
                name="ano-publicacao"
                value={anoPublicacao}
                onChange={(event) => setAnoPublicacao(event.target.value)}
            />

            <button type="submit">Cadastrar Livro</button>
        </form>
    );
}