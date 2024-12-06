import Link from "next/link"

export default function Footer() {
    return(
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <hr></hr>
            <section>
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <div className="row">
                            <h1 className="text-center">
                                <Link href="/">Storefront</Link>
                            </h1>
                            <p>blurb about company tagline</p>
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/stores">Stores</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
                                </ul>
                            </nav>
                            <p>Copyright</p>
                        </div>
                    </div>
                </div>         
            </section>
              
        </footer>
    )
}