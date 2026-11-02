
import { useEffect, useState } from "react";
import "./App.css";

type HealthResponse = {
  status: string;
  project: string;
  version: string;
};

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then(setHealth)
      .catch(() => setError("Cannot connect to the backend."));
  }, []);

  return (
    <main>
      <h1>RiverShift</h1>
      <p>Riverbank Erosion Monitoring</p>

      {health ? (
        <p>
          API Status: {health.status} · Version {health.version}
        </p>
      ) : (
        <p>{error || "Connecting to backend..."}</p>
      )}
    </main>
  );
}

export default App;
