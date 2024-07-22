import './Main.css';
import Button from "../Button/Button.tsx";
import Products from "../Products/Products.tsx";
import Input from "../Input/Input.tsx";

function Main() {

    return (
        <div className='main'>
            <h1 className='logo logo_black'>Catalog</h1>
            <div className='main__search'>
                <Input/>
                <Button text="Search"/>
            </div>
            <Products/>
        </div>
    );
}

export default Main;