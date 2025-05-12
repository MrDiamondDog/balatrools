import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Subtext from "../Subtext";

export function TopLevelJsonEditor({ data, setData }: { data: any, setData: (data: any) => void }) {
    return (<>
        {Object.keys(data).map((key, i) => <>
            <JsonEditor
                key={key}
                dataKey={key}
                data={data[key]}
                setData={newData => setData(Array.isArray(data) ?
                    [...data.slice(0, i), newData, ...data.slice(i + 1)] :
                    { ...data, [key]: newData })}
            />
        </>)}
    </>);
}

export function JsonEditor({ dataKey, data, setData }: { dataKey: string, data: any, setData: (data: any) => void }) {
    return (<>
        {typeof data === "object" && <JsonObjectEditor
            key={dataKey}
            dataKey={dataKey}
            data={data}
            setData={setData}
        />}
        {typeof data === "string" && <JsonStringEditor
            key={dataKey}
            dataKey={dataKey}
            isNumber={false}
            data={data}
            setData={setData}
        />}
        {typeof data === "number" && <JsonStringEditor
            key={dataKey}
            dataKey={dataKey}
            isNumber={true}
            data={data}
            setData={setData}
        />}
        {typeof data === "boolean" && <JsonBooleanEditor
            key={dataKey}
            dataKey={dataKey}
            data={data}
            setData={setData}
        />}
    </>);
}

export function JsonObjectEditor({ dataKey, data, setData }: { dataKey: string, data: any, setData: (data: any) => void }) {
    const [open, setOpen] = useState(false);

    return (<div className="flex flex-col gap-2 font-mono">
        <div className="flex flex-row gap-2 items-center cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <ChevronDown className="mx-[-4px]" /> : <ChevronRight className="mx-[-4px]" />}
            {dataKey}
        </div>
        {open &&
        <div className="pl-4 border-l border-bg-4 flex flex-col gap-1">
            {Object.keys(data).map((key, i) => <JsonEditor
                dataKey={key}
                data={data[key]}
                setData={newData => setData(Array.isArray(data) ?
                    [...data.slice(0, i), newData, ...data.slice(i + 1)] :
                    { ...data, [key]: newData })}
            />)}
            {Object.keys(data).length === 0 && <Subtext>Empty Object</Subtext>}
        </div>
        }
    </div>);
}

export function JsonStringEditor({ isNumber, dataKey, data, setData }:
    { isNumber: boolean, dataKey: string, data: any, setData: (data: any) => void }) {
    return (<div className="flex flex-row gap-2 items-center">
        {dataKey}
        :
        <input
            className="bg-bg-4 px-2"
            type={isNumber ? "number" : "text"}
            value={data}
            onChange={e => setData(isNumber ? parseInt(e.target.value) : e.target.value)}
        />
    </div>);
}

export function JsonBooleanEditor({ dataKey, data, setData }:
    { dataKey: string, data: any, setData: (data: any) => void }) {
    return (<div className="flex flex-row gap-2 items-center">
        {dataKey}
        :
        <input className="bg-bg-4 px-2" type={"checkbox"} checked={data} onChange={e => setData(e.target.checked)} />
    </div>);
}
