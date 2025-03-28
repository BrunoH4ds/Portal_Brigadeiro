import ItemList from "@/components/comp_news/ItemList";
import NewsArray from "@/database/News";
import { IconNews } from "@tabler/icons-react";

export default function News() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-12 bg-white/50 p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconNews size={70} className="mb-1" />
        <h1 className="text-5xl font-bold text-center">
          Ultimas Noticias
        </h1>
      </div>
      <ItemList itemsArray={NewsArray} idPath="Noticia" />
    </div>
  );
}
