import { useEffect, useState } from "react";
import EditorInput from "../EditorInput";
import Info from "../Info";
import { ProfileFileData, Progress } from "@/types/profile";
import { Balatro } from "@/lib/gamedata";
import JokerEntry from "../JokerEntry";
import Input from "../Input";
import Button from "../Button";
import InfoCard from "../InfoCard";
import ItemImage from "../ItemImage";

function StakeButton({ index, selected, setSelectedStake }:
    { index: number, selected: boolean, setSelectedStake: (index: number) => void }) {
    const stake = Balatro.Stake[Object.keys(Balatro.Stake)[index] as keyof typeof Balatro.Stake];

    return (<div
        className={
            `p-2 bg-bg-3 w-full h-full hover:bg-bg-4 shadow cursor-pointer rounded-lg flex flex-col 
            ${selected ? "bg-primary-1 hover:!bg-primary-2" : ""}`
        }
        onClick={() => setSelectedStake(index)}
    >
        <Info
            info={<InfoCard item={Object.values(Balatro.Stake)[index]} />}
            className="flex flex-col flex-wrap gap-2 w-full"
            noIcon
        >
            <ItemImage item={stake} className="mb-2 w-full h-full" />
            <h3 className="text-center">{stake.name.replace(" Stake", "")}</h3>
        </Info>
    </div>);
}

export default function ProfileEditor({ data, setData }: { data: ProfileFileData, setData: (data: ProfileFileData) => void }) {
    const [selectedStake, setSelectedStake] = useState<number>(-1);
    const [jokerSearch, setJokerSearch] = useState<string>("");

    return (<>
        <Info info="Stats for this profile"><h2>Profile</h2></Info>
        <EditorInput label="Profile Name" type="string" setting="name" settings={data} setSettings={setData} />

        <h2>High Scores</h2>
        {Object.keys(data.high_scores).map(key => {
            if (key === "collection" || key === "current_streak")
                return null;
            const score = data.high_scores[key as keyof typeof data.high_scores];
            return <EditorInput
                key={key}
                label={score.label}
                type="number"
                setting={`high_scores.${key}.amt`}
                settings={data}
                setSettings={setData}
            />;
        })}

        <h2>Career Stats</h2>
        <EditorInput
            label="Cards Discarded" type="number" setting="career_stats.c_cards_discarded" settings={data} setSettings={setData} />
        <EditorInput
            label="Hands Played" type="number" setting="career_stats.c_hands_played" settings={data} setSettings={setData} />
        <EditorInput
            label="Dollars Earned" type="number" setting="career_stats.c_dollars_earned" settings={data} setSettings={setData} />
        <EditorInput
            label="Cards Played" type="number" setting="career_stats.c_cards_played" settings={data} setSettings={setData} />
        <EditorInput
            label="Planetarium Used" type="number" setting="career_stats.c_planetarium_used" settings={data} setSettings={setData} />
        <EditorInput
            label="Wins" type="number" setting="career_stats.c_wins" settings={data} setSettings={setData} />
        <EditorInput
            label="Shop Rerolls" type="number" setting="career_stats.c_shop_rerolls" settings={data} setSettings={setData} />
        <EditorInput
            label="Interest Cap Streak" type="number" setting="career_stats.c_round_interest_cap_streak"
            settings={data} setSettings={setData} />
        <EditorInput
            label="Losses" type="number" setting="career_stats.c_losses" settings={data} setSettings={setData} />
        <EditorInput
            label="Tarots Bought" type="number" setting="career_stats.c_tarots_bought" settings={data} setSettings={setData} />
        <EditorInput
            label="Shop Dollars Spent" type="number" setting="career_stats.c_shop_dollars_spent"
            settings={data} setSettings={setData} />
        <EditorInput
            label="Single Hand Streak" type="number" setting="career_stats.c_single_hand_round_streak"
            settings={data} setSettings={setData} />
        <EditorInput
            label="Planet Cards Bought" type="number" setting="career_stats.c_planets_bought" settings={data} setSettings={setData} />
        <EditorInput
            label="Vouchers Bought" type="number" setting="career_stats.c_vouchers_bought" settings={data} setSettings={setData} />
        <EditorInput
            label="Tarot Reading Used" type="number" setting="career_stats.c_tarot_reading_used"
            settings={data} setSettings={setData} />
        <EditorInput
            label="Rounds" type="number" setting="career_stats.c_rounds" settings={data} setSettings={setData} />
        <EditorInput
            label="Jokers Sold" type="number" setting="career_stats.c_jokers_sold" settings={data} setSettings={setData} />
        <EditorInput
            label="Face Cards Played" type="number" setting="career_stats.c_face_cards_played" settings={data} setSettings={setData} />
        <EditorInput
            label="Playing Cards Bought" type="number" setting="career_stats.c_playing_cards_bought"
            settings={data} setSettings={setData} />
        <EditorInput
            label="Cards Sold" type="number" setting="career_stats.c_cards_sold" settings={data} setSettings={setData} />

        <h2>Progress</h2>
        <EditorInput label="Overall" type="number" setting="progress.overall_tally" settings={data} setSettings={setData} />
        <EditorInput label="Challenges" type="number" setting="progress.challenges.tally" settings={data} setSettings={setData} />
        <EditorInput label="Deck Stakes" type="number" setting="progress.deck_stakes.tally" settings={data} setSettings={setData} />
        <EditorInput label="Discovered" type="number" setting="progress.discovered.tally" settings={data} setSettings={setData} />
        <EditorInput label="Joker Stickers" type="number" setting="progress.joker_stickers.tally"
            settings={data} setSettings={setData} />

        <Info info="Stats for all jokers. Click on any row to modify the values."><h2>Joker Usage</h2></Info>
        <Info info="Stake to show win/loss data for. Press 'All' to see data for all stakes"><h3>Stake</h3></Info>
        <Button onClick={() => setSelectedStake(-1)} className={selectedStake !== -1 ? "!bg-bg-3 hover:!bg-bg-4" : ""}>All</Button>
        <div className="flex flex-row gap-2 items-center w-full">
            {Object.keys(Balatro.Stake).map((_, index) => (
                <StakeButton key={index} index={index} selected={selectedStake === index} setSelectedStake={setSelectedStake} />
            ))}
        </div>
        <Input
            placeholder="Search Jokers"
            type="text"
            className="w-full"
            value={jokerSearch}
            onChange={e => setJokerSearch(e.target.value)}
        />
        <table>
            <thead>
                <tr>
                    <th>Joker</th>
                    <th>Rounds Complete</th>
                    <th>Wins</th>
                    <th>Losses</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(Balatro.Joker).filter(v => v.includes(jokerSearch))
                    .sort((a, b) => (
                        Balatro.Joker[a as keyof typeof Balatro.Joker].order - Balatro.Joker[b as keyof typeof Balatro.Joker].order
                    ))
                    .map(key => (
                        <JokerEntry key={key} stake={selectedStake} jokerKey={key} profile={data} setProfile={setData} />
                    ))}
            </tbody>
        </table>
    </>);
}
