import ItemList from "@/components/comp_news/ItemList";
import NewsArray from "@/database/News";

export default function News() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-12">
      <h1 className="text-6xl font-bold text-blue-900 bg-white/50 backdrop-blur-md rounded-md p-2">Noticias</h1>
      <ItemList
        itemsArray={NewsArray}
        idPath="Noticia"
        />
    </div>
  )
}