import Link from "next/link"

export default function Footer() {
    return(
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="py-5 spacer mx-0 px-5">
                <div className="row py-5" id="footer">
                    <div className="col text-center">
                        <h1>
                            <Link className="navbar-brand" href="/">H2Water</Link>
                        </h1>
                        <p>Saving the world One bottle at time</p>
                    </div>
                    <div className="col">
                        <nav className="navbar navbar-expand-lg">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/stores">Stores</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li> */}
                            </ul>
                        </nav>
                        <p>&copy; Copyright HTTP5222 Marcus Jeong, 2024</p>
                    </div>
                </div>  
            </section>
              
        </footer>
    )
}