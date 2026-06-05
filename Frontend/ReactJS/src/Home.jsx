import "./Home.css";

function Home() {
    const backendUrl =
        "https://model-1-1-6iur.onrender.com";

    return (
        <div className="home-wrapper">

            {/* TOP INTRO CARD */}
            <div className="profile-card">

                <div className="avatar">TD</div>

                <h2>Thakarshi Darji</h2>
               
                <p>I am a passionate Full Stack Developer specializing in building responsive and scalable web applications using modern technologies like React, Node.js, and MongoDB. I enjoy creating clean, user-friendly interfaces and efficient backend systems. Currently focused on improving my skills in full-stack development and mobile app development.</p>

                <div className="skills">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Express</span>
                    <span>Flutter</span>
                    <span>PHP</span>
                    <span>Html</span>
                    <span>Css</span>
                </div>

            </div>

            {/* QUICK LINKS */}
            <div className="links-card">
                <h3>Quick Projects</h3>

                <button onClick={() => window.open(`${backendUrl}/demo`, "_blank")}>
                    Demo Project
                </button>

                <button onClick={() => window.open(`${backendUrl}/sample`, "_blank")}>
                    Sample API
                </button>

                <button onClick={() => window.open(`${backendUrl}/table`, "_blank")}>
                    Table Data
                </button>

                <button onClick={() => window.open(`${backendUrl}/web`, "_blank")}>
                    Live Website
                </button>
            </div>

        </div>
    );
}

export default Home;