import {ProductsProps} from "./Products.props";
import styles from './Products.module.css';

function Products({src, name, price}: ProductsProps) {
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
                {products.map((_product, index) => (
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;