import { SettingsFileData } from "@/types/settings";
import EditorInput from "../EditorInput";
import Info from "../Info";

export default function SettingsEditor({ data, setData }: { data: SettingsFileData, setData: (data: SettingsFileData) => void }) {
    return (<>
        <Info info="Global settings for the game"><h2>Settings</h2></Info>
        <p>Version: {data.version}</p>
        <EditorInput label="Language" type="string" setting="language" danger settings={data} setSettings={setData} />
        <EditorInput label="Profile" type="number" setting="profile" danger settings={data} setSettings={setData} />
        <EditorInput label="Reduced Motion" type="checkbox" setting="reduced_motion" settings={data} setSettings={setData} />
        <EditorInput label="High Contrast Cards" type="checkbox" setting="colourblind_option" settings={data} setSettings={setData} />
        <EditorInput label="Crash Reports" type="checkbox" setting="crashreports" settings={data} setSettings={setData} />
        <EditorInput label="Tutorial Complete" type="checkbox" setting="tutorial_complete" settings={data} setSettings={setData} />
        <EditorInput label="Run Stake Stickers" type="checkbox" setting="run_stake_stickers" settings={data} setSettings={setData} />
        <EditorInput label="Game Speed" type="number" setting="GAMESPEED" settings={data} setSettings={setData} />
        <EditorInput
            label="Screenshake" type="range" setting="screenshake" min={0} max={100} step={1} settings={data} setSettings={setData} />

        <h2>Sound</h2>
        <EditorInput
            label="Master Volume" type="range" setting="SOUND.volume" min={0} max={100} step={1}
            settings={data} setSettings={setData} />
        <EditorInput
            label="Music Volume" type="range" setting="SOUND.music_volume" min={0} max={100} step={1}
            settings={data} setSettings={setData} />
        <EditorInput
            label="Sound Effect Volume" type="range" setting="SOUND.game_sounds_volume" min={0} max={100} step={1}
            settings={data} setSettings={setData} />

        <h2>Graphics</h2>
        <EditorInput
            label="CRT" type="range" setting="GRAPHICS.crt" min={0} max={100} step={1} settings={data} setSettings={setData} />
        <EditorInput
            label="Bloom" type="range" setting="GRAPHICS.bloom" min={1} max={2} step={1} settings={data} setSettings={setData} />
        <EditorInput
            label="Texture Scaling" type="range" setting="GRAPHICS.texture_scaling" min={1} max={2} step={1}
            settings={data} setSettings={setData} />
        <EditorInput
            label="Shadows" type="checkbox" setting="GRAPHICS.shadows" settings={data} setSettings={setData} />
    </>);
}
