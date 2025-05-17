import { MetaFileData } from "@/types/meta";
import Info from "../Info";
import { AllItems, Balatro, DiscoverableItem, Item } from "@/lib/gamedata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InfoCard from "../InfoCard";
import { useState } from "react";
import Input from "../Input";

function MetaEntry({ item, discovered, onChange }:
    { item: DiscoverableItem, discovered: boolean, onChange: (discovered: boolean) => void }) {
    let found: Item | null = null;

    const keys: (keyof typeof Balatro)[] = [
        "Joker",
        "Spectral",
        "Planet",
        "Tarot",
        "Voucher",
        "Enhanced",
        "Edition",
        "Blind",
        "Stake",
        "Pack",
        "Deck",
        "Tag",
    ];

    for (const key of keys) {
        const obj = Balatro[key];

        if (obj[item as keyof typeof obj]) {
            found = obj[item as keyof typeof obj] as Item;
            break;
        }
    }

    if (!found) {
        console.error(`${item} not found`);
        return;
    }

    return (
        <div className="flex flex-row justify-between items-center cursor-pointer" onClick={() => onChange(!discovered)}>
            {discovered && <div>
                <ChevronLeft />
            </div>}

            <Info info={<InfoCard item={found} />} noIcon>{found.name}</Info>

            {!discovered && <div>
                <ChevronRight />
            </div>}
        </div>
    );
}

export default function MetaEditor({ data, setData }: { data: MetaFileData, setData: (data: MetaFileData) => void }) {
    const [search, setSearch] = useState("");

    return (<>
        <Info info="Unlocked/discovered items on this profile"><h2>Meta</h2></Info>
        <Input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
        <div className="flex flex-row gap-2">
            <div className="bg-bg-3 p-3 rounded-lg flex flex-col w-full">
                <h3>Undiscovered/Locked</h3>
                {Object.keys(AllItems)
                    .filter(key => key.includes(search))
                    .filter(key => !data.discovered[key] || !data.unlocked[key])
                    .map(key => (
                        <MetaEntry
                            item={key as DiscoverableItem}
                            key={key}
                            discovered={false}
                            onChange={
                                discovered => setData({
                                    ...data,
                                    discovered: { ...data.discovered, [key]: discovered },
                                    unlocked: { ...data.unlocked, [key]: discovered },
                                })
                            }
                        />
                    ))
                }
            </div>
            <div className="bg-bg-3 p-3 rounded-lg flex flex-col w-full">
                <h3>Discovered/Unlocked</h3>
                {Object.keys(AllItems)
                    .filter(key => key.includes(search))
                    .filter(key => (data.discovered[key] === true))
                    .map(key => (
                        <MetaEntry
                            item={key as DiscoverableItem}
                            key={key}
                            discovered={true}
                            onChange={
                                discovered => setData({
                                    ...data,
                                    discovered: { ...data.discovered, [key]: discovered },
                                    unlocked: { ...data.unlocked, [key]: discovered },
                                })
                            }
                        />
                    ))
                }
            </div>
        </div>
    </>);
}
