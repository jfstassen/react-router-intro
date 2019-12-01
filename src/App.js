import React from "react";
import "./App.css";
import Dog from "./Dog";
import { Route, Switch, NavLink } from "react-router-dom"; //Link
import Contact from "./Contact";
import About from "./About";

const Hater = () => <h1>I REALLY HATE DOGS!</h1>;

function App() {
    return (
        <div className="App">
            <nav className="App-nav">
                {/* WE CANT USE HREF BECAUSE IT MAKES PAGE REALOAD, 
                 INSTEAD WE USE LINK COMPONENT WITH A PROP CALLED "TO" 
                The bad way:
                  <a href="/dog">Dog</a>
                  <a href="/contact">contact</a>
                  <a href="/">About</a>
                The good way:
                  <Link to="/dog">Dog</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/">About</Link>
                The perfect way:
                <NavLink> is just like Link but we can use activeClassName as props 
                We add exact because otherwise we have same issue before */}
                <NavLink to="/dog" exact activeClassName="active-link">
                    Dog
                </NavLink>
                <NavLink to="/contact" exact activeClassName="active-link">
                    Contact
                </NavLink>
                <NavLink to="/" exact activeClassName="active-link">
                    About
                </NavLink>
            </nav>

            <Switch>
                {/* limit one match in this group */}
                <Route exact path="/" component={About} />
                {/* oui mais comment passer des props ? OPTION 1: */}
                {/* component will mount unmount etc (run the lifecycle everytime) */}
                <Route exact path="/dog" component={() => <Dog name="Charlie"/>} />
                {/* SI ON PASSE DES PROPS C'EST MIEUX OPTION 2: */}
                {/* render will only rerender / reuse the existing component*/}
                <Route exact path="/dog" render={() => <Dog name="biscuits"/>} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/dog/hater" component={Hater} />
            </Switch>
        </div>
    );
}

export default App;

// "/dog" => Dog
