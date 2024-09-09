import {NavLink} from "react-router-dom";

import Button from "../Button/Button";
import Line from "../Line/Line";
import cn from "classnames";
import {HeaderHeroProps} from "./HeaderHero.props";

import styles from './HeaderHero.module.css';

export function HeaderHero(props: HeaderHeroProps) {
    return (
        <div className={styles['hero header_hero']}>
            <div className={styles['header__navigation']}>
                <NavLink to='/' className={({isActive}) => cn(styles['logo'], {
                    [styles.active]: isActive
                })}>{props.logoText}
                </NavLink>
                <nav className={styles['menu']}>
                    <ul className={styles['menu__link']}>
                        <li>
                            <NavLink to='/catalog' className={({isActive}) => cn(styles['logo'], {
                                [styles.active]: isActive
                            })}>{props.catalog}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq' className={({isActive}) => cn(styles['logo'], {
                                [styles.active]: isActive
                            })}>{props.faq}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart' className={({isActive}) => cn(styles['logo'], {
                                [styles.active]: isActive
                            })}>{props.cart}
                            </NavLink>
                        </li>
                    </ul>
                    <img className={styles['cart']}
                         src={props.cartIconSrc}
                         alt='Изображение корзины'/>
                </nav>
            </div>
            <Line/>
            <p className={styles['back_text']}>Goods4you</p>
            <div className={styles['header__text']}>
                <p className={styles['hero__big_text']}>{props.bigText}
                </p>
                <p className={styles['hero__small_text']}>{props.smallText}
                </p>
                <Button/>
            </div>
        </div>
    )
}

export default HeaderHero;