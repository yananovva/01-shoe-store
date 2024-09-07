import {ProductCardProps} from "./ProductCard.props";
import {Link} from "react-router-dom";


function ProductCard(props: ProductCardProps) {
 return (
     <Link to={`/product/${props.id}`} className={}>
         <div>
верстка
         </div>


     </Link>
 )
}

export default ProductCard;