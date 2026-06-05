import "./App.css";
import { useState } from "react";
function Display() {
    const [name, setName] = useState("");

    return (
        <div className="page">
            <div className="theme-card">
                <h2>Welcome App</h2>

                <input
                    className="theme-input"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <h3
                    style={{
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >
                    Welcome {name}
                </h3>
            </div>
        </div>
    );
}

export default Display;