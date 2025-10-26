import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}


export const Container:React.FC<Props> = ( {className, children}) => {
    return (
        <div className={`${className} max-w-5xl mx-auto px-4`}>
            {children}
        </div>
    );
}