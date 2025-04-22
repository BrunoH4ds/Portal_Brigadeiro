"use client"
import { useState, useEffect } from "react";
import { IconLoader } from "@tabler/icons-react";

export default function Loading() {
  const [dots, setDots] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  
  // Função para atualizar os pontos a cada 0.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + ".")); // Adiciona os pontos
    }, 500);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true); // Exibe o componente após 300ms
    }, 300); // tempo mínimo antes de exibir (ajustável)

    // Limpar o timer
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null; // Não renderiza nada antes do tempo mínimo

  return (
    <div className="flex justify-center items-center rounded-md bg-white/50 text-gray-800 mt-28 mb-8 mx-8">
      <div className="flex flex-col md:flex-row items-center p-5 gap-4">
        <div className="flex items-center justify-center animate-spin">
          <IconLoader size={100} /> {/* Ícone de loading animado */}
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Carregando{dots}
        </h1>
      </div>
    </div>
  );
}
