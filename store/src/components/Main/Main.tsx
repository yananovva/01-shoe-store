import Button from "../Button/Button";
import Products from "../Products/Products";
import Input from "../Input/Input";
import {MainProps} from "./Main.props";

import styles from './Main.module.css';

function Main({catalog}: MainProps) {
    return (
        <div className={styles['main']}>
            <div className={styles['main__head']}>
                <h1 className={styles['logo logo_black']}>{catalog}</h1>
                <div className={styles['main__search']}>
                    <Input/>
                    <Button/>
                </div>
            </div>
            <Products name="Essence Mascara Lash Princess" price="110 $" src="/public/image-shoe.png"/>
            <div className={styles['products__button']}>
                <Button/>
            </div>
        </div>
    );
}

export default Main;