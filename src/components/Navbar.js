import React, { Component } from 'react';
import logo from '../images/brandz.svg';
import { FaAlignRight } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink to="/#">
                            <img src={logo} alt="Interior Design" className="nav-img"/>
                        </NavLink>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>    
                        </button>
                        
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}  onClick={this.handleToggle}>
                    <li>
                     <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                     <NavLink to="/designs" activeClassName="active">Designs</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                    </ul>
                   
                </div>
            </nav>
        )
    }
}
