import {NavLink} from "react-router-dom";

export function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="about">About</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="contact">Contact</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4"  exact to="/addPost">Добавить пост</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}