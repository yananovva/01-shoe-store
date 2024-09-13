import {ProductsProps} from "./Products.props";
import styles from './Products.module.css';
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/API";
import {LoadingSkeleton} from "../LoadingSkeleton/LoadingSkeleton";

export function Products({src, name, price}: ProductsProps) {
    const [api, setApi] = useState<ProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsLoading(true);
            await new Promise<void>((resolve) => {
                setTimeout(()=> {
                    resolve();
                }, 2000);
            });

            const {data} = await axios.get<ProductsProps[]>(`${PREFIX}/api`);
            setApi(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            setIsLoading(false);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);




    const products = [
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/public/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
    ];



    return (
        <div className={styles['products']}>
            <div className={styles['products__img']}>
                {error && <>(error)</>}
                {!isLoading && products.map((_product, index) => (
                    <div key={index} className={styles["product"]}>
                        <img className={styles['image-shoe']}
                             src={src}
                             alt={`Изображение продукта ${index + 1}`}/>
                        <div className={styles['products__description']}>
                            <p className={styles['product__name']}>{name}</p>
                            <p>{price}</p>
                            <button className={styles['cart__image']}>
                                <img src="/store/public/control.svg" alt="Кнопка добавления в корзину"/>
                            </button>
                            <LoadingSkeleton data={}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;