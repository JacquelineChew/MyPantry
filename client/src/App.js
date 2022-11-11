import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import Dashboard from "./Dashboard.js";
import UserProfileInfoPage from "./UserProfileInfoPage";
import PantryProfile from "./PantryProfile.js";
import PantryPosts from "./PantryPosts.js";
import RegisterPantry from "./RegisterPantry.js";
import UpdatePantry from "./UpdatePantry.js";
import React, { useEffect } from "react";

function App() {
  // Update screen tab bar to show title
  useEffect(() => {
    document.title = "MyPantry";
  }, []);
  return (
    // define routes and corresponding components
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/Login" component={Login} exact />
        <Route
          path="/UserProfileInfoPage"
          component={UserProfileInfoPage}
          exact
        />
        <Route path="/RegisterPantry" component={RegisterPantry} exact />
        <Route path="/UpdatePantry" component={UpdatePantry} exact />
        <Route path="/PantryProfile" component={PantryProfile} exact />
        <Route path="/PantryPosts" component={PantryPosts} exact />
      </Switch>
    </Router>
  );
}

export default App;
