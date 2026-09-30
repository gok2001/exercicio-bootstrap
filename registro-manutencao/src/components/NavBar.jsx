export default function NavBar({ abaAtiva, setAbaAtiva }) {
    return (
        <nav>
            <div className="nav nav-tabs">
                <button
                    className={`nav-link ${abaAtiva === "registro" ? "active" : ""}`}
                    onClick={() => setAbaAtiva("registro")}
                >
                    Registro
                </button>

                <button
                    className={`nav-link ${abaAtiva === "historico" ? "active" : ""}`}
                    onClick={() => setAbaAtiva("historico")}
                >
                    Histórico
                </button>
            </div>
        </nav>
    );
}