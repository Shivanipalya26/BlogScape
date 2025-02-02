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
        { children }
    </h2>
    );
};

export const H3: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <h3 className={`text-3xl sm:text-3xl md:text-4xl ${className}`}
        {...props}
        >
            { children }
        </h3>
    );
};

export const H4: FC<{
    children: ReactNode;
    className ?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <h4 className={`text-2xl sm:text-2xl md:text-3xl ${className}`}
        {...props}
        >
            { children }
        </h4>
    );
};

export const H5: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <h5 className={`text-1xl sm:text-1xl md:text-2xl ${className}`}
        {...props}
        >
            { children }
        </h5>
    );
};

export const H6: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <h6 className={`text-1xl ${className}`}
        {...props}
        >
            { children }
        </h6>
    );
};

export const P: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <p className={`text-base leading-relaxed ${className}`}
        {...props}
        >
            {children}
        </p>
    );
};

export const BlockQuote: FC<{
    children: ReactNode;
    className?: string;
}> = ({children, className="", ...props}) => {
    return (
        <blockquote className={`border-l-4 pl-4 italic text-gray-500 ${className}`}
        {...props}
        >
            { children }
        </blockquote>
    );
};

export const Ul: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props }) => {
    return (
        <ul className={`list-disc ml-10 ${className}`}
        {...props}
        >
            { children }
        </ul>
    );
};

export const Ol: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props }) => {
    return (
        <ol className={`list-decimal ml-10 ${className}`}
        {...props}
        >
            { children }
        </ol>
    );
};

export const Tag: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className="", ...props}) => {
    return (
        <span className={`bg-blue-100 text-blue-600 p-2 rounded-full text-xs font-medium ${className}`}
        {...props}
        >
            { children }
        </span>
    )
}

