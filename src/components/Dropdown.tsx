import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Dropdown({ value, onChange, options, ...props }:
    { value: string, onChange: (val: string) => void, options: Record<string, string> }
    & React.InputHTMLAttributes<HTMLInputElement>) {
    const [open, setOpen] = useState(false);

    return (<div
        className={`${props.className} p-2 bg-bg-4 rounded-lg relative`}>
        <div className="flex flex-row justify-between items-center w-full cursor-pointer" onClick={() => setOpen(!open)}>
            {options[value]}
            <ChevronDown />
        </div>
        {open && <div className="absolute left-0 right-0 top-[50px] p-2 bg-bg-4 rounded-lg flex flex-col gap-2">
            {Object.keys(options).map(key => (
                <div
                    className="w-full bg-bg-4 hover:bg-bg-3 rounded-lg p-2"
                    onClick={() => {
                        onChange(key);
                        setOpen(false);
                    }}
                >{options[key]}</div>
            ))}
        </div>}
    </div>);
}
