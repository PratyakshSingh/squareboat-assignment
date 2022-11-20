import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import JobsPage from "./Pages/JobsPage/JobsPage";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const data = localStorage.getItem("auth-user");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/jobs">
            {!isAuthenticated || !data ? <Redirect to="/" /> : <JobsPage />}
          </Route>
          <Route path="/login">
            {isAuthenticated || data ? <Redirect to="/jobs" /> : <Login />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
