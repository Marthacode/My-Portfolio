import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav=(props)=>{
    return(
        <div>
            <div className="navigation text-warning">
                <nav className="navbar navbar-expand text-warning">
                    <div className="container">
                        <Link class="navbar-brand" to="/">
                            Martha
                        </Link>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                                >
                                    <Link className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                                >
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                               
                                <li className={`nav-item ${
                                props.location.pathname === "/contact" ? "active" : ""
                                }`}
                                >
                                <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default withRouter(Nav)

