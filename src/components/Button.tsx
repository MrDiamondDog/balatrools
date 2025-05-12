import React from "react";

export enum ButtonStyles {
    primary = "bg-primary-1 hover:bg-primary-2",
    secondary = "bg-bg-4 hover:bg-bg-3",
    danger = "bg-danger-1 hover:bg-danger-2",
    success = "bg-success-1 hover:bg-success-2",
}

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { look?: ButtonStyles }) {
    return (
        <button
            {...props}
            className={
                `px-4 py-2 rounded-lg text-white shadow-primary-2 shadow 
                ${props.className} ${props.look ?? ButtonStyles.primary} flex justify-center items-center disabled:bg-primary-2`
            }
        />
    );
}
