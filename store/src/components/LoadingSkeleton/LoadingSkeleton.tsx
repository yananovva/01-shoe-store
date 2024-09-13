import {Await} from "react-router-dom";
import {Suspense} from "react";
import {ProductsProps} from "../Products/Products.props";
import {LoadingSkeletonProps} from "./LoadingSkeleton.props";

export const LoadingSkeleton = ({data}: LoadingSkeletonProps) => {
    return (
        <Suspense fallback={'Загружаю...'}>
            <Await resolve={data}>
                {({ data }: { data: ProductsProps }) => (
                    <>Product - {data.name}</>
                )}
            </Await>
        </Suspense>
    );
}
