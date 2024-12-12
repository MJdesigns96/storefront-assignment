import Link from "next/link"

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg mt-2 pr-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <h1>H2Water</h1>
                    </Link>
                    <small>
                        Water for your everyday
                    </small>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/products">
                                <h2>
                                    Bottles
                                </h2>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/stores">
                                <h2>
                                    Stores
                                </h2>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                <h2>
                                    About Us
                                </h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
    )
}