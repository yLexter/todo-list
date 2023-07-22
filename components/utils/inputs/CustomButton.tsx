

import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type IPropCustomButton = {
    variant?: "outlined" | "contained" | "none",
    color?: "primary" | "secondary" | "default" | "none"
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function CustomButton({
    variant = "none",
    color = "none",
    ...rest
}: IPropCustomButton) {

    const variantStyles: Record<typeof variant, string> = {
        outlined: "border",
        contained: "bg",
        none: ""
    }

    const colorStyles: Record<typeof color, string> = {
        primary: "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white",
        secondary: "text-red-500 border-red-500 hover:bg-red-500 hover:text-white",
        default: "text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white",
        none: ""
    }

    const className = twMerge(`p-2 rounded font-bold ${variantStyles[variant]} ${colorStyles[color]}`, rest.className)

    return (
        <button className={className} {...rest}>
            {rest.children}
        </button>
    );

};
