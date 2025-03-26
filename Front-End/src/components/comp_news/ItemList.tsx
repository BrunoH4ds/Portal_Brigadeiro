import SingleItem from "./SingleItem";

interface ItemListProps {
  itemsArray: Array<any>; // Corrigido para Array<any>, pois `itemsArray` é uma lista de objetos
  idPath: string;
}

export default function ItemList({ itemsArray, idPath }: ItemListProps) {
  return (
    <div className="relative flex justify-center bg-white/50 backdrop-blur-sm rounded-md p-5 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center gap-5 mt-3">
        {itemsArray.map((currObj, index) => (
          <SingleItem idPath={idPath} {...currObj} key={`${index}`} />
        ))}
      </div>
    </div>
  );
}
