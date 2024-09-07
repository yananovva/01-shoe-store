
import {Link, Outlet} from "react-router-dom";

export function HeaderHeroLayout() {
    return <div>
        <div>
            <Link to='/'>MainPage</Link>
            <Link to='/cart'>Catalog</Link>
            <Link to='/cart'>FAQ</Link>
            <Link to='/cart'>Cart</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>;
}