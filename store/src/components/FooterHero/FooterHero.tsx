
import Line from "../Line/Line";

import styles from './FooterHero.module.css';

function FooterHero() {


    return (
        <div className={styles['hero footer_hero']}>
            <div className={styles['hero__section']}>
                <h1 className={styles['logo']}>FAQ</h1>
                <Line/>
                <div className={styles['question']}>
                    <p className={styles['footer__text']}>Question 1</p>
                    <img
                        className={styles['footer__image']}
                        src='../../../public/plus_icon.svg'
                        alt='Изображение креста'
                        // onClick={}
                    />
                </div>
                <div className={styles['answer']}>
                    <p className={styles['hero__small_text']}>Long answer to the first question</p>
                </div>
                <Line/>
                <div className={styles['question']}>
                    <p className={styles['footer__text']}>Question 2</p>
                    <img
                        className={styles['footer__image']}
                        src='../../../public/plus_icon.svg'
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