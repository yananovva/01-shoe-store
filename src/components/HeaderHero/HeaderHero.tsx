import './HeaderHero.css';
import Button from "../Button/Button.tsx";
import Line from "../Line/Line.tsx";

function HeaderHero() {
    return (
        <div className='hero header_hero'>
            <div className='header__navigation'>
                <a href='' className='logo'>Goods4you</a>
                <nav className='menu'>
                    <ul className='menu__link'>
                        <li><a href={''}>Catalog</a></li>
                        <li><a href={''}>FAQ</a></li>
                        <li><a href={''}>Cart</a></li>
                    </ul>
                    <img className='cart'
                         src='images/cart.svg'
                         alt='Изображение корзины'/>
                </nav>
            </div>
            <Line/>
            <p className='back_text'>Goods4you</p>
            <div className='header__text'>
                <p className='hero__big_text'>Any products from famous brands<br/>
                    with worldwide delivery
                </p>
                <p className='hero__small_text'>We sell smartphones, laptops, clothes, shoes<br/>
                    and many other products at low prices
                </p>
                <Button text="Go to shopping"/>
            </div>
        </div>
    )
}

export default HeaderHero;