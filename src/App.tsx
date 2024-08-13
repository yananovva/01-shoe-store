import './App.css'
import Button from "./components/Button/Button.tsx";
import Input from "./components/Input/Input.tsx";
import HeaderHero from "./components/HeaderHero/HeaderHero.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import Products from "./components/Products/Products.tsx";
import FooterHero from "./components/FooterHero/FooterHero.tsx";


function App() {
    return (
        <>
            <HeaderHero/>
            <Main>
                <Input/>
                <Button/>
                <Products>
                    <img src='../images/image-shoe.png' alt='Изображение кроссовок'/>
                    <Button/>
                </Products>
            </Main>
            <FooterHero/>
            <Footer>
                <p>Catalog</p>
                <p>FAQ</p>
            </Footer>
        </>
    );
}

export default App;
