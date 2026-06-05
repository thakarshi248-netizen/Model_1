import "./App.css";
import { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0);

    return (
        <div className="page">
            <div className="theme-card text-center">
                <h2>Counter</h2>

                <h1>{count}</h1>

                <button
                    className="theme-btn"
                    onClick={() => setcount(count + 1)}
                >
                    Increment
                </button>

                <br /><br />

                <button
                    className="theme-btn"
                    onClick={() => {
                        if (count > 0) setcount(count - 1);
                    }}
                >
                    Decrement
                </button>

                <br /><br />

                <button
                    className="theme-btn"
                    onClick={() => setcount(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter