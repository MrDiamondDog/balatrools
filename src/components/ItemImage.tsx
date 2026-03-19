import { Item } from "@/lib/gamedata";
import Image from "next/image";

export default function ItemImage({ item, ...props }: { item: Item } & React.ImgHTMLAttributes<HTMLImageElement>) {
    /* é is for séance! */
    return <Image
        loading="lazy"
        src={`/images/${item.type}/${item.name.replaceAll(" ", "_").replace("é", "_")}.webp`}
        className={props.className}
        alt={`${item.name} ${item.type}`}
    />;
}
