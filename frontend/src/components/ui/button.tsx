import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-300 font-medium text-sm';
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 active:bg-blue-950',
    secondary: 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};