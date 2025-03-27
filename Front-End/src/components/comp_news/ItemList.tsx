import SingleItem from "./SingleItem";

interface ItemListProps {
  itemsArray: Array<any>; // Corrigido para Array<any>, pois `itemsArray` é uma lista de objetos
  idPath: string;
}

export default function ItemList({ itemsArray, idPath }: ItemListProps) {
  return (
    <div className="relative flex justify-center">
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 items-center w-full gap-5 mt-3">
        {itemsArray.map((currObj, index) => (
          <SingleItem idPath={idPath} {...currObj} key={`${index}`} />
        ))}
      </div>
    </div>
  );
}
