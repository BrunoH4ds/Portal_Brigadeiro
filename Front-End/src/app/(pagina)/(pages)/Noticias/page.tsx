"use client";

import { useState, useEffect } from "react";
import NewsArray from "@/database/News";
import { IconNews } from "@tabler/icons-react";
import NewsCarousel from "@/components/Page_Components/comp_news/NewsCarousel";
import SearchBar from "@/components/Page_Components/comp_news/SearchBar";
import NewsList from "@/components/Page_Components/comp_news/ItemList";

export default function NewsPage() {
  const [filteredNews, setFilteredNews] = useState(NewsArray);
  const [viewMode, setViewMode] = useState<"recent" | "all">("recent");

  // efeito de exibição para exibir as 6 noticias mais recentes caso contrario exibe todas
  useEffect(() => {
    if (viewMode === "recent") {
      const sorted = [...NewsArray].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setFilteredNews(sorted.slice(0, 6)); // Mostra as 6 mais recentes
    } else {
      setFilteredNews(NewsArray); // Todas
    }
  }, [viewMode]);

  // função para filtrar de acordo com a pesquisa do Usuario
  const handleSearch = (term: string) => {
    const results = NewsArray.filter((news) =>
      news.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredNews(results);
  };

  return (
    <div className="flex flex-col mt-28 mb-8 mx-3 md:mx-12 bg-white/50 backdrop-blur-md p-4 md:p-8 rounded-lg shadow-xl overflow-x-hidden">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconNews size={70} />
        <h1 className="text-5xl font-bold text-center">Notícias</h1>
        <p className="text-xl text-white text-center">
          Aqui você encontra algumas Noticias Sobre nossa escola.
        </p>
      </div>
      {/* Carrossel de noticias */}
      <NewsCarousel />

      <div className="flex flex-col justify-between items-center my-6 gap-4">
        {/* Botoes para filtrar noticia */}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => setViewMode("recent")}
            className={`px-4 flex-1 py-2 rounded-md ${
              viewMode === "recent"
                ? "bg-blue-800 text-white"
                : "bg-white/50 text-blue-800 border cursor-pointer"
            }`}
          >
            Mais Recentes
          </button>
          <button
            onClick={() => setViewMode("all")}
            className={`px-4 flex-1 py-2 rounded-md ${
              viewMode === "all"
                ? "bg-blue-800 text-white"
                : "bg-white/50 text-blue-800 border cursor-pointer"
            }`}
          >
            Ver Todas
          </button>
        </div>
        {/* barra de pesquisa */}
        <SearchBar onSearch={handleSearch} />
      </div>
        {/* Lista de Noticias */}
      <NewsList items={filteredNews} />
    </div>
  );
}
