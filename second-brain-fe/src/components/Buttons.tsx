import { ReactElement, useState } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: ReactElement;
    endIcon: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    showCopiedText?: boolean;
    showText: string;
}

const variantStyle = {
    "primary": "bg-sky-400 text-white",
    "secondary": "bg-blue-600 text-white"
}

const sizeStyle = {
    "sm": "py-1 px-1",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyle = "rounded-md flex font-thin items-center cursor-pointer"

export const Button = (props: ButtonProps) => {

    {
        const [copied, setCopied] = useState(false);
        const handleClick = () => {
            if (props.onClick) props.onClick();
            if (props.showCopiedText) {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            }
        };


        return <div className="relative inline-block">  <button onClick={handleClick}
            className={` ${variantStyle[props.variant]} ${props.fullWidth ? 'w-full flex justify-center items-center' : ''}  ${defaultStyle} ${sizeStyle[props.size]}`}>
            <div className="">{props.startIcon}</div>{props.text}</button>
            {copied && (
                <div className="absolute top-10 left-5  bg-gray-800 text-white text-sm  px-3 py-1 rounded-md shadow-lg mt-1">
                    {props.showText}
                </div>
            )}
        </div>
    }
}

//<Button variant="primary" size="lg" text="asbd" startIcon="+" endIcon="-" onClick={() => { }} ></Button> 