import './Products.css';

function Products() {
    const products = [
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $", button: ""},
    ];

    return (
        <div className='products'>
            <div className='products__img'>
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img src={product.src} alt={`Изображение продукта ${index + 1}`}/>
                        <div className='products__description'>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.button}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;