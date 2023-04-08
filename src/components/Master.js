import { Fragment,useState} from "react"
import Country from "./Country";
import { BrowserRouter as Router,Route, NavLink, Routes  } from 'react-router-dom';
import ShowAllCountries from "./ShowAllCountries";
import { useLocation } from 'react-router-dom';

const Master = function(props) {

    return(
      <Fragment>
  
        <h1>Master Pages</h1>

           <NavLink  exact to="/master/country" >Add Country</NavLink>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact to="/master/showAllCountries/*">Show All Countries</NavLink>
                           
                            <Routes>
                            <Route exact path="/country" Component={Country}>

</Route>
<Route exact path="/showAllCountries/*" Component={ShowAllCountries}></Route>
</Routes>

       </Fragment>
    );
}

export default Master;