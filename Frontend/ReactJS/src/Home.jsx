import "./Home.css";

function Home() {
    const backendUrl =
        "https://model-1-1-6iur.onrender.com";

    return (
        <div className="home-wrapper">

          

            {/* QUICK LINKS */}
            <div className="links-card">
                <h3>Quick Projects</h3>

                <button onClick={() => window.open(`${backendUrl}/demo`, "_blank")}>
                   Pyscript Demo 
                </button>

                <button onClick={() => window.open(`${backendUrl}/sample`, "_blank")}>
                    Registration Form Demo
                </button>

                <button onClick={() => window.open(`${backendUrl}/table`, "_blank")}>
                    Table Demo
                </button>

                <button onClick={() => window.open(`${backendUrl}/web`, "_blank")}>
                    Grail Layout Demo
                </button>
            </div>

        </div>
    );
}

export default Home;