import { Navigate, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav id="navbar-special" className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Welcome to the jungle</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item my-2">
                        <Link id="anchor-tag" to="/">Home</Link>
                    </li>
                    <li className="nav-item my-2">
                        <Link id="anchor-tag" to="/info">Users</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;