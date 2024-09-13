import styles from './Footer.module.css';
import {FooterProps} from "./Footer.props";

function Footer({logoText, catalog, faq}: FooterProps) {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer__navigation']}>
                <a href='/' className={styles['logo']}>{logoText}</a>
                <nav className={styles['menu']}>
                    <ul className={styles['menu__link']}>
                        <li>
                            <a href={'/catalog'} className={styles['logo_footer']}>{catalog}</a>
                        </li>
                        <li>
                            <a href={'/faq'} className={styles['logo_footer']}>{faq}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;