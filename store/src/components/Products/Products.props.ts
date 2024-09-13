import {ReactNode} from "react";

export interface ProductsProps {
    src: string;
    name: string;
    price: string;
    children?: ReactNode;
}
