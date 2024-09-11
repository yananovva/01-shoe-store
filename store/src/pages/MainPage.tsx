import {useLoaderData} from "react-router-dom";
import {ProductsProps} from "../components/Products/Products.props";

export function MainPage() {
    const data = useLoaderData() as ProductsProps;
    return <>
        MainPage - {data.name}
    </>
}

export default MainPage;