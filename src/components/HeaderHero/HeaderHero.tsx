import './HeaderHero.css';
import Button from "../Button/Button.tsx";
import Line from "../Line/Line.tsx";

function HeaderHero() {
    return (
        <div className='hero header_hero'>
            <div className='header__navigation'>
                <a href='' className='logo'>Goods4you</a>
                <section className='menu'>
                    <div className='menu__link'>
                        <a href={''}>Catalog</a>
                        <a href={''}>FAQ</a>
                        <a href={''}>Cart</a>
                    </div>
                    <img className='cart'
                         src='images/cart.svg'
                         alt='Изображение корзины'/>
                </section>
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