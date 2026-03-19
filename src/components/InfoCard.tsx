import { Item } from "@/lib/gamedata";
import ItemImage from "./ItemImage";

export default function InfoCard({ item }: { item: Item }) {
    return (<div className="flex flex-row gap-2 max-w-[300px]">
        <ItemImage item={item} className="object-none" />
        <div className="flex flex-col gap-2">
            <h3>{item.name}</h3>
            <p className="text-sm font-thin" dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
    </div>);
}
