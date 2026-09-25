import { useState, useEffect } from "react";
import type { Advice } from "./types/advice";
import { AdviceCard } from "./components/AdviceCard";
import { Loading } from "./components/Loading";
import "./App.css";

const API_URL = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setAdvice(data.slip);
      localStorage.setItem("advice", JSON.stringify(data.slip));
    } catch {
      setError("Failed to fetch advice.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const savedAdvice = localStorage.getItem("advice");

    if (savedAdvice) {
      setAdvice(JSON.parse(savedAdvice));
    } else {
      fetchAdvice();
    }
  }, []);

  return (
    <div className="bg-[hsl(218,23%,16%)] min-h-screen flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p className="text-white">{error}</p>
      ) : (
        advice && <AdviceCard advice={advice} onNewAdvice={fetchAdvice} />
      )}
    </div>
  );
}

export default App;
