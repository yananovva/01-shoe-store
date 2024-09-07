import {forwardRef} from "react";
import cn from 'classnames';
import {InputProps} from "./Input.props";

import styles from './Input.module.css';


const Input = forwardRef<HTMLInputElement, InputProps>(function Input({isValid = true, className, ...props}, ref){
    return (
        <input ref={ref} className={cn(styles['search'], className, {
            [styles['invalid']]: isValid
        })} {...props} />
    );
});

export default Input;
