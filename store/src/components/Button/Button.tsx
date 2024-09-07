import {ButtonProps} from "./Button.props";
import cn from 'classnames';

import styles from './Button.module.css';

function Button({ children, className,  ...props}: ButtonProps) {
	return (
		<button className={cn(styles['button accent'], className)} {...props}>{children}</button>
	);
}

export default Button;