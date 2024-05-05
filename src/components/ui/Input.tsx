import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full pl-4 text-white  bg-transparent px-3 py-2 text-[0.875rem]  ring-offset-background border-b border-white/50 file:border-0 file:bg-transparent outline-none  file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 focus:border-b-white focus:border-b-2 placeholder:text-white/50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
