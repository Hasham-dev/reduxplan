import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/project/CreateProject";
import ProjectDetails from "./components/project/ProjectDetails";



function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        {/* //Routes */}
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/create">
            <CreateProject />
          </Route>
          <Route path="/*">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
