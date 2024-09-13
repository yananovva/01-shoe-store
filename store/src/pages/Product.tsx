import {useLoaderData} from "react-router-dom";
import {ProductsProps} from "../components/Products/Products.props";
import {LoadingSkeleton} from "../components/LoadingSkeleton/LoadingSkeleton";

export function Product() {
    const data = useLoaderData() as { data: ProductsProps };
    return <>
        <LoadingSkeleton data={data.data}/>
    </>
}