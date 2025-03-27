import ItemList from "@/components/comp_news/ItemList";
import NewsArray from "@/database/News";

export default function News() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-12">
      <h1 className="text-6xl font-bold">Noticias</h1>
      <div className="p-5 bg-white/50 rounded-md mt-8">
        <ItemList itemsArray={NewsArray} idPath="Noticia" />
      </div>
    </div>
  );
}
