import styles from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames";
import {HeaderProps} from "./Header.props";

export function Header({logoText, navLinks, cartIconSrc}: HeaderProps) {
    return (
        <div className={styles['header header_h']}>
            <div className={styles['header__nav']}>
                <NavLink to='/' className={({isActive}) => cn(styles['logo'], {
                    [styles.active]: isActive
                })}>{logoText}
                </NavLink>
                <nav className={styles['menu_head']}>
                    <ul className={styles['menu_link']}>
                        {navLinks?.map((link, index) => (
                            <li key={index}>
                                <NavLink to={link.path} className={({isActive}) => cn(styles['logo'], {
                                    [styles.active]: isActive
                                })}>{link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <img className={styles['cart']}
                         src={cartIconSrc}
                         alt='Изображение корзины'/>
                </nav>
            </div>
        </div>
    )
}

export default Header;