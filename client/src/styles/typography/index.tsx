import { FC, ReactNode } from 'react'

export const H1: FC<{ 
    children: ReactNode,
    className?: string,
}> = ({ children, className="", ...props }) => {
    return (
    <h1 className={`text-6xl sm:text-5xl md:text-6xl font-bold ${className}`}
    {...props}
    >
        { children }
    </h1>);
};

export const H2: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
    <h2 className={`text-4xl sm:text-4xl md:text-5xl ${className}`}
    {...props}
    >
        {children}
    </h2>
    )
}

