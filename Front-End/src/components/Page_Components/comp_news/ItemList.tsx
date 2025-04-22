import SingleItem from "./SingleItem";

export default function NewsList({ items }: { items: any[] }) {
  if (!items.length)
    return <p className="text-gray-600 text-center">Nenhuma notícia encontrada.</p>;
  return (
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 items-center w-full gap-5 mt-3">
        {items.map((currObj, index) => (
          <SingleItem {...currObj} key={`${index}`} />
        ))}
      </div>
  );
}
