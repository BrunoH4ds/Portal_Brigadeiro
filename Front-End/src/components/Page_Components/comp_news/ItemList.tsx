import SingleItem from "./SingleItem";

interface NewsItem {
  _id: number;
  title: string;
  image: string;
}

export default function NewsList({ items }: { items: NewsItem[] }) {
  if (!items.length)
    return <p className="text-gray-600 text-center">Nenhuma notícia encontrada.</p>;

  return (
    <div className="grid lg:grid-cols-1 xl:grid-cols-2 items-center w-full gap-5 mt-3">
      {items.map((currObj) => (
        <SingleItem {...currObj} key={currObj._id} />
      ))}
    </div>
  );
}
