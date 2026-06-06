import { useState } from "react";
import "./App.css";

function InteractiveDemo() {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    return (
        <div className="page">
            <div
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                    gap: "25px"
                }}
            >

                {/* Welcome Demo */}
                <div className="theme-card">
                    <h2>Welcome Demo</h2>

                    <input
                        className="theme-input"
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <h3
                        style={{
                            textAlign: "center",
                            marginTop: "25px",
                            color: "#2563eb"
                        }}
                    >
                        {name ? `Welcome ${name}` : "Enter Your Name"}
                    </h3>
                </div>

                {/* Counter Demo */}
                <div className="theme-card">
                    <h2>Counter Demo</h2>

                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "60px",
                            margin: "20px 0",
                            color: "#2563eb"
                        }}
                    >
                        {count}
                    </h1>

                    <button
                        className="theme-btn"
                        onClick={() => setCount(count + 1)}
                    >
                        Increment
                    </button>

                    <br />
                    <br />

                    <button
                        className="theme-btn"
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1);
                            }
                        }}
                    >
                        Decrement
                    </button>

                    <br />
                    <br />

                    <button
                        className="theme-btn"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>

            </div>
        </div>
    );
}

export default InteractiveDemo;