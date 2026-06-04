function Home() {

    const backendUrl =
        "https://opulent-space-disco-q7rrqwj9vp9wfxgr6-5500.app.github.dev";

    return (
        <div>
      

            <button
                onClick={() =>
                    window.open(`${backendUrl}/demo`, "_blank")
                }
            >
                Open Demo
            </button>

            <br /><br />

            <button
                onClick={() =>
                    window.open(`${backendUrl}/sample`, "_blank")
                }
            >
                Open Sample
            </button>

            <br /><br />

            <button
                onClick={() =>
                    window.open(`${backendUrl}/table`, "_blank")
                }
            >
                Open Table
            </button>

            <br /><br />

            <button
                onClick={() =>
                    window.open(`${backendUrl}/web`, "_blank")
                }
            >
                Open Website
            </button>
        </div>
    );
}

export default Home;