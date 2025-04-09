import Link from "next/link"
import styles from './styles.modules.css';

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg fixed-top shadow mb-5">
                <div className="container-fluid justify-content-around">
                    <Link className="navbar-brand blueText" href="/">
                        <h1>H2Water</h1>
                    </Link>
                    <small>
                        Saving the world One bottle at time
                    </small>
                    <ul className="navbar-nav">
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
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                <h2>
                                    About Us
                                </h2>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}