import {MouseEvent, useState} from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import FooterHero from "./components/FooterHero/FooterHero";

import './App.css'


function App() {
    const [counter, setCounter] = useState<number>(0);

    const addCounter = (e: MouseEvent) => {
        console.log(e);
    };

    return (
        <>
            <HeaderHero/>
            <Main>
                <Button onClick={addCounter}>Go to shopping</Button>
                <Input placeholder='Search by title'/>
                <Button onClick={addCounter}>Search</Button>
                <Products src="/public/image-shoe.png" name="Essence Mascara Lash Princess" price="110 $">
                    <Button onClick={addCounter}>Show more</Button>
                </Products>
            </Main>
            <FooterHero></FooterHero>
            <Footer logoText="Goods4you" catalog="Catalog" faq="FAQ">
                {/*<p>Catalog</p>*/}
                {/*<p>FAQ</p>*/}
            </Footer>
        </>
    );
}

export default App;
