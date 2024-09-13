import {ProductsProps} from "../Products/Products.props";

export interface LoadingSkeletonProps {
    data: Promise<ProductsProps>;
}