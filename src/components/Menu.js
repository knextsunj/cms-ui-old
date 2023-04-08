import { Component } from "react";
import Master from "./Master";
import Home from "./Home";

import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <div>

                            <NavLink
                                exact
                                to="/master/*"
                                > 
                                Master
                                
                            </NavLink>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavLink
                                exact
                                to="/"
                              
                            >
                                Home
         
    
                            </NavLink>
                    <Routes>
               
                        <Route exact path="/master/*" Component={Master}>

                        </Route>
                        <Route exact path="/" Component={Home}>
                        </Route>
                      
                    </Routes>
                </div>
            </Router>
        );
    }

}

export default Menu;