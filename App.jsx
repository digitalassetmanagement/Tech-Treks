import { useState } from "react";
import ProductList from "./components/ProductList";
import "./styles/app.css";

function App() {
  const [apiMode, setApiMode] = useState("success");

  return (
    <div className="container">
      <h1>Product Dashboard</h1>

      <div className="controls">
        <button onClick={() => setApiMode("success")}>Success</button>

        <button onClick={() => setApiMode("error")}>Error</button>

        <button onClick={() => setApiMode("timeout")}>Timeout</button>

        <button onClick={() => setApiMode("empty")}>Empty</button>
      </div>

      <ProductList apiMode={apiMode} />
    </div>
  );
}

export default App;
