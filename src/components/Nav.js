import { Link } from "react-router-dom"

function Nav(){
    return(
        <div>
            <Link className="logo" to="/">V</Link>
            <Link className="links" to="/">home</Link>
            <Link className="links" to="/about">about</Link>
            <Link className="links" to="/project">projects</Link>
            <Link className="links" to="/social">social</Link>
        </div>
    );
}

export default Nav;