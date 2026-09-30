export default function NavBar({ abaAtiva, setAbaAtiva }) {
    return (
        <nav>
            <div className="nav nav-tabs">
                <button
                    className={`nav-link ${abaAtiva === "cadastro" ? "active" : ""}`}
                    onClick={() => setAbaAtiva("cadastro")}
                >
                    Cadastro
                </button>

                <button
                    className={`nav-link ${abaAtiva === "acervo" ? "active" : ""}`}
                    onClick={() => setAbaAtiva("acervo")}
                >
                    Acervo
                </button>
            </div>
        </nav>
    );
}