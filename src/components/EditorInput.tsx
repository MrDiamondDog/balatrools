import { SettingsFileData, info } from "@/types/settings";
import Input from "./Input";
import { MetaFileData } from "@/types/meta";
import { ProfileFileData } from "@/types/profile";

interface Props {
    type: "checkbox" | "string" | "range" | "number";
    setting: string;
    min?: number;
    max?: number;
    step?: number;
    settings: SettingsFileData | ProfileFileData | MetaFileData;
    label?: string;
    placeholder?: string;
    danger?: boolean;
    setSettings: (settings: any) => void;
}

function updateNestedSetting(settings: any, path: string, value: any): any {
    const keys = path.split(".");
    const lastKey = keys.pop();
    let nested = { ...settings };

    keys.reduce((acc, key) => {
        acc[key] = { ...acc[key] };
        return acc[key];
    }, nested)[lastKey!] = value;

    return nested;
}

function getNestedSetting(settings: any, path: string): any {
    return path.split(".").reduce((obj, key) => obj?.[key], settings);
}

export default function EditorInput({ label, placeholder, type, setting, settings, min, max, step, danger, setSettings }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const updatedSettings =
            updateNestedSetting(settings, setting as string, type === "number" ? parseFloat(value as string) : value);
        setSettings(updatedSettings);
    }

    return (<Input
        type={type}
        label={label && label + (type === "range" ? ` (${getNestedSetting(settings, setting)})` : "")}
        placeholder={placeholder}
        value={getNestedSetting(settings, setting) as string | number}
        checked={type === "checkbox" ? getNestedSetting(settings, setting) as boolean : undefined}
        min={type === "range" ? min : undefined}
        max={type === "range" ? max : undefined}
        step={step ?? (type === "range" ? 1 : undefined)}
        required={danger}
        onChange={handleChange}
        info={getNestedSetting(info, setting)}
    />);
}
