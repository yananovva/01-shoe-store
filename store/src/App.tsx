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
            <HeaderHero
                logoText="Goods4you"
                catalog="Catalog"
                faq="FAQ"
                cart="Cart"
                cartIconSrc="../../../public/cart.svg"
                logoBack="Goods4you"
                bigText="Any products from famous brands<br/>
                    with worldwide delivery"
                smallText="We sell smartphones, laptops, clothes, shoes<br/>
                    and many other products at low prices"
            />
            <Button onClick={addCounter}>Go to shopping</Button>
            <Main catalog="Catalog">
                <Input placeholder='Search by title'/>
                <Button onClick={addCounter}>Search</Button>
                <Products src="/public/image-shoe.png"
                          name="Essence Mascara Lash Princess"
                          price="110 $">
                    <Button onClick={addCounter}>Show more</Button>
                </Products>
            </Main>
            <FooterHero
                bigFaq="FAQ"
                question="Question 1"
                question2="Question 2"
                questionText="Long answer to the first question"
                plusIcon="../../../public/plus_icon.svg"
            />
            <Footer logoText="Goods4you"
                    catalog="Catalog"
                    faq="FAQ"
            />
        </>
    );
}

export default App;
