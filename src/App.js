import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ExploreCourse from "./Components/ExploreCourse/ExploreCourse";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className='App'>
      {/* Start Router Here */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/courses'>
            <ExploreCourse></ExploreCourse>{" "}
          </Route>
          {/* If Router not match then it will be show NotFound */}
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
        {/* Footer */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
