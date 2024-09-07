import {NavLink} from "react-router-dom";

import Button from "../Button/Button";
import Line from "../Line/Line";
import cn from "classnames";

import styles from './HeaderHero.module.css';

export function HeaderHero() {
    return (
        <div className={styles['hero header_hero']}>
            <div className={styles['header__navigation']}>
                <NavLink to='/' className={({isActive}) => cn(styles['logo'], {
                    [styles.active]: isActive
                })}>Goods4you</NavLink>
                <nav className={styles['menu']}>
                    <ul className={styles['menu__link']}>
                        <li><NavLink to='/catalog' className={({isActive}) => cn(styles['logo'], {
                            [styles.active]: isActive
                        })}>Catalog</NavLink></li>
                        <li><NavLink to='/faq' className={({isActive}) => cn(styles['logo'], {
                            [styles.active]: isActive
                        })}>FAQ</NavLink></li>
                        <li><NavLink to='/cart' className={({isActive}) => cn(styles['logo'], {
                            [styles.active]: isActive
                        })}>Cart</NavLink></li>
                    </ul>
                    <img className={styles['cart']}
                         src='../../../public/cart.svg'
                         alt='Изображение корзины'/>
                </nav>
            </div>
            <Line/>
            <p className={styles['back_text']}>Goods4you</p>
            <div className={styles['header__text']}>
                <p className={styles['hero__big_text']}>Any products from famous brands<br/>
                    with worldwide delivery
                </p>
                <p className={styles['hero__small_text']}>We sell smartphones, laptops, clothes, shoes<br/>
                    and many other products at low prices
                </p>
                <Button/>
            </div>
        </div>
    )
}

export default HeaderHero;