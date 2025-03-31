import Image from "next/image";

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
  background?: boolean; // <-- apenas ativa ou não o fundo padrão
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  description,
  reverse = false,
  background = false, // <-- desativado por padrão
}: ImageTextSectionProps) {
  return (
    <div className={`${background ? "bg-zinc-200/50 mb-10 rounded-xl p-5 shadow-md" : ""}`}>
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-5 items-center`}>
        <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col lg:w-2/3 lg:mx-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-justify mb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
