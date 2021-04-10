import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Signup from "./components/auth/signup/Signup";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/:type" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
