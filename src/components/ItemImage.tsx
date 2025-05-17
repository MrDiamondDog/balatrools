import { Item } from "@/lib/gamedata";

export default function ItemImage({ item, ...props }: { item: Item } & React.ImgHTMLAttributes<HTMLImageElement>) {
    /* é is for séance! */
    return <img
        loading="lazy"
        src={`/images/${item.type}/${item.name.replaceAll(" ", "_").replace("é", "_")}.webp`}
        className={props.className}
    />;
}
