import Line from "../Line/Line";
import {FooterHeroProps} from "./FooterHero.props";

import styles from './FooterHero.module.css';

function FooterHero(props:FooterHeroProps) {
    return (
        <div className={styles['hero footer_hero']}>
            <div className={styles['hero__section']}>
                <h1 className={styles['logo']}>{props.bigFaq}</h1>
                <Line/>
                <div className={styles['question']}>
                    <p className={styles['footer__text']}>{props.question}</p>
                    <img
                        className={styles['footer__image']}
                        src={props.plusIcon}
                        alt='Изображение плюса'
                    />
                </div>
                <div className={styles['answer']}>
                    <p className={styles['hero__small_text']}>{props.questionText}</p>
                </div>
                <Line/>
                <div className={styles['question']}>
                    <p className={styles['footer__text']}>{props.question2}</p>
                    <img
                        className={styles['footer__image']}
                        src={props.plusIcon}
                        alt='Изображение плюса'
                    />
                </div>
                <Line/>
            </div>
        </div>
    )
}

export default FooterHero;