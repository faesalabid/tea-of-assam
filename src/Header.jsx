
function Header(){
 
    return(
        <header className="head">
            <ul className="head-container">
                <li>Home</li>
                <li>Products</li>
                <li className="pages">Pages
                    <ul className="dropdown-content">
                        <li><a href="#pages1">About Us</a></li>
                        <li><a href="#pages2">Contact</a></li>
                        <li><a href="#pages3">Terms and Policies</a></li>
                    </ul>
                </li>
            </ul>
        </header>
    )
}

export default Header 