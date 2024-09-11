import {Await, useLoaderData} from "react-router-dom";
import {ProductsProps} from "../components/Products/Products.props";
import {Suspense} from "react";

export function Product() {
    const data = useLoaderData() as { data: ProductsProps };
    return <>
        <Suspense fallback={'Загружаю...'}>
            <Await resolve={data.data}>
                {({data}: { data: ProductsProps }) => (
                    <>Product - {data.name}</>
                )}
            </Await>
        </Suspense>
    </>
}