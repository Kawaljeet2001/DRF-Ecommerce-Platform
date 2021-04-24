import "./App.css";
import React from "react";
import ProductDetailPage from "./Pages/ProductDetail";
import HomePage from "./Pages/HomePage";
import { Switch, Route, Redirect} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import Navbar from "./Components/Navbar";
import CartPage from "./Pages/Cart";
import UserContext from "./UserContext";

function App() {
  const [LoggedUser, setLoggedUser] = React.useState(false);
  function UpdateUser(e) {
    setLoggedUser(e);
  }

  React.useEffect(() => {
    var mylocalstorage = window.localStorage;

    var currentuser = mylocalstorage.getItem("currentlyLoggedUser");
    if(currentuser)
    {
        //means there is a user who has logged in with login panel
        setLoggedUser(currentuser);
    }

    document.getElementsByClassName("Navbar")[0].style.display = "flex";

  } , [])
  return (
    <>
      <UserContext.Provider value = {{LoggedUser , UpdateUser}}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact key={1}>
              <HomePage />
            </Route>
            <Route path="/product/:productid" key={3}>
              <ProductDetailPage />
            </Route>
            <Route path="/search" key={2}>
              <SearchPage />
            </Route>
            <Route path="/login" key={4}>
              <LoginRegisterPage/>
            </Route>
            <Route path="/cart" key={5}>
              <CartPage/>
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
