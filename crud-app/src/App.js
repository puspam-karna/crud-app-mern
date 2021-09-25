import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import NotFound from "./components/NotFound";
import EditUsers from "./components/EditUsers";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUsers} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
