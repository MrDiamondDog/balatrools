import { createElement } from "react";
import Info from "./Info";

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement> &
    { multiline?: boolean | "true"; label?: string; info?: string }) {
    const Component = props.multiline ? "textarea" : "input";

    return (<div className={`flex ${props.type === "checkbox" ? "flex-row gap-2" : "flex-col"} ${props.className ?? ""}`}>
        {(props.label && props.type !== "checkbox") && (
            <label className="text-white">
                {props.info ?
                    <Info info={props.info}>{props.label} {props.required && <span className="text-red-500">*</span>}</Info> :
                    <>{props.label} {props.required && <span className="text-red-500">*</span>}</>
                }
            </label>
        )}
        {createElement(Component, {
            ...props,
            className: `px-4 py-2 rounded-lg ${props.className ?? ""} bg-bg-3 border-2 border-transparent
            text-white items-center outline-none focus:outline-none focus:border-primary disabled:text-gray-400`,
        })}
        {(props.label && props.type === "checkbox") && (
            <label className="text-white">
                {props.info ?
                    <Info info={props.info}>{props.label} {props.required && <span className="text-red-500">*</span>}</Info> :
                    <>{props.label} {props.required && <span className="text-red-500">*</span>}</>
                }
            </label>
        )}
    </div>);
}
