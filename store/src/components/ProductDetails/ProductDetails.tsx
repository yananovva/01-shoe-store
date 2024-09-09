import {ProductDetailsProps} from "./ProductDetails.props";

import styles from './ProductDetails.module.css';


export function ProductDetails(props: ProductDetailsProps) {
        return (
            <div className={styles['productDetails']}>
                <div className={styles['row']}>
                    <span>Rating:</span>
                    <span className={styles['bold']}>{props.rating}</span>
                </div>
                <div className={styles['row']}>
                    <span>Base price:</span>
                    <span className={styles['bold']}>{props.basePrice}$</span>
                </div>
                <div className={styles['row']}>
                    <span>Discount percentage:</span>
                    <span className={styles['bold']}>{props.discountPercentage}%</span>
                </div>
                <div className={styles['row']}>
                    <span>Discount price:</span>
                    <span className={styles['bold']}>{props.discountPrice}$</span>
                </div>
                <div className={styles['row']}>
                    <span>Stock:</span>
                    <span className={styles['bold']}>{props.stock}</span>
                </div>
                <div className={styles['row']}>
                    <span>Brand:</span>
                    <span className={styles['bold']}>{props.brand}</span>
                </div>
                <div className={styles['row']}>
                    <span>Category:</span>
                    <span className={styles['bold']}>{props.category}</span>
                </div>
                <div className={styles['row']}>
                    <span>Description:</span>
                    <span className={styles['bold']}>{props.description}</span>
                </div>
            </div>
        );
    }

export default ProductDetails;
