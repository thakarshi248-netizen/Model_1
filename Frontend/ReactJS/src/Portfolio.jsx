import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">

            {/* Hero Section */}
            <section className="hero-section">

                <div className="hero-content">

                    <h3>Hello, I'm</h3>

                    <h1>Thakarshi Darji</h1>

                    <h2>Full Stack Developer | WEB Developer</h2>

                    <p>
                       Aspiring Full Stack Developer with a strong passion for web development and modern technologies. I enjoy designing and building responsive, user-friendly applications using HTML,CSS,PHP,React.js, Node.js, Express.js, and MongoDB. Constantly learning and exploring new tools, I aim to create impactful digital experiences while growing as a professional software developer.
                    </p>

                    <div className="hero-buttons">
                        <a
                            href="#projects"
                            className="btn-primary"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="btn-secondary"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-stats">

                        <div>
                            <h3>3</h3>
                            <p>Projects</p>
                        </div>

                     

                        <div>
                            <h3>2025</h3>
                            <p>Diploma Completed</p>
                        </div>

                         <div>
                            <h3>2028</h3>
                            <p>B.Tech(IT) Pursuing</p>
                        </div>

                    </div>

                </div>

                <div className="hero-image">
                    <div className="avatar-circle">
                        TD
                    </div>
                </div>

            </section>

            {/* Skills Section */}
            <section className="section">

                <h2 className="section-title">
                    Technical Skills
                </h2>

                <div className="skills-grid">

                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>JavaScript</span>
                    <span>Flutter</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Git & GitHub</span>
                    <span>n8n Automation</span>
                    <span>AI Workflows</span>

                </div>

            </section>

            {/* Projects Section */}
            <section
                className="section"
                id="projects"
            >

                <h2 className="section-title">
                    Featured Projects
                </h2>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>AI Diet Plan Recommendation System</h3>

                        <p>
                            Developed an AI-powered diet recommendation
                            system using n8n automation workflows.
                            Calculated BMI, generated personalized
                            diet plans using AI models, and
                            automatically delivered recommendations
                            via email.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>AI Smart Waste Classifier</h3>

                        <p>
                            Built an AI-based waste classification
                            system using image recognition models
                            to identify waste categories and trigger
                            automated email notifications through
                            Relay.app workflows.
                        </p>
                    </div>

                 

                    

                 

                    <div className="project-card">
                        <h3>Responsive Static Website</h3>

                        <p>
                            Developed a responsive website
                            focusing on clean design,
                            mobile compatibility, and
                            modern user experience.
                        </p>
                    </div>

                </div>

            </section>

            {/* About Section */}
            <section className="section">

                <h2 className="section-title">
                    About Me
                </h2>

                <div className="about-card">

                    <p>
                        I am a Full Stack Developer passionate
                        about building responsive web applications,
                        automation systems, and AI-powered solutions.
                        My expertise includes React.js, Node.js,
                        Express.js, MongoDB, Flutter, PHP, and MySQL.
                    </p>

                    <br />

                    <p>
                        I enjoy transforming ideas into practical
                        digital products while focusing on clean
                        architecture, performance optimization,
                        and exceptional user experience.
                    </p>

                </div>

            </section>

            {/* Education Section */}
            <section className="section">

                <h2 className="section-title">
                    Education
                </h2>

                <div className="education-card">

                    <h3>
                        B.Tech in Information Technology
                    </h3>

                    <p>
                        Studied software development,
                        database management, web technologies,
                        programming concepts, and modern
                        application development practices.
                    </p>

                </div>

            </section>

            {/* Contact Section */}
            <section
                className="section"
                id="contact"
            >

                <h2 className="section-title">
                    Contact
                </h2>

                <div className="contact-card">

                    <h3>
                        Let's Build Something Together
                    </h3>

                    <p>
                        Available for internships,
                        freelance projects, and
                        full-time opportunities.
                    </p>

                    <br />

                    <p>
                        📧 thakarshi248@gmail.com
                    </p>

                    <p>
                        📍 Gujarat, India
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Portfolio;