import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h2>Live Text Mirror</h2>
      <input
        type="text"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text || "Your typed text will appear here."}</p>
    </div>
  );
}

export default App;
