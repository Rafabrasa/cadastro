import { Slot } from '@radix-ui/react-slot'; 
import { clsx } from 'clsx';
import { ReactNode } from 'react';


export interface TextProps {

    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChiild?: boolean;
}



export function Text({size = 'md', children, asChiild }:TextProps) {
    const Comp = asChiild ? Slot :'span';

    return (
        <Comp className={clsx (
            'text-gray-100',
        {
            'text-xs': size =='sm',
            'text-sm': size =='md',
            'text-md': size =='lg',

        }
    )} 
    >
        {children}
    
    </Comp>


    ) 
}  