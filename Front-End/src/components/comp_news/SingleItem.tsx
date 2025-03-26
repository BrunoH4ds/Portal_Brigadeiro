import Image from "next/image";
import Link from "next/link";

interface SingleItemProps {
  _id: string;
  title: string;
  image: string;
  idPath: string;
}

export default function SingleItem({_id,title,image,idPath}: SingleItemProps) {
  return (
    <Link href={`/${idPath}/${_id}`}>
      <div className="relative flex flex-col justify-end items-center rounded-lg bg-[#3333338f] backdrop-blur-lg hover:bg-blue-900 transition-all duration-300 w-[200px] h-[250px] cursor-pointer overflow-hidden">
        <Image
          src={image}
          alt={`Noticia`}
          layout="fill"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
        />
        <h3 className="text-center">{title}</h3>
      </div>
    </Link>
  );
}
