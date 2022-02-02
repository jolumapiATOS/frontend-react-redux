import { Navigate, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav id="navbar-special" class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Welcome to the jungle</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item my-2">
                        <Link id="anchor-tag" to="/">Home</Link>
                    </li>
                    <li class="nav-item my-2">
                        <Link id="anchor-tag" to="/info">Users</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;