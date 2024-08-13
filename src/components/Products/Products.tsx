import './Products.css';

function Products() {
    const products = [
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
        {src: "/images/image-shoe.png", name: "Essence Mascara Lash Princess", price: "110 $"},
    ];

    return (
        <div className='products'>
            <div className='products__img'>
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img className='image-shoe'
                             src={product.src}
                             alt={`Изображение продукта ${index + 1}`}/>
                        <div className='products__description'>
                            <p className='product__name'>{product.name}</p>
                            <p>{product.price}</p>
                            <button className='cart__image'>
                                <img src="/images/control.svg" alt="Кнопка добавления в корзину"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;