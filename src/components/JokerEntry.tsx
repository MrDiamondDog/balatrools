import { Balatro } from "@/lib/gamedata";
import Info from "./Info";
import Input from "./Input";
import { ProfileFileData } from "@/types/profile";
import { useState } from "react";
import Dialog from "./Dialog";
import { createPortal } from "react-dom";
import InfoCard from "./InfoCard";

export default function JokerEntry({ jokerKey, profile, setProfile, stake }:
    { stake: number, jokerKey: string; profile: ProfileFileData; setProfile: (settings: ProfileFileData) => void }) {
    const joker = Balatro.Joker[jokerKey as keyof typeof Balatro.Joker];
    const usageData = profile.joker_usage[jokerKey as keyof typeof Balatro.Joker];

    const stakeData = stake === -1 ? null : Balatro.Stake[Object.keys(Balatro.Stake)[stake] as keyof typeof Balatro.Stake];

    // usageData: { wins: number[] | object, losses: number[] | object, count: number }
    // wins/losses are empty objects when there is no data, in that case total is 0
    const totalWins = Object.values(usageData?.wins ?? {}).reduce((a, b) => a + b, 0);
    const totalLosses = Object.values(usageData?.losses ?? {}).reduce((a, b) => a + b, 0);

    const [editorOpen, setEditorOpen] = useState<boolean>(false);

    function updateUsageData(count: number, wins: number, losses: number) {
        // wins and losses are arrays length of max number of stakes
        // the array should contain 0s for each stake, unless there is a different value for that stake
        // if there is no usage data for a stake, fill it with 0s

        const winsArray: number[] = [];
        const lossesArray: number[] = [];

        for (let i = 0; i < Object.keys(Balatro.Stake).length; i++) {
            winsArray[i] = usageData?.wins[i] ?? 0;
            lossesArray[i] = usageData?.losses[i] ?? 0;
        }

        winsArray[stake] = wins;
        lossesArray[stake] = losses;

        setProfile({
            ...profile,
            joker_usage: {
                ...profile.joker_usage,
                [jokerKey]: {
                    ...usageData,
                    count,
                    wins: winsArray,
                    losses: lossesArray,
                },
            },
        });
    }

    const dialog = <Dialog open={editorOpen} onClose={() => setEditorOpen(false)} title={`Editing ${joker.name} Stats`}>
        <div className="grid grid-cols-3 gap-2">
            <p>Rounds Complete</p>
            <p>Wins ({stakeData?.name ?? "All Stakes"})</p>
            <p>Losses ({stakeData?.name ?? "All Stakes"})</p>
            <Input
                type="number"
                value={usageData?.count ?? 0}
                onChange={e => updateUsageData(parseInt(e.target.value), usageData?.wins[stake] ?? 0, usageData?.losses[stake] ?? 0)}
            />
            <Input
                type="number"
                disabled={stake === -1}
                value={usageData?.wins[stake] ?? 0}
                onChange={e => updateUsageData(usageData?.count ?? 0, parseInt(e.target.value), usageData?.losses[stake] ?? 0)}
            />
            <Input
                type="number"
                disabled={stake === -1}
                value={usageData?.losses[stake] ?? 0}
                onChange={e => updateUsageData(usageData?.count ?? 0, usageData?.wins[stake] ?? 0, parseInt(e.target.value))}
            />
        </div>
    </Dialog>;

    return (<>
        <tr className="odd:bg-bg-3 cursor-pointer" onClick={() => setEditorOpen(!editorOpen)}>
            <td className="px-2">
                <Info noIcon info={<InfoCard item={Balatro.Joker[jokerKey as keyof typeof Balatro.Joker]} />}>
                    <h3>{joker.name}</h3>
                </Info>
            </td>
            <td className="text-center">{usageData?.count ?? 0}</td>
            <td className="text-center">{stake === -1 ? totalWins : usageData?.wins[stake] ?? 0}</td>
            <td className="text-center">{stake === -1 ? totalLosses : usageData?.losses[stake] ?? 0}</td>
        </tr>

        {createPortal(dialog, document.body)}
    </>);
}
