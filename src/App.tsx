import './App.css'
import Button from "./components/Button/Button.tsx";
import Input from "./components/Input/Input.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import Products from "./components/Products/Products.tsx";


function App() {
    return (
        <>
            <Hero>
                <p>Any products from famous brands<br/> with worldwide delivery</p>
                <p>We sell smartphones, laptops, clothes, shoes<br/> and many other products at low prices</p>
                <p className='back-text'>Goods4you</p>
                <Button>Go to shopping</Button>
            </Hero>
            <Main>
                <h2>Catalog</h2>
                <Input>Search by title</Input>
                <Button>Search</Button>
                <Products>
                    <img src='../images/image.png' alt='Изображение кроссовок'/>
                    <Button>Show more</Button>
                </Products>
            </Main>
            <Hero>
                FAQ
            </Hero>
            <Footer>
                <p>Catalog</p>
                <p>FAQ</p>
            </Footer>
        </>
    );
}

export default App;
