"use client";

import Button from "@/components/Button";
import MetaEditor from "@/components/editors/Meta";
import ProfileEditor from "@/components/editors/Profile";
import SaveEditor from "@/components/editors/Save";
import SettingsEditor from "@/components/editors/Settings";
import FileInput from "@/components/FileInput";
import Subtext from "@/components/Subtext";
import { processFile, processJSON } from "@/lib/jkrFile";
import { useEffect, useState } from "react";

export default function EditorPage() {
    const [file, setFile] = useState<File | null>(null);
    const [fileData, setFileData] = useState<any>(null);
    const [fileType, setFileType] = useState<"settings" | "meta" | "profile" | "save" | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!file)
            return;

        if (file.name.includes("settings"))
            setFileType("settings");
        else if (file.name.includes("meta"))
            setFileType("meta");
        else if (file.name.includes("profile"))
            setFileType("profile");
        else if (file.name.includes("save"))
            setFileType("save");
        else {
            setFileType(null);
            setError("Unknown file type");
        }

        const reader = new FileReader();
        reader.onload = () => {
            const buffer = reader.result as ArrayBuffer;
            const data = new Uint8Array(buffer);

            setFileData(processFile(data));
        };
        reader.readAsArrayBuffer(file);
    }, [file]);

    function download() {
        if (!fileData || !file)
            return;

        console.log(fileData);
        const rawData = processJSON(fileData);

        const blob = new Blob([rawData]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        link.click();
    }

    function isMobile() {
        if (typeof window === "undefined")
            return false;

        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        
        return toMatch.some(toMatchItem => {
            if (!window?.navigator) return false
            return window.navigator.userAgent.match(toMatchItem);
        });
    }

    if (isMobile()) 
        return (<main className="absolute-center w-[75%]">
            <p className="whitespace-pre-wrap">
                Unfortunately, the save editor is currently not supported on mobile.{"\n"}
                Android support may be added in the future but IOS support is currently impossible.{"\n"}
                If you would like to help add android support, please join the 
                <a href="https://discord.gg/cAbXMwQ4sz" target="_blank">Discord server</a>!
            </p>
        </main>)

    return (
        <main className="absolute-center h-full p-5 py-10 lg:w-[50%] md:w-[75%] flex flex-col gap-2">
            <h1>Balatro Save Editor</h1>
            <Subtext>
Save files (.jkr) can be found at:{"\n"}
- Windows: %APPDATA%/Balatro{"\n"}
- Linux: [steam path]/compat-data/2379780/pfx/drive_c/users/steamuser/AppData/Roaming/Balatro/{"\n"}
- Mac: /Users/[user]/Library/Application Support/Balatro/{"\n"}

                <span className="text-red-500">
Modded files will not work properly. Please do not report any issues regarding modded files.
                </span>
            </Subtext>
            <FileInput onFileChange={setFile} />
            {(file && !fileType) &&
            <p>Unknown file type (make sure that the name includes `settings`, `meta`, `profile`, or `save` depending on the type)</p>}
            {(file && !fileData) && <p>There was an error parsing the file data, see console for more info</p>}
            {(file && fileData) && <Button onClick={download} className="w-full">Download</Button>}

            {(file && fileData && !error) && <div className="bg-bg-2 p-2 rounded-lg flex flex-col gap-2">
                <Subtext>
                  Settings marked with <span className="text-red-500">*</span> could damage your save if modified incorrectly
                </Subtext>
                {fileType === "settings" && <SettingsEditor data={fileData} setData={setFileData} />}
                {fileType === "profile" && <ProfileEditor data={fileData} setData={setFileData} />}
                {fileType === "meta" && <MetaEditor />}
                {fileType === "save" && <SaveEditor />}
            </div>}
            {(file && fileData) && <Button onClick={download} className="w-full">Download</Button>}
        </main>
    );
}
