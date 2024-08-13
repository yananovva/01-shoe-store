import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__navigation'>
                <a href='' className='logo'>Goods4you</a>
                <nav className='menu'>
                    <ul className='menu__link'>
                        <li><a href={''}>Catalog</a></li>
                        <li><a href={''}>FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;