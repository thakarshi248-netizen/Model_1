import "./Home.css";

function Home() {
    const backendUrl =
        "https://model-1-1-6iur.onrender.com";

    return (
        <div className="container">
            <h1>Quick Links</h1>

            <button onClick={() => window.open(`${backendUrl}/demo`, "_blank")}>
                Demo
            </button>

            <button onClick={() => window.open(`${backendUrl}/sample`, "_blank")}>
                Sample
            </button>

            <button onClick={() => window.open(`${backendUrl}/table`, "_blank")}>
                Table
            </button>

            <button onClick={() => window.open(`${backendUrl}/web`, "_blank")}>
                Website
            </button>
        </div>
    );
}

export default Home;