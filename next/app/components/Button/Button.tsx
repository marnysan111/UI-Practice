export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonVariant = 'solid' | 'outline';

export type ButtonProps = {
    size: ButtonSize
    variant: ButtonVariant;
    className?: string;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeStyles: { [key in ButtonSize]: string } = {
    lg: 'px-6 py-3 text-lg rounded-lg ',
    md: 'px-4 py-2 text-md rounded-lg',
    sm: 'px-2 py-1 text-sm rounded-lg',
};

const variantStyles: { [key in ButtonVariant]: string } = {
    solid: 'bg-blue-500 text-white border-none',
    outline: 'bg-transparent text-blue-500 border border-blue-500',
};


export const Button = ({ size, variant, className, children, ...rest }: ButtonProps) => {
    const classNames = `${sizeStyles[size]} ${variantStyles[variant]} ${className ?? ''}`
    return (
        <button
            className={classNames}
            {...rest}
        >
            {children}
        </button>
    )
}

