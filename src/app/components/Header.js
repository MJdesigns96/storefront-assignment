import Link from "next/link"

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Storefront</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/stores">Stores</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
                    </ul>          
                </div>
            </nav>
        </header>
        
    )
}