import './FooterHero.css';
import Line from "../Line/Line.tsx";

function FooterHero() {

    const toggle = (question) => {
        setOpen(prevState => ({...prevState, [question]: !prevState[question]}));
    }

    return (
        <div className='hero footer_hero'>
            <h1>FAQ</h1>
            <Line/>
            <div className='question'>
                <p className='footer__text'>Question 1</p>
                <img
                    className=''
                    // src='images/plus_icon.svg'
                    alt='Изображение креста'
                    onClick={() => toggle('q1')}
                />
            </div>
            <div className=''>
                <p className='hero__small_text'>Long answer to the first question</p>
            </div>
            <Line/>
            <div className='question'>
                <p className='footer__text'>Question 2</p>
                <img
                    className=''
                    // src='images/plus_icon.svg'
                    alt='Изображение плюса'
                    onClick={() => toggle('q2')}
                />
            </div>
            <Line/>
        </div>
    )
}

export default FooterHero;