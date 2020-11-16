import React from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./Components/NaveBar/NavBar";
import SideMenu from "./Components/SideMenu/SideMenu";
import ListProducts from "./Components/Products/ListProducts/ListProducts";
import SearchResult from "./Components/Products/SearchProducts/SearchProducts";
import ShippingCart from "./Components/ShippingCart/ShippingCart";
import Checkout from "./Components/Checkout/CheckoutContainer"
import Login from './Components/User/Login/Login'
import dataProduct from "./data.json";



function App() {
  const NavBarwithRouter = withRouter(NavBar);

  return (
    <>
      <HashRouter>
        <NavBarwithRouter />

        <div className="row m-0 pt-3">
          <div className="col-12 col-sm-3 col-md-3 col-lg-2">
            <SideMenu />
          </div>
          <div className="col-12 col-sm-9 col-md-9 col-lg-10">
            <Switch>
          
              <Route
                path="/search/:search"
                render={(props) => (
                  <SearchResult allProducts={dataProduct} {...props} />
                )}
              />
              <Route path="/shippingcart" component={ShippingCart} />
              <Route path="/checkout" component={Checkout}/>
               <Route path="/login" component={Login}/>
              <Route
                path="/:idCategory/:categoryName"
                render={(props) => (
                  <ListProducts  {...props} />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <ListProducts allProducts={dataProduct} {...props} />
                )}
              />


                




            </Switch>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
