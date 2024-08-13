import './FooterHero.css';
import Line from "../Line/Line.tsx";

function FooterHero() {


    return (
        <div className='hero footer_hero'>
            <div className='hero__section'>
                <h1 className='logo'>FAQ</h1>
                <Line/>
                <div className='question'>
                    <p className='footer__text'>Question 1</p>
                    <img
                        className='footer__image'
                        src='images/plus_icon.svg'
                        alt='Изображение креста'
                        // onClick={}
                    />
                </div>
                <div className='answer'>
                    <p className='hero__small_text'>Long answer to the first question</p>
                </div>
                <Line/>
                <div className='question'>
                    <p className='footer__text'>Question 2</p>
                    <img
                        className='footer__image'
                        src='images/plus_icon.svg'
                        alt='Изображение плюса'
                        // onClick={}
                    />
                </div>
                <Line/>
            </div>
        </div>
    )
}

export default FooterHero;