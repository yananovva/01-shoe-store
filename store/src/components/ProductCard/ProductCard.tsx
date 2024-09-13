import {ProductCardProps} from "./ProductCard.props";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
import Button from "../Button/Button";

import styles from "./ProductCard.module.css";


function ProductCard(props: ProductCardProps) {
    return (
        <Link to={`/product/${props.id}`}>
            <Header
                logoText="Goods4you"
                navLinks={[
                    {path: '/catalog', label: 'Catalog'},
                    {path: '/faq', label: 'FAQ'},
                    {path: '/cart', label: 'Cart'}
                ]}
                cartIconSrc="../../../public/cart.svg"/>
            <div className={styles['main_head']}>
                <div className={styles['puma_product']}>
                    <div>Product 5</div>
                    <img className={styles['puma_photo']}
                         src="../../../public/puma_product_card.png"
                         alt="Изображение кроссовок"/>
                </div>
                <div className={styles['puma_desc']}>
                    <div className={styles['desc_head']}>
                        <h2>Puma Force 1 Shadow</h2>
                        <span>`SKU ID ${props.id}`</span>
                    </div>
                    <ProductDetails
                        rating="../../../public/group_star.svg"
                        basePrice={500}
                        discountPercentage={10}
                        discountPrice={450}
                        stock={13}
                        brand="Puma"
                        category="Smartphones"
                        description="An apple mobile which is nothing like apple"
                    />
                    <Button>Add to cart</Button>
                </div>
            </div>
            <Footer logoText="Goods4you" catalog="Catalog" faq="FAQ"/>
        </Link>
    )
}

export default ProductCard;